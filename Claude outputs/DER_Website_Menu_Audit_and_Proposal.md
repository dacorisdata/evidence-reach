# DACORIS EvidenceReach (DER): Website Menu Audit and Proposed Navigation

Prepared 21 September 2026 for Stephen Gaita

**Inputs reviewed**

- *DER Concept Profile for Sales Team (August)*, read in full.
- The redesign running at `http://localhost:3100`. I loaded it in the browser, tested every linked route for its HTTP status, and read the page headings and the Markets page text.
- The redesign source code (`nav.ts`, `site.ts`, `sitemap.ts`, the route folders and the page compositions).

**Not reviewed:** the old live site at `evidencereach.dacoris.com`. It could not be reached from my environment, so nothing here compares the redesign with it.

**Decisions you gave me**

- The local redesign is the baseline for "what we have now".
- The menu is optimised for institutional buyers.
- Solutions is organised by the six client groups in the concept profile.
- The four new pages to include are Packages & pilots, Trust (security and responsible AI), How DER fits (compare) and Standards & integrations.

---

## 1. Summary

- The redesign has a clean, buyer-friendly navigation shell: a top bar, four mega-menus (Platform, Solutions, Resources, Company), "Sign in" and a persistent "Request a demo" button.
- **Only 7 pages exist.** Of the 14 links in the main menus, 8 lead to a "still being built" 404: all four Solutions pages and all four Resources items. The footer adds 3 more dead routes (`/privacy`, `/terms`, `/signin`). You have decided to remove Sign in, which leaves 2 (`/privacy`, `/terms`).
- **The client segmentation on the site does not match the concept profile.** The site's Solutions menu lists four segments. The Markets page lists a different six. The concept profile defines a third six. NGOs/implementers, funders and regional/multilateral bodies are missing from the menu.
- **Much of the concept profile has no home on the site yet:** packaging and pilots, trust and governance, standards and interoperability, market positioning and the ecosystem of secondary users.
- **The sitemap is stale.** It lists only the home page and `/contact`, so search engines will never see the other five built pages.
- **Recommendation:** keep the four-menu structure, add a fifth ("Get started"), expand Solutions to the six concept-profile groups, and add the four new pages plus the missing Solutions pages. Build order is in section 7.

---

## 2. What we have today

### 2.1 Navigation shell

| Element | What is there today |
|---|---|
| Top bar | Email (info@dacoris.com), phone (+254 732 436199) and "A DACORIS Group product" link to dacoris.com |
| Header | Logo, four dropdown menus, "Sign in" link, "Request a demo" button (links to `/contact`) |
| Footer | Four columns: Product, Company, Developers, Legal. Plus contact details |
| Mobile | Hamburger menu, with Sign in and Request a demo still visible in the header |

### 2.2 Current menu, with page status

Status was tested against the running redesign on 21 September 2026.

| Menu | Item | URL | Status |
|---|---|---|---|
| **Platform** | Platform overview | `/platform` | Built |
| | Impact intelligence | `/platform/impact` | Built |
| | Markets we serve | `/platform/markets` | Built |
| **Solutions** | Statistics offices | `/solutions/statistics` | **Missing** |
| | Government ministries | `/solutions/ministries` | **Missing** |
| | Donor programmes | `/solutions/donors` | **Missing** |
| | Universities and think tanks | `/solutions/research` | **Missing** |
| **Resources** | Resources hub | `/resources` | **Missing** |
| | Implementation | `/implementation` | **Missing** |
| | Developers | `/developers` | **Missing** |
| | News | `/news` | **Missing** |
| **Company** | About | `/about` | Built |
| | Team | `/team` | Built |
| | Contact | `/contact` | Built |
| **Header utility** | Sign in | `/signin` | **Missing** (by design for now; portal access is provisioned per institution). **To be removed** |
| **Header CTA** | Request a demo | `/contact` | Built |

**Footer-only links that are also missing:** `/privacy` (Privacy notice), `/terms` (Terms of use), and the three `/developers#...` anchors (Public Data API, OAI-PMH, DCAT catalogue), which depend on the missing Developers page.

**Totals:** 7 pages built (home, About, Team, Contact, Platform, Impact, Markets). 11 distinct routes linked but not built. Requests to those routes return a 404 status with a friendly "This page is still being built" page.

### 2.3 What is on each built page

| Page | Sections |
|---|---|
| **Home** `/` | Hero ("Evidence that reaches the people who decide"), "Built for" strip, Why this exists (4 problems), What we do (6 capabilities), How it works (5-step pipeline), Impact intelligence teaser, Stats band, Who it is for, Closing CTA |
| **Platform** `/platform` | Hero, "Sixteen modules across the evidence value chain" (6 module groups), AI-assisted human-approved production, Approval and accountability flow, Funder visibility and companion podcasts, Closing CTA |
| **Impact intelligence** `/platform/impact` | Hero, Stats band, Attention / Use / Uptake / Follow-through, Verified narrative from output to result, Closing CTA |
| **Markets** `/platform/markets` | Hero, six client types table, "KNBS-style first adoption" path, four solution cards, Closing CTA |
| **About** `/about` | Hero, Identity, Positioning against repositories, Why we stand out, Closing CTA |
| **Team** `/team` | Hero, four principles, leadership, advisory, Join us |
| **Contact** `/contact` | Hero, contact form, contact details panel |

### 2.4 Technical housekeeping found on the way

- `sitemap.xml` lists only `/` and `/contact`. The other five built pages are not in it.
- `robots.txt` is correct and points to the sitemap.
- The project README is out of date. It says only the landing page and shared layout are built.
- The Markets page shows four solution cards that mirror the four Solutions menu items. I did not test where they link, but they most likely point to the same missing pages.

---

## 3. Where the site and the concept profile disagree

### 3.1 Three different client lists

| Concept profile (six client categories) | Markets page on the redesign (six client types) | Solutions menu (the home "Built for" strip lists Universities and Think tanks separately) |
|---|---|---|
| Government ministries | Government ministries & agencies | Government ministries |
| National statistics offices | National statistical offices | Statistics offices |
| NGOs and implementers | *(not listed)* | *(not listed)* |
| Funders, foundations and development partners | Donor-funded programmes | Donor programmes |
| Universities, research councils and think tanks | Universities & research institutions; Think tanks & policy centres (two rows) | Universities and think tanks |
| Regional, continental and multilateral bodies | *(mentioned in the adoption path only)* | *(not listed)* |
| *(secondary actors only)* | Industry & development consortia | *(not listed)* |

**Why it matters:** "Donor programmes" is ambiguous. The concept profile separates the people who fund programmes (funders) from the organisations that run them (NGOs and implementers). Each has a different buyer, pain and product set. The site currently blends them, and a first-time visitor from an NGO or a regional body will not see themselves in the menu.

### 3.2 Language differences that affect menu labels

| Topic | Website | Concept profile |
|---|---|---|
| Product category | "Evidence dissemination platform" / "dissemination operating system" | "Institutional evidence intelligence, knowledge translation and impact management platform"; "evidence-utilisation layer" |
| Workflow stages | Intake, Translate, Approve, Release, Measure | Discover, Govern, Translate, Disseminate, Learn |
| Impact model | Attention, Use, Uptake, Follow-through | Same four, inside a six-layer value ladder that also includes Findability & trust, Efficiency and Reach |

I have not treated this as an error. The site's wording is tighter and more approachable, but the team should decide which set of terms the menus and page titles use, because every new page inherits them.

### 3.3 Concept-profile content with no home on the site

| Concept profile content | On the site today? | Proposed home |
|---|---|---|
| Six client categories, with pain points, products and mini-pitches | Partly (Markets table, 4 dead links) | Six Solutions pages |
| Packages: Institutional, Portfolio, Federation, plus professional services | No | New Packages page |
| Time-bound pilot, sales motion | Partly (home "Adoption path") | New Pilot page |
| Governance, data protection, statistical confidentiality, responsible AI | Partly (Platform: AI-assisted, approval flow) | New Trust page |
| Standards and reference architecture (OAI-PMH, SDMX, DCAT, IATI, SSO, deployment options) | No (Developers page missing) | New Integrations & standards page |
| Where DER fits next to CKAN, M&E tools, repositories, BI, CMS tools | Partly (About "Positioning") | New How DER fits page |
| Value-realisation ladder (six layers) | Partly (Impact page, four dimensions) | Extend the Impact page |
| Secondary users and partners (media, civil society, private sector, professional bodies, technology providers) | No | Section on the Solutions overview page |
| Maturity roadmap (Now / Next / Later) | No | Keep internal (see section 8) |
| Sales motion, pricing approach | No | Keep internal (see section 8) |

---

## 4. Findings

1. **Dead links are 57% of the main navigation.** Eight of fourteen main-menu links lead to a placeholder. The whole Solutions menu, a section buyers are likely to open early, is empty.
2. **Segmentation is inconsistent** across the concept profile, the Markets page and the menu (section 3.1). This should be settled before the Solutions pages are written.
3. **The buyer's evaluators have nowhere to go.** The concept profile names ICT/Security and Legal/Data Governance in the regional-body decision group, and its Trust architecture section says commercial value depends on governance and security. The site has no page for security, data protection, AI controls or standards.
4. **There is no commercial path after "Request a demo".** The concept profile packages the product in three tiers plus services, and recommends a measurable pilot. Buyers cannot see either.
5. **Platform contains a "Markets" page.** Markets belongs with Solutions, because it answers "who is this for". Moving it makes both menus clearer.
6. **Resources is a mixed bag.** It combines a hub, Implementation (a sales topic), Developers (technical) and News. Implementation belongs with getting started.
7. **The sitemap will hurt discoverability** until it is generated from the real page list.

---

## 5. Proposed menu

### 5.1 Principles

- **Buyer journey order:** what it is (Platform), is it for me (Solutions), how do I start (Get started), can I trust and evaluate it (Resources), who are you (Company).
- **One home per idea.** Nothing appears in two menus except as a cross-link on a page.
- **Six client groups exactly as in the concept profile,** so sales conversations and the website use the same language.
- **Keep the existing shell:** top bar, four mega-menus becoming five, and the "Request a demo" button. "Sign in" is dropped.
- **Every proposed link has a page** or is clearly flagged as to be built. No link ships without a page.

### 5.2 Proposed structure

**Header:** Logo | Platform | Solutions | Get started | Resources | Company | **Request a demo**

*Sign in is removed from the header (see the change list in 5.5).*

**Platform** (what DER is and why trust it)

| Item | URL | Status | What it answers |
|---|---|---|---|
| Platform overview | `/platform` | Built | The full workflow and sixteen modules |
| How DER fits | `/platform/how-der-fits` | **New** | How DER relates to CKAN, M&E tools, repositories, BI and CMS tools |
| Impact intelligence | `/platform/impact` | Built (extend) | Attention, use, uptake and follow-through |
| Integrations & standards | `/platform/integrations` | **New** | OAI-PMH, SDMX, DCAT, IATI, SSO, deployment options |
| Trust: security & responsible AI | `/platform/trust` | **New** | Governance, data protection, AI controls, release authority |

**Solutions** (who it is for)

| Item | URL | Status | Change from today |
|---|---|---|---|
| All solutions | `/solutions` | **New** (absorbs today's Markets page) | Replaces `/platform/markets` |
| Government ministries | `/solutions/ministries` | Missing | Kept |
| National statistics offices | `/solutions/statistics` | Missing | Renamed slightly, kept |
| NGOs & implementers | `/solutions/ngos` | **New** | Added |
| Funders & foundations | `/solutions/funders` | **New** | Replaces `/solutions/donors` |
| Universities & think tanks | `/solutions/research` | Missing | Kept |
| Regional & multilateral bodies | `/solutions/regional` | **New** | Added |

**Get started** (new menu)

| Item | URL | Status | What it answers |
|---|---|---|---|
| Packages | `/get-started/packages` | **New** | Institutional, Portfolio, Federation, professional services |
| Start with a pilot | `/get-started/pilot` | **New** | Time-bound pilot with sponsor, data owner, approver and success metrics |
| Implementation | `/implementation` | Missing (moved from Resources) | Discovery, configuration, scale |
| Request a demo | `/contact` | Built | Featured link in the mega-menu panel |

**Resources** (evaluate and learn)

| Item | URL | Status | What it answers |
|---|---|---|---|
| Resources hub | `/resources` | Missing | Concept profile, evaluation guide, deployment and security summary |
| Developers | `/developers` | Missing | Public Data API, OAI-PMH, DCAT (technical detail; links to Integrations & standards) |
| News | `/news` | Missing | Updates |

**Company**

| Item | URL | Status |
|---|---|---|
| About | `/about` | Built |
| Team | `/team` | Built |
| Contact | `/contact` | Built |

**Totals:** 5 menus, 22 links (including the featured demo link). 6 of them point to pages that already exist (Platform overview, Impact intelligence, About, Team, Contact and the demo link, which reuses `/contact`). The other 16 need to be built: 7 are pages already promised in today's menus (Ministries, Statistics offices, Universities & think tanks, Resources hub, Implementation, Developers, News) and 9 are new (How DER fits, Integrations & standards, Trust, Solutions overview, NGOs & implementers, Funders & foundations, Regional & multilateral, Packages, Pilot).

### 5.3 Proposed site map

```
/                                   Home (built)
├── platform/
│   ├── (overview)                  built
│   ├── how-der-fits                NEW
│   ├── impact                      built, extend
│   ├── integrations                NEW
│   └── trust                       NEW
├── solutions/
│   ├── (all solutions)             NEW, replaces /platform/markets
│   ├── ministries                  missing
│   ├── statistics                  missing
│   ├── ngos                        NEW
│   ├── funders                     NEW (replaces /solutions/donors)
│   ├── research                    missing
│   └── regional                    NEW
├── get-started/
│   ├── packages                    NEW
│   └── pilot                       NEW
├── implementation                  missing
├── resources                       missing
├── developers                      missing
├── news                            missing
├── about                           built
├── team                            built
├── contact                         built
├── privacy                         missing
└── terms                           missing
```

### 5.4 Proposed footer

| Platform | Solutions | Get started | Resources | Company / Legal |
|---|---|---|---|---|
| Overview | Ministries | Packages | Resources hub | About |
| How DER fits | Statistics offices | Start with a pilot | Developers | Team |
| Impact intelligence | NGOs & implementers | Implementation | Public Data API | Contact |
| Integrations & standards | Funders & foundations | Request a demo | OAI-PMH | Privacy notice |
| Trust | Universities & think tanks | | DCAT catalogue | Terms of use |
| | Regional & multilateral | | News | |

### 5.5 Change list against today

| Change | Reason |
|---|---|
| Add a fifth menu, "Get started" | The concept profile's commercial model (packages, pilot, implementation) needs a visible path from interest to demo |
| Move Implementation from Resources to Get started | It is a buying topic, not reading material |
| Move "Markets we serve" out of Platform into Solutions overview | Answers "who is it for", not "what is it" |
| Redirect `/platform/markets` to `/solutions` | Keeps existing links working |
| Split "Donor programmes" into "NGOs & implementers" and "Funders & foundations" | Two different buyers with different pains and products |
| Redirect `/solutions/donors` to `/solutions/funders` | Preserves the link |
| Add "Regional & multilateral bodies" | Sixth client group; supports the DER Federation package |
| Add three Platform pages (how DER fits, integrations & standards, trust) | Serves ICT, legal and security evaluators |
| Update the home "Built for" strip and Audiences section to the six groups | Consistency with the menu |
| Regenerate `sitemap.xml` from the navigation | Fixes the stale sitemap |
| Remove "Sign in" from the header, the mobile menu and the Legal footer column | Decision by Stephen. The page was never built and portal access is provisioned per institution. Buyers reach the team through "Request a demo" |

---

## 6. Briefs for the new pages

Content is taken from the concept profile. Each page follows the site's existing pattern: hero, content sections, closing CTA.

| Page | Purpose | Source in concept profile | Key content |
|---|---|---|---|
| **Solutions overview** `/solutions` | Help a visitor find their client group in one screen | Primary client categories; Secondary users and partners | Six client cards with the job each group needs done; a short "also used by" section for media, civil society, private sector, professional bodies and technology partners |
| **Six solution pages** `/solutions/*` | One page per client group | Client category 1-6 tables and mini-pitches | Hero uses the mini-pitch one-liner; challenge / cost / how DER fills the gap (the five-row table); high-value products list; likely business owners; CTA to a sector demo |
| **How DER fits** | Position against adjacent tools; defuse "we already have CKAN / a repository / BI" | Where DER fits among existing platforms | Table of seven adjacent categories; category statement; the non-replacement principle |
| **Integrations & standards** | Reassure ICT and data teams | Reference architecture; recommended standards profile | Standards by domain (research, statistics, development co-operation, identity); architecture diagram; deployment options. Label each item Demonstrated, Configurable or Planned |
| **Trust: security & responsible AI** | Reassure legal, security and data-governance stakeholders | Governance, security and responsible AI | Five control areas (data protection, statistical confidentiality, AI governance, release authority, security operations); the rule that nothing publishes solely because an AI draft exists |
| **Packages** | Show how DER is bought | Recommended solution packaging | Three tiers and professional services, described by outcome and fit, not feature list. Pricing stays out unless the team decides otherwise |
| **Pilot** | Give buyers a low-risk first step | Recommended sales motion | Time-bound, measurable pilot; named sponsor, data owner, approver and success metrics; sector-specific demo data |
| **Impact (extend)** | Show the full value ladder | Value realisation | Add the six value layers (findability, efficiency, reach, use, uptake, follow-through) with example indicators |

---

## 7. Suggested build order

**Priority 1: fix what buyers hit first**

1. `/privacy` and `/terms`. The contact form collects personal data, so a privacy notice should exist before the site goes public.
2. `/solutions/statistics` and `/solutions/ministries`. The Markets page already positions a "KNBS-style first adoption", so these are the lead audiences.
3. `/solutions` overview (replaces Markets) and the other four solution pages.
4. Regenerate `sitemap.xml`.

**Priority 2: give evaluators and decision-makers a path**

5. `/platform/trust`
6. `/get-started/packages` and `/get-started/pilot`
7. `/platform/integrations` (and `/developers` behind it)
8. `/platform/how-der-fits`
9. `/implementation`

**Priority 3: supporting content**

10. `/resources` hub (concept profile download, evaluation guide)
11. `/news`

---

## 8. Guardrails for public content

- **Demonstrated / configurable / planned.** The concept profile insists on this discipline. On the Integrations and Trust pages, SSO/MFA, connector SLAs, DCAT/SDMX/IATI profiles and several security controls are production requirements, not demonstrated features. Use labels, or the site will overclaim.
- **Keep internal:** the maturity roadmap (Now / Next / Later), sales motion, target pricing approach and the "positioning discipline" notes. These are for the sales team. The Pilot and Packages pages carry only the buyer-facing part.
- **Check the citations before reuse.** The concept profile quotes OECD, World Bank, PARIS21, AU and UNESCO material and has numbered references ([18]-[20] appear in the positioning table). I did not verify them. Confirm sources before copying any statement to a public page.
- **Illustrative figures.** The README states the stats on the site come from a demonstration corpus. Keep them labelled as such.

---

## 9. Assumptions and open items

| Item | Assumption I made | Please confirm |
|---|---|---|
| Baseline | The local redesign is the baseline. The old live site was not compared | Whether the old site's URLs need redirects |
| Donor programmes | Split into Funders and NGOs & implementers | Whether the current "Donor programmes" copy is meant for funders, implementers or both |
| Industry & development consortia | Treated as a secondary audience on the Solutions overview, not a sixth solution page | Whether it deserves its own page |
| Terminology | I used the site's existing terms (for example "dissemination") in menu labels | Whether to adopt the concept profile's "evidence intelligence, knowledge translation and impact management" wording and its Discover / Govern / Translate / Disseminate / Learn stages |
| Pricing | No prices on the Packages page | Whether to publish any commercial information |
| URL scheme | Get started pages under `/get-started/` | Whether you prefer flat URLs (`/packages`, `/pilot`) |

---

## 10. Suggestions for improvement and automation

- **Make `nav.ts` the single source of truth.** Generate `sitemap.xml` from it and add a build check that fails when a navigation link has no matching route. This would have caught the 11 dead links and the stale sitemap automatically.
- **Skill candidate:** a "site navigation audit" skill (compare the nav file with the built routes, compare against a concept document, output this report). You may want to update your Skills or preferences to include it if you will repeat this for other DACORIS products.
