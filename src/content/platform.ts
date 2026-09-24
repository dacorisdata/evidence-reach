import type { AccentName } from '@/theme/tokens';
import type { Card, ImageRef } from './types';

export type PlatformModule = {
  title: string;
  body: string;
};

export type ModuleCategory = {
  key: string;
  label: string;
  image: ImageRef;
  modules: PlatformModule[];
};

export const platformHero = {
  eyebrow: 'The platform',
  title: 'One workflow: evidence enters, is reviewed, becomes communication, is approved, released and tracked.',
  intro:
    'The platform is designed around leadership visibility, registry control, communication production, publication management, integrations and impact analytics.',
  image: {
    src: 'https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&w=2400&q=80',
    alt: 'Team reviewing a workflow together around a table',
  } satisfies ImageRef,
} as const;

export const modulesIntro = {
  eyebrow: 'Core modules',
  title: 'Sixteen modules across the evidence value chain.',
} as const;

export const moduleCategories: ModuleCategory[] = [
  {
    key: 'leadership',
    label: 'Leadership visibility',
    image: {
      src: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80',
      alt: 'Working session reviewing programme results',
    },
    modules: [
      { title: 'Leadership Dashboard', body: 'Executive view of outputs, products, approval queues, reach and impact cases.' },
      { title: 'Control Room', body: 'Operational command centre for dissemination tasks, release stages and escalations.' },
      { title: 'Department Workspace', body: 'Directorate-level view of outputs, reviews, communication requests and status.' },
    ],
  },
  {
    key: 'registry',
    label: 'Registry control',
    image: {
      src: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
      alt: 'Team registering institutional documents',
    },
    modules: [
      { title: 'Evidence Registry', body: 'Structured registry for reports, studies, datasets, articles, grey literature and URLs.' },
      { title: 'Taxonomy & Focus-Area Mapping', body: 'Classify outputs by sector, ministry, theme, geography, audience, SDG and stage.' },
      { title: 'Ingestion Engine', body: 'File upload, URL import, email drop-box, duplicate detection and extraction.' },
      { title: 'Output Review', body: 'Review queue for metadata quality, public/private status and release readiness.' },
      { title: 'AI Assist', body: 'AI-supported tagging, summarization and translation, subject to human review.' },
    ],
  },
  {
    key: 'communication',
    label: 'Communication production',
    image: {
      src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
      alt: 'Communications team drafting a policy brief',
    },
    modules: [
      { title: 'Communication Studio', body: 'Executive briefs, policy notes, media releases, social posts and donor updates.' },
      { title: 'Product Templates', body: 'Reusable institutional templates for audience-specific dissemination products.' },
    ],
  },
  {
    key: 'publication',
    label: 'Publication management',
    image: {
      src: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&w=1200&q=80',
      alt: 'Public release of institutional information',
    },
    modules: [
      { title: 'Publication Manager', body: 'Tracks where and when each product is released, by channel and responsible officer.' },
      { title: 'Search & Discovery', body: 'Structured search across outputs, themes, ministries, publications and impact cases.' },
    ],
  },
  {
    key: 'impact',
    label: 'Impact analytics',
    image: {
      src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
      alt: 'Dashboard reporting on evidence uptake',
    },
    modules: [
      { title: 'Impact & Analytics', body: 'Altmetric-style monitoring across attention, use, uptake and follow-through.' },
      { title: 'Impact Cases', body: 'Evidence-backed records showing how a publication informed a decision or action.' },
    ],
  },
  {
    key: 'integrations',
    label: 'Integrations & governance',
    image: {
      src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
      alt: 'Close-up of a circuit board representing system integrations',
    },
    modules: [
      { title: 'Integrations & Webhooks', body: 'Connectors for Altmetric, Crossref/OpenAlex, analytics, media and social.' },
      { title: 'Operations & Audit Log', body: 'Administrative visibility on actions, errors, API keys and governance traceability.' },
    ],
  },
];

export const scienceEngine = {
  eyebrow: 'Science-communication engine',
  title: 'AI-assisted, human-approved production.',
  intro:
    'DER uses AI as an authoring and decision-support layer, not an uncontrolled publisher. Every AI-generated item remains a draft until it passes human review and institutional approval.',
  cards: [
    {
      title: 'Audience segmentation',
      body: 'Identifies likely audiences: policymakers, counties, ministries, donors, researchers, media and the public.',
      accent: 'indigo' as AccentName,
    },
    {
      title: 'Product recommendation',
      body: 'Suggests policy brief, web release, press statement, data story, donor brief or stakeholder pack.',
      accent: 'violet' as AccentName,
    },
    {
      title: 'Channel intelligence',
      body: 'Recommends website, LinkedIn, X, Facebook, YouTube, media, newsletters or forums.',
      accent: 'amber' as AccentName,
    },
    {
      title: 'Plain-language & translation',
      body: 'Turns technical material into accessible language, including Kiswahili-ready products.',
      accent: 'teal' as AccentName,
    },
    {
      title: 'Risk & sensitivity flags',
      body: 'Flags content needing review for sensitivity, policy implications, timing or confidentiality.',
      accent: 'coral' as AccentName,
    },
    {
      title: 'Impact learning loop',
      body: 'Learns which channels, audiences and product types work best for each evidence category.',
      accent: 'green' as AccentName,
    },
  ] satisfies Card[],
} as const;

export const governance = {
  eyebrow: 'Governance',
  title: 'Approval, accountability and institutional control.',
  intro: 'Role-based access so each user sees what they are permitted to work on, while leadership sees the full picture.',
  stages: [
    'Draft product',
    'Analyst verification',
    'Directorate review',
    'Communication clearance',
    'CTO/ICT clearance',
    'DG/CEO approval',
    'Publication',
    'Impact tracking',
  ],
} as const;

export const architecture = {
  eyebrow: 'Architecture',
  line: 'Built to scale, public data first - begin with a controlled public-output demonstration and expand to institutional scale, with private cloud, on-premise or Kenya-hosted deployment where governance requires it.',
  image: {
    src: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=2000&q=80',
    alt: 'Team working through a process on a whiteboard',
  } satisfies ImageRef,
} as const;

export const registryFeatures = {
  eyebrow: 'In the registry',
  title: 'Funder visibility and companion podcasts.',
  cards: [
    {
      title: 'Connected to the funder',
      body: 'Every output can be linked to its funder or funders, with grant references - giving donors clear visibility of the evidence their support produced, from publication through to measured uptake.',
    },
    {
      title: 'Paired with a podcast',
      body: 'Research-based outputs can be paired with a companion podcast recorded with the lead researcher, turning a technical report into an accessible conversation for policymakers, media and the public.',
    },
  ] satisfies Card[],
} as const;

export const platformClosing = {
  eyebrow: 'Get started',
  title: 'Ready to make your evidence visible, usable and measurable?',
  body: 'Partner with DACORIS EvidenceReach to move from publication to public value.',
  primaryCta: {
    label: 'Request a demo',
    href: 'mailto:info@dacoris.com?subject=DACORIS%20EvidenceReach%20demo',
  },
  secondaryCta: null,
} as const;

export const impactHero = {
  eyebrow: 'Impact intelligence',
  title: 'Beyond dissemination: measuring evidence uptake.',
  intro:
    'DER tracks what happens after publication, connecting communication outputs to real-world use, follow-through and institutional value - an altmetrics-style evidence-to-impact layer tailored for institutional reports, statistics, grey literature and datasets, not only journal articles.',
  image: {
    src: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=2400&q=80',
    alt: 'Analytics dashboard displayed on a laptop screen',
  } satisfies ImageRef,
} as const;

export const impactDimensionsIntro = {
  eyebrow: 'The four dimensions',
  title: 'Attention, use, uptake and follow-through.',
} as const;

export const impactDimensions = [
  {
    title: 'Attention',
    subtitle: 'Was it seen?',
    body: 'Views, downloads, media mentions, social engagement, news references and public discussion signals.',
    accent: 'indigo' as AccentName,
  },
  {
    title: 'Use',
    subtitle: 'Was it opened and acted on?',
    body: 'Website sessions, document downloads, citations, brief requests, API pulls and repeat access.',
    accent: 'teal' as AccentName,
  },
  {
    title: 'Uptake',
    subtitle: 'Was it cited or referenced?',
    body: 'Evidence cited in policy, planning, budgets, programme design, donor reports or academic work.',
    accent: 'green' as AccentName,
  },
  {
    title: 'Follow-through',
    subtitle: 'Did it change a decision?',
    body: 'Requests for training, capacity building, data access, collaboration or commercialization.',
    accent: 'amber' as AccentName,
  },
] satisfies Card[];

export const impactCases = {
  eyebrow: 'Impact cases',
  title: 'A verified narrative from output to institutional result.',
  body: 'An impact case links an output to a decision, action, investment, public conversation or institutional result - giving funders, leadership and programme teams evidence that dissemination is producing results.',
  image: {
    src: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=2000&q=80',
    alt: 'Close-up of analytics charts on a screen',
  } satisfies ImageRef,
} as const;

export const impactClosing = {
  eyebrow: 'Get started',
  title: 'Ready to make your evidence visible, usable and measurable?',
  body: 'Partner with DACORIS EvidenceReach to move from publication to public value.',
  primaryCta: {
    label: 'Request a demo',
    href: 'mailto:info@dacoris.com?subject=DACORIS%20EvidenceReach%20demo',
  },
  secondaryCta: null,
} as const;

export const marketsHero = {
  eyebrow: 'Solutions',
  title: 'Who DER is built for.',
  intro:
    'Six client groups share the same gap: evidence exists, but the path to use is broken. DER is the governed layer that carries it from source to decision, and shows what happened next.',
  image: {
    src: 'https://images.unsplash.com/photo-1493397212122-2b85dda8106b?auto=format&fit=crop&w=2400&q=80',
    alt: 'Modern institutional building facade against the sky',
  } satisfies ImageRef,
} as const;

export const marketsTableIntro = {
  eyebrow: 'Who it is for',
  title: 'Six client groups, one governed evidence layer.',
} as const;

export const marketsTableColumns = {
  clientType: 'Client group',
  useCase: 'What DER does for them',
} as const;

export const marketsTable = [
  {
    clientType: 'Government ministries and agencies',
    useCase: 'Bring reliable evidence into policy, planning, budgeting and public communication.',
    href: '/solutions/ministries',
  },
  {
    clientType: 'National statistics offices',
    useCase: 'Increase discovery, interpretation, reuse and trust in official statistics.',
    href: '/solutions/statistics',
  },
  {
    clientType: 'NGOs and implementers',
    useCase: 'Convert project evidence into reporting, learning and adaptive management.',
    href: '/solutions/ngos',
  },
  {
    clientType: 'Funders and foundations',
    useCase: 'See patterns, gaps, outcomes and influence across a grant portfolio.',
    href: '/solutions/funders',
  },
  {
    clientType: 'Universities, research councils and think tanks',
    useCase: 'Mobilise research beyond repositories and track policy and public impact.',
    href: '/solutions/research',
  },
  {
    clientType: 'Regional and multilateral bodies',
    useCase: 'Federate comparable country evidence while preserving provenance.',
    href: '/solutions/regional',
  },
] as const;

export const ecosystemIntro = {
  eyebrow: 'Beyond the six',
  title: 'Governed evidence moves further when the wider ecosystem can use it.',
  intro:
    'These groups are not the primary buyers, but they read, validate, distribute and connect DER-managed evidence.',
} as const;

export const ecosystem = [
  {
    title: 'Media and journalists',
    subtitle: 'Audience partner',
    body: 'Rapid access to authoritative releases, methodology, explainers and correction history.',
    accent: 'indigo' as AccentName,
  },
  {
    title: 'Civil society and citizen groups',
    subtitle: 'Users and validators',
    body: 'Accessible evidence for participation, accountability and advocacy, and a source of validated-use feedback.',
    accent: 'teal' as AccentName,
  },
  {
    title: 'Private sector and industry associations',
    subtitle: 'Secondary users and partners',
    body: 'Reliable market and sector evidence, policy intelligence, ESG and public-value narratives.',
    accent: 'amber' as AccentName,
  },
  {
    title: 'Professional bodies and networks',
    subtitle: 'Dissemination partners',
    body: 'Curated standards, member evidence, practice guidance and regional learning.',
    accent: 'violet' as AccentName,
  },
  {
    title: 'Technology and data-platform providers',
    subtitle: 'Integration partners',
    body: 'Interoperable evidence, metadata and delivery and impact signals for connectors and hosting.',
    accent: 'green' as AccentName,
  },
] satisfies Card[];

export const marketsFlagship = {
  eyebrow: 'Flagship adoption path',
  title: 'Positioned for a KNBS-style first adoption.',
  body: 'Large volumes of public evidence need to reach ministries, donors, media, researchers, private sector, counties and citizens in a structured and measurable way. Once validated in this environment, the same system can be configured for other national agencies, regional bodies, universities and donor-funded programmes - without rebuilding the core.',
  image: {
    src: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=1200&q=80',
    alt: 'Government building exterior',
  } satisfies ImageRef,
} as const;

export const solutionsLinksIntro = {
  eyebrow: 'See your use case',
  title: 'Explore how EvidenceReach fits your institution.',
} as const;

export const marketsClosing = {
  eyebrow: 'Get started',
  title: 'Ready to make your evidence visible, usable and measurable?',
  body: 'Partner with DACORIS EvidenceReach to move from publication to public value.',
  primaryCta: {
    label: 'Request a demo',
    href: 'mailto:info@dacoris.com?subject=DACORIS%20EvidenceReach%20demo',
  },
  secondaryCta: null,
} as const;
