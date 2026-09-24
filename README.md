# DACORIS EvidenceReach

Marketing landing page for DACORIS EvidenceReach, a dissemination operating system that turns
institutional evidence into targeted communication, governed dissemination and measurable impact.

This is a ground-up rebuild of the site: white surface, black text, `#42c686` used only on
filled buttons, `#0d0f22` footer, a full-bleed 100vh hero, and a mega-menu navbar.

## Stack

- Next.js 15 (App Router) with TypeScript
- Material UI v7 with Emotion - no Tailwind
- Flexbox layouts only - no CSS Grid or MUI Grid
- Plus Jakarta Sans, self-hosted via `@fontsource` (no runtime call to Google Fonts)
- Striking Unsplash photography, loaded through `next/image`

## Getting started

```bash
npm install
npm run dev
```

The dev server runs on http://localhost:3100.

```bash
npm run build   # production build
npm run start   # serve the production build
```

## Design rules

- White is the surface colour for the top bar, navbar and page backgrounds.
- Body and heading text are black/near-black. `#42c686` is used on filled buttons only, with
  dark button text. Links and hovers use the darker mint `#1f8f5b` / `#1b8a58`. The footer is
  `#0d0f22`.
- Icons come from `@mui/icons-material`, outlined variants only, 16-20px, inheriting the colour
  of the text beside them. No custom or decorative SVG illustration.
- Copy uses a hyphen, never an em dash or en dash.

## Project structure

```
src/
  app/          routes, metadata, sitemap and robots
  components/
    layout/     top bar, navbar with mega menus, footer, wordmark
    home/       landing page sections (hero through closing CTA)
    shared/     section wrapper, heading, info cards, stats band, closing CTA
  content/      typed content modules (the CMS seam)
  theme/        MUI theme, palette tokens and fonts
```

## Headless WordPress later

All copy, navigation, statistics and image references live in typed modules under `src/content`.
Components receive content as props and contain no hardcoded marketing text, so a later WordPress
REST or GraphQL client can return the same types without rewriting components. Shared shapes such
as `NavItem`, `Stat` and `Card` are defined in `src/content/types.ts`.

## Site map

Navigation lives in `src/content/nav.ts` (five mega-menus and the footer). `sitemap.xml` is generated
from it, so a page linked in the menus or footer is listed automatically.

| Section | Routes |
| --- | --- |
| Home | `/` |
| Platform | `/platform`, `/platform/how-der-fits`, `/platform/impact`, `/platform/markets`, `/platform/integrations`, `/platform/trust` |
| Solutions | `/solutions`, `/solutions/[slug]` for ministries, statistics, ngos, funders, research, regional |
| Get started | `/get-started/packages`, `/get-started/pilot`, `/implementation` |
| Resources | `/faq`, `/news` (menu). `/resources` and `/developers` are live but unlinked from the menus and footer; they stay in the sitemap and are linked from other pages |
| Company | `/about`, `/team`, `/contact` |
| Legal | `/privacy`, `/terms` |

Redirects (in `next.config.ts`): `/solutions/donors` to `/solutions/funders`, `/get-started` to
`/get-started/packages`.

Solutions pages share one template (`components/solutions/SolutionPage.tsx`) fed by
`src/content/solutions.ts`. To add a client group, add an entry there and a menu item in `nav.ts`.

## Content notes

- Capability status labels (Demonstrated, Configurable, Planned) on the Integrations, Trust and
  Developers pages come from the August concept profile. Confirm them with the product team before
  publishing.
- `/privacy` and `/terms` are drafts pending legal review. Set `legalDraft` to `false` in
  `src/content/legal.ts` to remove the draft banner once they are approved.
- `/news` shows an empty state until items are added to `newsItems` in `src/content/resources.ts`.
- There is no sign-in page. Portal access is provisioned per institution during implementation.

## Notes

- Statistics shown on the site are illustrative figures from a demonstration corpus.
- Hero and section photography is sourced from Unsplash via hot-linked URLs in
  `src/content/home.ts` - swap these for your own licensed photography whenever you're ready.
