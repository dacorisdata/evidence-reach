import type { AccentName } from '@/theme/tokens';
import type { Card } from './types';
import type { Status } from '@/components/shared/StatusChip';
import type { LinkCard } from '@/components/shared/LinkCards';
import { photo } from './images';

/* ------------------------------------------------------------------ */
/* Resources hub                                                       */
/* ------------------------------------------------------------------ */

export const resourcesHero = {
  eyebrow: 'Resources',
  title: 'Everything you need to evaluate DER.',
  intro:
    'How DER fits your stack, how it is governed, how it is bought and implemented, and who should be in the room when you assess it.',
  image: photo('reportsShelves', 2400),
} as const;

export const resourcesLinksIntro = {
  eyebrow: 'Start here',
  title: 'Explore by question.',
  intro: 'Each page answers one part of an institutional evaluation.',
} as const;

export const resourcesLinks: readonly LinkCard[] = [
  {
    label: 'How DER fits',
    href: '/platform/how-der-fits',
    blurb: 'Where DER sits next to repositories, data portals, M&E tools, CMS and BI.',
  },
  {
    label: 'Trust and responsible AI',
    href: '/platform/trust',
    blurb: 'Data protection, statistical confidentiality, AI controls and release authority.',
  },
  {
    label: 'Integrations and standards',
    href: '/platform/integrations',
    blurb: 'OAI-PMH, SDMX, DCAT, IATI, identity and deployment options.',
  },
  {
    label: 'Packages',
    href: '/get-started/packages',
    blurb: 'Institutional, Portfolio and Federation, with professional services.',
  },
  {
    label: 'Start with a pilot',
    href: '/get-started/pilot',
    blurb: 'A time-bound, measurable first cycle on your own evidence.',
  },
  {
    label: 'Implementation',
    href: '/implementation',
    blurb: 'Discover, configure, connect, launch and scale.',
  },
  {
    label: 'FAQ',
    href: '/faq',
    blurb: 'Answers on hosting, AI, implementation, pricing and scale.',
  },
  {
    label: 'Developers',
    href: '/developers',
    blurb: 'Public Data API, OAI-PMH harvesting and DCAT catalogue metadata.',
  },
  {
    label: 'About DACORIS EvidenceReach',
    href: '/about',
    blurb: 'Why EvidenceReach exists and where it sits in the DACORIS Group.',
  },
];

export const evaluatorsIntro = {
  eyebrow: 'Who to involve',
  title: 'A good evaluation brings the whole decision group.',
  intro: 'Different people need different answers. Point each of them to the right page.',
  cards: [
    {
      title: 'Executive sponsor',
      subtitle: 'Outcome and value',
      body: 'Start with Solutions for your client group and Impact intelligence for the success measures.',
      accent: 'green' as AccentName,
    },
    {
      title: 'Data and knowledge owners',
      subtitle: 'Record and taxonomy',
      body: 'Review How DER fits and Integrations and standards to see how authoritative systems stay the source of truth.',
      accent: 'indigo' as AccentName,
    },
    {
      title: 'Communications',
      subtitle: 'Products and channels',
      body: 'See the Platform overview for the translation studio, approval route and publication tracking.',
      accent: 'amber' as AccentName,
    },
    {
      title: 'ICT and security',
      subtitle: 'Architecture and controls',
      body: 'Go to Integrations and standards, Developers and Trust, including the readiness table.',
      accent: 'teal' as AccentName,
    },
    {
      title: 'Legal and data governance',
      subtitle: 'Risk and accountability',
      body: 'Read Trust and responsible AI for data protection, confidentiality and release authority.',
      accent: 'violet' as AccentName,
    },
    {
      title: 'Programme and finance leads',
      subtitle: 'Scope and commitment',
      body: 'Compare Packages and the pilot approach, and how adoption services are scoped.',
      accent: 'coral' as AccentName,
    },
  ] satisfies Card[],
} as const;

/* ------------------------------------------------------------------ */
/* Developers                                                          */
/* ------------------------------------------------------------------ */

export const developersHero = {
  eyebrow: 'Developers',
  title: 'Open interfaces for evidence to flow in and out.',
  intro:
    'Harvest repositories in, publish catalogue metadata out, and connect DER to the systems around it.',
  image: photo('dashboardLaptop', 2400),
} as const;

export type DeveloperInterface = {
  id: string;
  eyebrow: string;
  title: string;
  body: string;
  status: Status;
  uses: readonly string[];
};

export const developerInterfaces: readonly DeveloperInterface[] = [
  {
    id: 'public-data-api',
    eyebrow: 'Public Data API',
    title: 'Programmatic access to approved, public evidence.',
    body: 'Serve approved records and products to institutional websites, data portals and partner systems. Access is controlled with scoped, auditable API keys, and only released evidence is exposed.',
    status: 'Configurable',
    uses: [
      'Feed an institutional website or data portal',
      'Serve approved products to partner systems',
      'Support media and data-journalism access',
    ],
  },
  {
    id: 'oai-pmh',
    eyebrow: 'OAI-PMH harvesting',
    title: 'Bring existing repository records into the registry.',
    body: 'Harvest records from institutional repositories and research infrastructure using OAI-PMH, with Dublin Core and DataCite metadata. The source repository stays the authoritative record.',
    status: 'Demonstrated',
    uses: [
      'Register existing repository records without re-keying',
      'Detect duplicates on ingestion',
      'Keep provenance back to the source system',
    ],
  },
  {
    id: 'dcat',
    eyebrow: 'DCAT catalogue metadata',
    title: 'Publish the catalogue so portals and search can find it.',
    body: 'Expose DER-managed evidence as DCAT catalogue metadata so open-data portals and search services can discover it. This sits alongside SDMX and IATI in the recommended standards profile.',
    status: 'Planned',
    uses: [
      'Expose the catalogue to national data portals',
      'Align with the recommended standards profile',
      'Support federation across institutions',
    ],
  },
  {
    id: 'webhooks',
    eyebrow: 'Webhooks and connectors',
    title: 'Send events out and pull signals in.',
    body: 'Webhooks announce publication, approval and channel events. Connectors bring in scholarly metadata and reach signals from services such as Crossref, OpenAlex, analytics, media and social channels.',
    status: 'Demonstrated',
    uses: [
      'Trigger downstream publishing on approval',
      'Record channel and reach signals against products',
      'Enrich records with linked scholarly metadata',
    ],
  },
];

export const developersNote = {
  eyebrow: 'Access',
  title: 'Interface details are shared during onboarding.',
  body: 'Scope, credentials and documentation are set up for each deployment. Tell us which systems you want to connect and we will map the interfaces.',
} as const;

/* ------------------------------------------------------------------ */
/* News — see news.ts for articles                                     */
/* ------------------------------------------------------------------ */

export { newsItems, newsHero, newsEmpty, type NewsItem } from './news';
