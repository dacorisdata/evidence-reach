import type { AccentName } from '@/theme/tokens';
import type { Card } from './types';
import type { Status } from '@/components/shared/StatusChip';
import { photo } from './images';

/* ------------------------------------------------------------------ */
/* How DER fits                                                        */
/* ------------------------------------------------------------------ */

export const fitHero = {
  eyebrow: 'Where DER fits',
  title: 'The utilisation layer above the systems you already run.',
  intro:
    'DER does not replace statistical production, repositories, M&E systems, document management or BI. It connects them to audiences, approvals and impact.',
  image: photo('whiteboard', 2400),
} as const;

export const fitPrinciple = {
  eyebrow: 'Non-replacement principle',
  line: 'DER references or synchronises authoritative systems. It does not create competing master records for data already governed elsewhere.',
  body: 'Your systems of record stay the source of truth. DER adds a governed evidence-movement layer: discovery, a single trusted record, audience products, approved release and measured use.',
} as const;

export const fitTableIntro = {
  eyebrow: 'Adjacent platforms',
  title: 'Each of these does its job well. DER does the part that is left.',
  intro: 'Where DER sits next to seven common categories of system.',
} as const;

export const fitTableColumns = {
  category: 'Adjacent category',
  solves: 'What it already solves well',
  gap: 'Typical remaining gap',
  role: "DER's role",
} as const;

export const fitRows = [
  {
    category: 'Open-data portals (for example CKAN)',
    solves: 'Catalogue, publish, search and access datasets through portals and APIs.',
    gap: 'Does not by itself manage end-to-end audience translation and validated uptake.',
    role: 'Harvest or link datasets; govern products, approvals and impact.',
  },
  {
    category: 'M&E and results systems (for example DevResults)',
    solves: 'Indicators, project performance, maps, data collection and reporting.',
    gap: 'Learning products and public or policy dissemination may remain separate.',
    role: 'Translate programme evidence and capture wider use and impact.',
  },
  {
    category: 'Research repositories and CRIS',
    solves: 'Store and describe publications, datasets, researchers and projects.',
    gap: 'Limited policy and public product workflow and non-academic impact validation.',
    role: 'Harvest records; mobilise and track evidence beyond academia.',
  },
  {
    category: 'Evidence search and synthesis tools',
    solves: 'Find literature and support review and synthesis.',
    gap: "Do not govern an institution's authorised record, release chain and channels.",
    role: 'Operationalise selected evidence in institutional workflows.',
  },
  {
    category: 'Policy-impact databases (for example Overton)',
    solves: 'Discover policy citations and trace research influence.',
    gap: 'Primarily external citation intelligence rather than full internal production governance.',
    role: 'Combine external signals with internal products and validated cases.',
  },
  {
    category: 'CMS, social and media tools',
    solves: 'Create, schedule, publish and monitor content.',
    gap: 'Weak source provenance, evidence sensitivity and policy-grade approval trail.',
    role: 'Supply source-linked, approved products and receive channel signals.',
  },
  {
    category: 'BI and dashboards',
    solves: 'Analyse and visualise structured operational data.',
    gap: 'Outputs may not become governed knowledge products or impact evidence.',
    role: 'Turn insights into traceable products and follow-through cases.',
  },
] as const;

export const fitCategory = {
  eyebrow: "DER's category",
  title: 'Evidence intelligence, knowledge translation and impact management.',
  body: 'Each of those components exists elsewhere. The differentiation is the governed connection between them, configured for institutions where evidence credibility, release authority and public value matter.',
  image: photo('colleaguesReport', 1200),
} as const;

/* ------------------------------------------------------------------ */
/* Integrations and standards                                          */
/* ------------------------------------------------------------------ */

export const integrationsHero = {
  eyebrow: 'Integrations and standards',
  title: 'Connects to your systems of record. Adds the evidence-movement layer.',
  intro:
    'Open standards for repositories, statistics and development data, institutional identity, and deployment options that respect sensitivity and data residency.',
  image: photo('circuitBoard', 2400),
} as const;

export const integrationsArchitecture = {
  eyebrow: 'Reference architecture',
  title: 'Three layers, one audit trail.',
  intro: 'Specific integrations are scoped for each deployment.',
  cards: [
    {
      title: 'Systems of record',
      subtitle: 'Where authority stays',
      body: 'Statistical production, research repositories, M&E and project systems, document management and open-data portals remain the authoritative sources.',
      accent: 'indigo' as AccentName,
    },
    {
      title: 'The DER layer',
      subtitle: 'Where evidence moves',
      body: 'Registry, translation studio, review and publishing, and impact intelligence sit above your sources, with a single audit trail.',
      accent: 'green' as AccentName,
    },
    {
      title: 'Delivery channels',
      subtitle: 'Where it reaches people',
      body: 'Web, email, media, social and partner systems receive approved products and return reach signals.',
      accent: 'amber' as AccentName,
    },
  ] satisfies Card[],
} as const;

export const standardsIntro = {
  eyebrow: 'Recommended standards profile',
  title: 'Open standards, labelled honestly.',
  intro:
    'Each row shows what is demonstrated today, what is configured per deployment, and what is planned. Enterprise claims stay tied to production validation.',
} as const;

export const standardsColumns = {
  standard: 'Standard or capability',
  usedFor: 'Used for',
  status: 'Status',
} as const;

export type StandardRow = {
  standard: string;
  usedFor: string;
  status: Status;
};

export const standardsRows: readonly StandardRow[] = [
  {
    standard: 'OAI-PMH',
    usedFor: 'Harvesting records from research repositories and institutional infrastructure.',
    status: 'Demonstrated',
  },
  {
    standard: 'Dublin Core and DataCite metadata; DOI, ORCID and ROR identifiers',
    usedFor: 'Research metadata and persistent identifiers.',
    status: 'Configurable',
  },
  {
    standard: 'OpenAlex and Crossref',
    usedFor: 'Linked scholarly metadata and use signals, where relevant.',
    status: 'Configurable',
  },
  {
    standard: 'SDMX',
    usedFor: 'Exchange of official statistics.',
    status: 'Planned',
  },
  {
    standard: 'DCAT',
    usedFor: 'Dataset catalogue metadata for open-data portals and search services.',
    status: 'Planned',
  },
  {
    standard: 'IATI',
    usedFor: 'Development co-operation activity, results, transaction and document-link structures.',
    status: 'Planned',
  },
  {
    standard: 'SAML or OIDC single sign-on, with MFA',
    usedFor: 'Institutional identity and access.',
    status: 'Planned',
  },
  {
    standard: 'Role-based access, scoped API keys and webhooks',
    usedFor: 'Access control and integration with web, email, media and social systems.',
    status: 'Demonstrated',
  },
];

export const statusLegend = [
  { status: 'Demonstrated' as Status, meaning: 'Shown in the current product prototype.' },
  { status: 'Configurable' as Status, meaning: 'Supported by design and set up for each deployment.' },
  { status: 'Planned' as Status, meaning: 'On the roadmap and not yet available.' },
] as const;

export const deploymentIntro = {
  eyebrow: 'Deployment',
  title: 'Cloud, sovereign or on-premise, chosen by sensitivity.',
  intro:
    'The right option depends on data sensitivity, data residency, operating capacity and total cost of ownership.',
  cards: [
    {
      title: 'Cloud',
      body: 'Fastest to start, well suited to a controlled set of public outputs and regional hosting.',
      accent: 'teal' as AccentName,
    },
    {
      title: 'Sovereign or private cloud',
      body: 'For institutions that need national hosting or stronger separation from shared infrastructure.',
      accent: 'indigo' as AccentName,
    },
    {
      title: 'On-premise',
      body: 'For the most sensitive environments where data must remain inside institutional infrastructure.',
      accent: 'violet' as AccentName,
    },
  ] satisfies Card[],
} as const;

/* ------------------------------------------------------------------ */
/* Trust and responsible AI                                            */
/* ------------------------------------------------------------------ */

export const trustHero = {
  eyebrow: 'Trust',
  title: 'Speed that stays compatible with institutional accountability.',
  intro:
    "DER's value depends on governance, so control is designed in: human approval, source-grounded AI, audit trails and release authority.",
  image: photo('leadersApproving', 2400),
} as const;

export const trustRule = {
  eyebrow: 'The rule',
  line: 'Nothing is published solely because an AI-generated draft exists.',
  body: 'Every release remains attributable to an authorised person and an authoritative source. AI may accelerate translation; it does not replace evidence validation, institutional review or release authority.',
} as const;

export const controlsIntro = {
  eyebrow: 'Control areas',
  title: 'Five areas every deployment is designed around.',
} as const;

export const controlsColumns = {
  area: 'Control area',
  requirement: 'Minimum design requirement',
  why: 'Why it matters',
} as const;

export const controlsRows = [
  {
    area: 'Data protection',
    requirement:
      'Purpose limitation, minimisation, lawful basis, access control, retention and data-subject procedures.',
    why: "Supports Kenya's Data Protection Act and analogous national regimes.",
  },
  {
    area: 'Statistical confidentiality',
    requirement:
      'Separate public outputs from confidential microdata. DER publication workflows are never used to expose protected unit records.',
    why: 'Protects trust and Principle 6 of the UN Fundamental Principles of Official Statistics.',
  },
  {
    area: 'AI governance',
    requirement:
      'Ground generation in approved sources; retain source links, human review, prompt and model logs and override history.',
    why: 'Designed to align with UNESCO human-oversight principles and NIST risk-management guidance.',
  },
  {
    area: 'Release authority',
    requirement:
      'Configurable review gates, segregation of duties, embargoes, version control and a withdrawal and correction workflow.',
    why: 'Prevents unauthorised or premature publication.',
  },
  {
    area: 'Security operations',
    requirement:
      'Encryption, MFA, logging, backup and disaster recovery, vulnerability management, incident response and supplier controls.',
    why: 'Turns a prototype workflow into dependable institutional infrastructure.',
  },
] as const;

export const approvalIntro = {
  eyebrow: 'Accountability',
  title: 'Each step has an accountable human role and a visible audit trail.',
  intro: 'A typical approval route. Stages and roles are configured for each institution.',
} as const;

export const readinessIntro = {
  eyebrow: 'Enterprise readiness',
  title: 'What is in place, and what is still to prove in production.',
  intro:
    'The core workflow is visible today. Security, connector reliability, AI controls and impact methodology are validated in production before enterprise claims are made.',
} as const;

export const readinessColumns = {
  capability: 'Capability',
  status: 'Status',
} as const;

export type ReadinessRow = {
  capability: string;
  status: Status;
};

export const readinessRows: readonly ReadinessRow[] = [
  { capability: 'Role-based access and permissions', status: 'Demonstrated' },
  { capability: 'Audit log of user actions', status: 'Demonstrated' },
  { capability: 'Draft, review, approval and publication workflow', status: 'Demonstrated' },
  { capability: 'AI assistance that stays a draft until a person approves it', status: 'Demonstrated' },
  { capability: 'Configurable review stages and release authority', status: 'Configurable' },
  { capability: 'Data residency options: cloud, sovereign or on-premise', status: 'Configurable' },
  { capability: 'Source-grounded generation with prompt and model logs', status: 'Planned' },
  { capability: 'Embargoes, legal and privacy gates and release calendars', status: 'Planned' },
  { capability: 'Single sign-on and multi-factor authentication', status: 'Planned' },
  { capability: 'Encryption, backup and disaster recovery, security monitoring', status: 'Planned' },
  { capability: 'Data protection impact assessment and security testing before go-live', status: 'Planned' },
];

/* ------------------------------------------------------------------ */
/* Impact: value ladder (extends the existing Impact page)             */
/* ------------------------------------------------------------------ */

export const valueLadderIntro = {
  eyebrow: 'Success measures',
  title: 'Reach is useful, but it is only the first rung of evidence impact.',
  intro:
    'A practical ladder of six value layers, from finding the right record to sustained follow-through. Each layer names the evidence needed to count it.',
} as const;

export const valueLadderColumns = {
  layer: 'Value layer',
  indicators: 'Example indicators',
  evidence: 'Evidence required',
} as const;

export const valueLadderRows = [
  {
    layer: 'Findability and trust',
    indicators: 'Search success; time to authoritative record; metadata completeness; duplicate and obsolete items resolved.',
    evidence: 'System logs, metadata audits, user tests.',
  },
  {
    layer: 'Efficiency',
    indicators: 'Time from source to approved product; reviewer turnaround; reuse across products; staff hours saved.',
    evidence: 'Workflow timestamps, baseline comparison.',
  },
  {
    layer: 'Reach and engagement',
    indicators: 'Downloads, views, media and social attention, subscriptions, event or stakeholder engagement.',
    evidence: 'Channel analytics with de-duplication rules.',
  },
  {
    layer: 'Use',
    indicators: 'Citations, downloads for reuse, requests, briefings, incorporation into analysis or proposals.',
    evidence: 'Document links, user confirmation, recorded activity.',
  },
  {
    layer: 'Uptake',
    indicators: 'Evidence adopted in policy, budget, guideline, programme design, funding or organisational decision.',
    evidence: 'Validated impact case with decision artefact and verifier.',
  },
  {
    layer: 'Follow-through and outcome',
    indicators: 'Implementation milestones, replication, sustained practice or measurable outcome contribution.',
    evidence: 'Owner confirmation, implementation records and contribution narrative.',
  },
] as const;
