import type { AccentName } from '@/theme/tokens';
import type { Card } from './types';
import type { Tier } from '@/components/shared/TierCards';
import type { Step } from '@/components/shared/StepsList';
import { photo } from './images';

/* ------------------------------------------------------------------ */
/* Packages                                                            */
/* ------------------------------------------------------------------ */

export const packagesHero = {
  eyebrow: 'Packages',
  title: 'Choose by governance maturity and scope, not by feature list.',
  intro:
    'Three packages scale from one institution to a federated network. Professional services make adoption stick in any of them.',
  image: photo('officeWorkspace', 2400),
} as const;

export const packagesIntro = {
  eyebrow: 'Three packages',
  title: 'Start where your institution is. Widen without rebuilding.',
  intro: 'Each package is described by who it fits, what it includes and the outcome it delivers.',
} as const;

export const tiers: readonly Tier[] = [
  {
    name: 'DER Institutional',
    bestFit: 'One ministry, national statistics office, NGO, foundation, university or think tank.',
    scope: [
      'Evidence registry',
      'Ingestion and search',
      'Taxonomy',
      'Product studio',
      'Review and publishing',
      'Baseline analytics',
      'Roles and support',
    ],
    outcome: 'A single institution operationalises its evidence-to-impact workflow.',
    accent: 'green',
  },
  {
    name: 'DER Portfolio',
    bestFit: 'A multi-programme NGO or funder, research council or group of institutions.',
    scope: [
      'Everything in DER Institutional',
      'Grant and programme relationships',
      'Portfolio synthesis',
      'Partner workflows',
      'Enhanced impact cases',
    ],
    outcome: 'Leadership sees patterns, gaps, reuse and results across the portfolio.',
    accent: 'indigo',
  },
  {
    name: 'DER Federation',
    bestFit: 'A government-wide, national, regional or multilateral network.',
    scope: [
      'Federated registries',
      'Cross-organisation permissions',
      'Shared taxonomies',
      'Multilingual products',
      'Standards integrations',
      'Cross-country analytics',
    ],
    outcome: 'Comparable evidence moves across institutions while source ownership is preserved.',
    accent: 'teal',
  },
];

export const servicesIntro = {
  eyebrow: 'Professional services',
  title: 'Adoption and governance, not software access alone.',
  intro: 'Available with any package.',
  cards: [
    {
      title: 'Evidence inventory and taxonomy',
      body: 'Map what evidence you hold, where it lives, and how it should be classified.',
      accent: 'green' as AccentName,
    },
    {
      title: 'Migration and integration',
      body: 'Bring existing records across and connect your repositories, portals and identity systems.',
      accent: 'indigo' as AccentName,
    },
    {
      title: 'Product-template design',
      body: 'Design the briefs, explainers and packs your audiences actually use.',
      accent: 'amber' as AccentName,
    },
    {
      title: 'Impact framework',
      body: 'Define what counts as use, uptake and follow-through for your institution.',
      accent: 'teal' as AccentName,
    },
    {
      title: 'Training and change management',
      body: 'Prepare analysts, reviewers and approvers to run the workflow with confidence.',
      accent: 'violet' as AccentName,
    },
    {
      title: 'Managed curation',
      body: 'Keep the registry accurate and complete with support from the DER team.',
      accent: 'coral' as AccentName,
    },
  ] satisfies Card[],
} as const;

export const pricingNote = {
  eyebrow: 'How we scope',
  title: 'The cost of adoption is visible from the start.',
  body: 'Configuration, integration, data migration, training and support are scoped alongside the platform, so there are no surprises after the pilot. Package scope is confirmed during discovery.',
  image: photo('teamLaptops', 1200),
} as const;

/* ------------------------------------------------------------------ */
/* Pilot                                                               */
/* ------------------------------------------------------------------ */

export const pilotHero = {
  eyebrow: 'Start with a pilot',
  title: 'One decision or release workflow, taken end to end in a measured pilot.',
  intro:
    'Lead with a painful decision or release, then see the full source-to-impact trail on your own evidence.',
  image: photo('workflowTeam', 2400),
} as const;

export const pilotRolesIntro = {
  eyebrow: 'What a pilot needs',
  title: 'Four things make a pilot measurable.',
  cards: [
    {
      title: 'A named sponsor',
      body: 'An accountable executive who owns the outcome and removes blockers.',
      accent: 'green' as AccentName,
    },
    {
      title: 'A data owner',
      body: 'The person who can confirm which evidence is authoritative and ready to use.',
      accent: 'indigo' as AccentName,
    },
    {
      title: 'An approver',
      body: 'The release authority who signs off products before they are published.',
      accent: 'amber' as AccentName,
    },
    {
      title: 'Agreed success metrics',
      body: 'A baseline and targets set before the pilot starts, so results are not argued afterwards.',
      accent: 'teal' as AccentName,
    },
  ] satisfies Card[],
} as const;

export const pilotStepsIntro = {
  eyebrow: 'How it runs',
  title: 'A controlled set of public outputs through the whole chain.',
  intro: 'Sector-specific demonstration data replaces the generic feature tour.',
} as const;

export const pilotSteps: readonly Step[] = [
  {
    title: 'Choose the decision or release',
    body: 'Pick one workflow that hurts today, such as a statistical release, a cabinet brief, a donor report or a policy brief.',
  },
  {
    title: 'Register the evidence',
    body: 'Take a controlled set of public outputs into the registry, with metadata, ownership and sensitivity recorded.',
  },
  {
    title: 'Translate and approve',
    body: 'Create audience-ready products with source-grounded assistance and route them through review and approval.',
  },
  {
    title: 'Release and track',
    body: 'Publish through the agreed channels, record where and when, and capture reach signals.',
  },
  {
    title: 'Review the results',
    body: 'Compare against the baseline, record impact cases, and decide whether to widen the scope.',
  },
];

export const pilotMetrics = {
  eyebrow: 'What we measure',
  title: 'Example success measures.',
  intro: 'Chosen with you from the value ladder, and agreed before the pilot starts.',
  items: [
    'Time from source to approved product',
    'Reviewer turnaround',
    'Reuse across products',
    'Search success and time to the authoritative record',
    'Metadata completeness',
    'Views and downloads, with de-duplication rules',
    'Citations and requests',
    'Impact cases recorded',
  ],
} as const;

export const pilotSplit = {
  eyebrow: 'After the pilot',
  title: 'Start small, then extend without rebuilding.',
  body: 'Once the chain holds under real volume and real governance, the same configuration extends to other departments, agencies, universities and programmes. The pilot is designed to be the first cycle of a working system, not a throwaway demonstration.',
  image: photo('briefingRoom', 1200),
} as const;

/* ------------------------------------------------------------------ */
/* Implementation                                                      */
/* ------------------------------------------------------------------ */

export const implementationHero = {
  eyebrow: 'Implementation',
  title: 'From first inventory to institutional scale.',
  intro:
    'A repeatable method that takes an institution from discovery and configuration through to a live evidence-to-impact workflow.',
  image: photo('teamLaptops', 2400),
} as const;

export const implementationStepsIntro = {
  eyebrow: 'The method',
  title: 'Five phases, each with a clear exit.',
  intro: 'Timelines and scope are agreed with each institution.',
} as const;

export const implementationSteps: readonly Step[] = [
  {
    title: 'Discover',
    body: 'Inventory the evidence you hold, map the decisions and audiences that matter, and choose the priority use case.',
  },
  {
    title: 'Configure',
    body: 'Set the taxonomy, metadata profiles, roles and permissions, product templates and impact framework.',
  },
  {
    title: 'Connect',
    body: 'Harvest repositories, migrate existing records and integrate with systems of record, with single sign-on where required.',
  },
  {
    title: 'Launch',
    body: 'Train analysts, reviewers and approvers, then run the first live evidence cycle with review and approval in operation.',
  },
  {
    title: 'Scale',
    body: 'Extend to more departments, partners or countries, with managed curation, change management and support.',
  },
];

export const implementationWhoIntro = {
  eyebrow: 'Who to involve',
  title: 'Bring the people who decide, own, approve and secure.',
  intro: 'A successful rollout needs both business and technical owners from the first week.',
  items: [
    'Executive sponsor',
    'Data or statistics owner',
    'Policy, results or M&E lead',
    'Knowledge management',
    'Communications',
    'ICT and security',
    'Legal and data governance',
    'Release approver',
  ],
} as const;

export const implementationServicesLink = {
  eyebrow: 'Services',
  title: 'Professional services are part of the package.',
  body: 'Evidence inventory, taxonomy, migration, integration, template design, impact framework, training, managed curation and change management. See how packages and services fit together.',
  image: photo('whiteboard', 1200),
} as const;
