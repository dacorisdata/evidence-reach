# Deploy DACORIS EvidenceReach to e4impact.dacoris.com

Runbook for replacing the static site currently served at `https://e4impact.dacoris.com/` with the Next.js project in `C:\projects\evidencereach`.

**Approach:** back up the current site, remove it, deploy the new code from a Git repo, run it with PM2 on port 3100, and point nginx at it.

| Item | Value |
| --- | --- |
| Server | `snf-6939` (log in as `user`, then `sudo -i`) |
| Current site (to be replaced) | `/var/www/html/dacoris-site-static` (plain files served by nginx) |
| nginx config | `/etc/nginx/sites-available/dacoris-site-static` |
| New app folder | `/var/www/html/evidencereach` |
| New app process | PM2 app `evidencereach`, Node server on `127.0.0.1:3100` |
| Backups | `/root/backups/e4impact/` |
| Not touched | `legacy-forge` (port 4173), `dacoris-api` (port 8000), OnlyOffice (8081), RStudio (8787) |

Each block below is tagged **[WINDOWS]** (your PC, PowerShell) or **[SERVER]** (the root shell on snf-6939).

> **Downtime warning.** Between Part 3 (remove) and Part 5 (nginx switch) the site is down, typically 3 to 6 minutes. Part 4 does not depend on Part 3, so to cut the downtime to a few seconds, do Part 4 first, then Parts 2, 3 and 5 in a row.

---

## Part 0 - Before you start

### 0.1 Fix the domain in the code (important)

`src/content/site.ts` currently says:

```ts
url: 'https://evidencereach.dacoris.com',
```

That value feeds `metadataBase`, `sitemap.xml` and `robots.txt`. If you deploy to `e4impact.dacoris.com` without changing it, search engines and link previews will be told the site lives on `evidencereach.dacoris.com`.

Pick one:

- **Keep e4impact.dacoris.com:** change that line to `url: 'https://e4impact.dacoris.com',` before you commit in Part 1.
- **Use evidencereach.dacoris.com instead:** leave the code alone, but you need a DNS A record for that name and a new nginx server block plus certificate. See Appendix A.

### 0.2 Server pre-flight checks **[SERVER]**

```bash
node -v                           # expect v22.x (legacy-forge already runs 22.23.1)
npm -v
git --version                     # if missing: apt install -y git
ss -tlnp | grep ':3100' || echo "port 3100 is free"
free -h                           # the Next build wants roughly 1.5 GB free (RAM + swap)
df -h /var/www /root              # need at least 2 GB free
ls -l /etc/nginx/sites-enabled/ | cat   # dacoris-site-static must be linked here
pm2 -v
```

Do not continue if port 3100 is in use or `dacoris-site-static` is missing from `sites-enabled`.

---

## Part 1 - Push the project to Git **[WINDOWS]**

The project folder is not a Git repo yet.

1. On GitHub, create a new **private, empty** repository (no README, no .gitignore), for example `evidencereach`.
2. In PowerShell:

```powershell
cd C:\projects\evidencereach

# Keep the internal audit notes out of the repo
Add-Content .gitignore "Claude outputs/"

git init -b main
git add .
git status          # CHECK: no node_modules, .next or "Claude outputs" in the list
git commit -m "EvidenceReach marketing site"

git remote add origin git@github.com:<your-github-user-or-org>/evidencereach.git
git push -u origin main
```

`.gitignore` already excludes `node_modules`, `.next`, `out`, `.env*.local` and `*.tsbuildinfo`, so those will not be pushed.

Optional sanity check before pushing: `npm run build` should finish with no errors on your PC.

---

## Part 2 - Back up the current site **[SERVER]**

```bash
sudo -i     # if you are not already root

mkdir -p /root/backups/e4impact
TS=$(date +%F-%H%M)
BK=/root/backups/e4impact

# 1. The site files
tar -czf $BK/dacoris-site-static-$TS.tar.gz -C /var/www/html dacoris-site-static

# 2. The nginx config for the site
cp -a /etc/nginx/sites-available/dacoris-site-static $BK/dacoris-site-static.nginx-$TS.conf

# 3. Verify the archive is readable, and record a checksum
tar -tzf $BK/dacoris-site-static-$TS.tar.gz > /dev/null && echo "archive OK"
sha256sum $BK/dacoris-site-static-$TS.tar.gz | tee $BK/dacoris-site-static-$TS.sha256

ls -lh $BK
```

You should see `archive OK` and two files with sensible sizes. **Do not go on until you do.**

Optional off-server copy, so the backup survives a server failure. On the server, `cp $BK/dacoris-site-static-$TS.tar.gz /home/user/ && chown user: /home/user/dacoris-site-static-$TS.tar.gz`. Then on Windows:

```powershell
scp user@<server-ip>:/home/user/dacoris-site-static-*.tar.gz C:\backups\
```

---

## Part 3 - Remove the current site **[SERVER]**

```bash
# Last check that the backup exists
ls -lh /root/backups/e4impact/dacoris-site-static-*.tar.gz

# Remove the old static files
rm -rf /var/www/html/dacoris-site-static
```

Nothing else is removed. nginx keeps running, and the site returns errors until Part 5 is finished.

---

## Part 4 - Deploy the new app **[SERVER]**

### 4.1 Let the server read the private repo (deploy key)

Skip this if the repository is public and you clone over HTTPS.

```bash
ssh-keygen -t ed25519 -C "snf-6939 evidencereach deploy" -f /root/.ssh/evidencereach_deploy -N ""
cat /root/.ssh/evidencereach_deploy.pub
```

Copy the printed public key into GitHub: repo, then **Settings, Deploy keys, Add deploy key** (leave "Allow write access" off).

Tell SSH to use that key for this repo:

```bash
cat >> /root/.ssh/config <<'EOF'

Host github-evidencereach
    HostName github.com
    User git
    IdentityFile /root/.ssh/evidencereach_deploy
    IdentitiesOnly yes
EOF
chmod 600 /root/.ssh/config

ssh -T git@github-evidencereach     # expect: "Hi <repo>! You've successfully authenticated..."
```

### 4.2 Clone

```bash
cd /var/www/html
git clone git@github-evidencereach:<your-github-user-or-org>/evidencereach.git
cd evidencereach
```

### 4.3 Install and build

```bash
npm ci
npm run build
```

The build takes 1 to 3 minutes. It must end with a route table and no errors. If it prints `Killed`, the server ran out of memory (see Troubleshooting).

### 4.4 Run it with PM2, bound to localhost only

`next start` listens on all interfaces by default, so the `-H 127.0.0.1` below is deliberate: only nginx on the same machine can reach the app.

```bash
cd /var/www/html/evidencereach

cat > ecosystem.config.cjs <<'EOF'
module.exports = {
  apps: [
    {
      name: 'evidencereach',
      cwd: '/var/www/html/evidencereach',
      script: 'node_modules/next/dist/bin/next',
      args: 'start -H 127.0.0.1 -p 3100',
      env: { NODE_ENV: 'production' },
      max_memory_restart: '512M',
    },
  ],
};
EOF

pm2 start ecosystem.config.cjs
pm2 save
pm2 list
```

`pm2 save` matters: `pm2-root.service` already exists on this server, so the saved list is what PM2 restores after a reboot.

### 4.5 Test the app before touching nginx

```bash
ss -tlnp | grep ':3100'                              # must show 127.0.0.1:3100, not 0.0.0.0
curl -sI http://127.0.0.1:3100/ | head -1            # expect HTTP/1.1 200 OK
curl -sI http://127.0.0.1:3100/get-started | head -3      # expect 307 and Location: /get-started/packages
curl -sI http://127.0.0.1:3100/solutions/donors | head -3 # expect 308 and Location: /solutions/funders
pm2 logs evidencereach --lines 20 --nostream
```

If any of these fail, fix them now (see Troubleshooting) before continuing.

---

## Part 5 - Point nginx at the app **[SERVER]**

Edit the config:

```bash
nano /etc/nginx/sites-available/dacoris-site-static
```

In the **first** `server` block (the one with `listen 443 ssl`), replace these lines:

```nginx
    root /var/www/html/dacoris-site-static;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
```

with:

```nginx
    location / {
        proxy_pass http://127.0.0.1:3100;
        proxy_http_version 1.1;
        proxy_set_header Host              $host;
        proxy_set_header X-Real-IP         $remote_addr;
        proxy_set_header X-Forwarded-For   $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
```

Leave every line marked `# managed by Certbot` and the whole second `server` block (port 80) exactly as they are.

Test and apply:

```bash
nginx -t                    # must say "syntax is ok" and "test is successful"
systemctl reload nginx      # a reload keeps existing connections alive
```

If `nginx -t` fails, do not reload. Fix the file, or restore the copy from Part 2.

---

## Part 6 - Verify

**[SERVER]**

```bash
curl -sI https://e4impact.dacoris.com/ | head -12
# expect HTTP/2 200 and an "x-powered-by: Next.js" header (proof the new app answers)

curl -s https://e4impact.dacoris.com/robots.txt
# the Sitemap: line must show the domain you intend (see Part 0.1)

pm2 list
```

**[BROWSER]** open `https://e4impact.dacoris.com/` with a hard refresh (Ctrl+F5) and check:

- [ ] Home page loads with the full-width hero image
- [ ] Mega-menu opens; a Solutions page and a News page load
- [ ] Images load (they are optimised through the server, see Troubleshooting if not)
- [ ] `/get-started` redirects to `/get-started/packages`
- [ ] `/privacy` and `/terms` load
- [ ] `/sitemap.xml` loads
- [ ] `http://e4impact.dacoris.com` redirects to HTTPS

---

## Part 7 - Roll back **[SERVER]**

Use this if the new site is broken and you need the old one back.

```bash
# 1. Find the backup files from Part 2
ls -lh /root/backups/e4impact/

# 2. Restore the old files and the old nginx config (use your real timestamps)
tar -xzf /root/backups/e4impact/dacoris-site-static-<TIMESTAMP>.tar.gz -C /var/www/html
cp -a /root/backups/e4impact/dacoris-site-static.nginx-<TIMESTAMP>.conf /etc/nginx/sites-available/dacoris-site-static

# 3. Apply
nginx -t && systemctl reload nginx

# 4. Optional: stop the new app
pm2 stop evidencereach
```

The old site is back within seconds. The new app folder stays on disk, so you can investigate and retry.

---

## Part 8 - Deploy future updates **[SERVER]**

After you push changes to `main` from Windows:

```bash
cd /var/www/html/evidencereach
git pull --ff-only
npm ci
npm run build
pm2 restart evidencereach --update-env
```

To make this one command, save it as `/root/deploy-evidencereach.sh`, then run `chmod +x /root/deploy-evidencereach.sh`:

```bash
#!/usr/bin/env bash
set -euo pipefail
cd /var/www/html/evidencereach
git pull --ff-only
npm ci
npm run build
pm2 restart evidencereach --update-env
pm2 save
curl -fsS -o /dev/null -w "local health check: HTTP %{http_code}\n" http://127.0.0.1:3100/
```

`ecosystem.config.cjs` is untracked on the server, so `git pull` ignores it. To keep it under version control, commit it to the repo from Windows and delete the server copy.

---

## Troubleshooting

| Symptom | Likely cause | What to do |
| --- | --- | --- |
| `502 Bad Gateway` from nginx | App not running or wrong port | `pm2 list`, then `pm2 logs evidencereach --lines 50`, then `ss -tlnp \| grep 3100` |
| Build prints `Killed` | Out of memory | `free -h`. Add swap (`fallocate -l 2G /swapfile && chmod 600 /swapfile && mkswap /swapfile && swapon /swapfile`) or run `NODE_OPTIONS=--max-old-space-size=1536 npm run build` |
| `Permission denied (publickey)` on clone | Deploy key not added or not used | Re-check 4.1 and run `ssh -T git@github-evidencereach` |
| Images blank, `/_next/image` returns 400 or 500 | Server cannot reach Unsplash | `curl -sI https://images.unsplash.com \| head -1` from the server. The photos are hot-linked and optimised on the server, so it needs outbound HTTPS |
| Sitemap or robots show the wrong domain | `site.url` in `src/content/site.ts` | Fix per Part 0.1, push, then run Part 8 |
| Old site still shows | Browser or CDN cache, or nginx not reloaded | Hard refresh, then `nginx -T \| grep -n "e4impact"` and confirm `proxy_pass` is present |
| `nginx -t` fails | Typo in the edited block | Re-open the file, or restore the Part 2 copy and retry |
| Port 3100 already used | Another process | Pick another free port and change it in both `ecosystem.config.cjs` and `proxy_pass`, then `pm2 restart evidencereach && systemctl reload nginx` |

---

## Notes

- **Pending reboot.** The server showed "System restart required". Do the reboot separately, at a quiet time, after this deploy is verified. Afterwards run `pm2 list` and `systemctl is-active nginx docker postgresql redis-server` to confirm everything came back, since `pm2 save` in Part 4.4 is what brings `evidencereach` back.
- **Running as root.** `legacy-forge` also runs under root PM2, so this matches the current setup. The app does not need root; a dedicated low-privilege user would be safer if you later want to harden it.
- **Content to confirm before going public** (from the project README): capability labels (Demonstrated, Configurable, Planned) need product-team sign-off, `/privacy` and `/terms` are drafts pending legal review, and the stats are illustrative.

---

## Appendix A - Deploy to evidencereach.dacoris.com instead

Use this if you keep `site.url` as `https://evidencereach.dacoris.com`. It also lets you leave `e4impact` untouched, so Parts 2 and 3 become optional.

1. Add a DNS **A** record: `evidencereach.dacoris.com` pointing to the server's public IP. Wait for it to resolve (`nslookup evidencereach.dacoris.com`).
2. Do Parts 4.1 to 4.5 as written.
3. Create `/etc/nginx/sites-available/evidencereach` with only the HTTP block first:

```nginx
server {
    listen 80;
    server_name evidencereach.dacoris.com;

    location / {
        proxy_pass http://127.0.0.1:3100;
        proxy_http_version 1.1;
        proxy_set_header Host              $host;
        proxy_set_header X-Real-IP         $remote_addr;
        proxy_set_header X-Forwarded-For   $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

4. Enable it, then let Certbot add HTTPS and the redirect:

```bash
ln -s /etc/nginx/sites-available/evidencereach /etc/nginx/sites-enabled/evidencereach
nginx -t && systemctl reload nginx
certbot --nginx -d evidencereach.dacoris.com
```

5. Run the Part 6 checks against `https://evidencereach.dacoris.com/`.
