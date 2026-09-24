import type { AccentName } from '@/theme/tokens';
import type { Card, Stat } from './types';
import { photo } from './images';

export const hero = {
  eyebrow: 'Evidence dissemination platform',
  headline: 'Evidence that reaches the people who decide.',
  intro:
    'DACORIS EvidenceReach turns institutional reports, datasets and research into governed, audience-ready communication - then measures what that communication changes.',
  primaryCta: { label: 'Request a demo', href: '/contact' },
  secondaryCta: { label: 'See the platform', href: '/platform' },
  trust: ['Human-approved AI', 'Regional hosting', 'A DACORIS Group product'],
  scrollLabel: 'Scroll to explore',
  // Photo by UK Black Tech on Unsplash
  image: {
    src: 'https://images.unsplash.com/photo-1653565685060-e15e492a7fda?auto=format&fit=crop&w=2400&q=80',
    alt: 'A presenter addressing a small team gathered around a whiteboard, following along as findings are walked through',
  },
} as const;

export const institutionStrip = {
  label: 'Built for',
  items: [
    'Government ministries',
    'National statistics offices',
    'NGOs and implementers',
    'Funders and foundations',
    'Universities and think tanks',
    'Regional bodies',
  ],
  href: '/solutions',
} as const;

export const problem = {
  eyebrow: 'Why this exists',
  title: 'Most institutions produce more evidence than they can communicate effectively.',
  intro:
    'Valuable reports are published, then stop moving. The audiences who should act on them never see a version written for their decision, and nobody can say what the evidence changed.',
  image: {
    src: 'https://images.unsplash.com/photo-1568667256549-094345857637?auto=format&fit=crop&w=1200&q=80',
    alt: 'Shelves of bound institutional reports',
  },
  points: [
    {
      title: 'High-value evidence sits unread',
      body: 'Census outputs, evaluations and programme results stay locked inside long documents that only specialists open.',
    },
    {
      title: 'Communication depends on scarce people',
      body: 'A small team writes every brief by hand, so output is limited by capacity rather than by the evidence available.',
    },
    {
      title: 'Approval is informal and untraceable',
      body: 'Sign-off happens over email and chat, which makes accountability difficult when a figure is questioned later.',
    },
    {
      title: 'Impact cannot be demonstrated',
      body: 'Institutions report how much they published, not whether the evidence reached anyone or changed a decision.',
    },
  ],
} as const;

export const platformOs = {
  eyebrow: 'What we do',
  title: 'A dissemination operating system for evidence-rich institutions.',
  intro:
    'EvidenceReach connects the whole chain, from the moment an output is registered to the moment its influence is recorded.',
  href: '/platform',
  cards: [
    {
      title: 'Evidence registry',
      body: 'Register reports, datasets, statistics and research outputs with the metadata, custody and version history that governance requires.',
      accent: 'indigo',
    },
    {
      title: 'Communication production',
      body: 'Generate policy briefs, summaries, releases and companion products from approved source material, tailored per audience.',
      accent: 'violet',
    },
    {
      title: 'Governed publication',
      body: 'Route every product through a defined approval hierarchy so nothing reaches the public before an authorised person accepts it.',
      accent: 'amber',
    },
    {
      title: 'Stakeholder reach',
      body: 'Release to ministries, donors, media, researchers, counties and citizens through the channels each audience already uses.',
      accent: 'teal',
    },
    {
      title: 'Impact intelligence',
      body: 'Track attention, use, uptake and follow-through so dissemination becomes a measurable institutional function.',
      accent: 'green',
    },
    {
      title: 'Audit and control',
      body: 'Keep a full operational record of who drafted, reviewed, approved and released each product, and when.',
      accent: 'coral',
    },
  ] satisfies Card[],
} as const;

export const impactTeaser = {
  eyebrow: 'Impact Intelligence',
  title: 'Beyond views and likes - measure what evidence actually does.',
  intro:
    'EvidenceReach connects a published output to the decisions, citations and institutional actions that follow it.',
  href: '/platform/impact',
  cta: 'See impact intelligence',
  // Photo by Ninthgrid on Unsplash
  image: {
    src: 'https://images.unsplash.com/photo-1739298061740-5ed03045b280?auto=format&fit=crop&w=1200&q=80',
    alt: 'Working session reviewing programme results',
  },
  cards: [
    { title: 'Attention', body: 'Views, downloads, media mentions and public discussion signals.', accent: 'indigo' },
    { title: 'Use', body: 'Document downloads, brief requests, API pulls and repeat access.', accent: 'teal' },
    { title: 'Uptake', body: 'Citation in policy, planning, budgets, programme design and donor reporting.', accent: 'green' },
    { title: 'Follow-through', body: 'Requests for training, data access, collaboration or commercialisation.', accent: 'amber' },
  ] satisfies Card[],
} as const;

export const stats: Stat[] = [
  { value: '15', label: 'Published outputs' },
  { value: '6', label: 'Publications tracked' },
  { value: '540+', label: 'Impact signals captured' },
];

export const statsCaption = 'Illustrative figures from a demonstration corpus.';

export const audiencesTeaser = {
  eyebrow: 'Who it is for',
  title: 'Built for public-sector and knowledge-intensive institutions.',
  intro:
    'These institutions share the same gap: evidence exists, but the path to use is broken. DER carries it from source to decision.',
  href: '/solutions',
  cta: 'Explore solutions',
  items: [
    {
      title: 'Government ministries',
      body: 'Policy, planning and budget evidence, and public-accountability products with the source trail intact.',
      href: '/solutions/ministries',
      image: photo('govBuilding', 900),
    },
    {
      title: 'National statistics offices',
      body: 'Official statistics that are easier to find, understand, reuse and trust.',
      href: '/solutions/statistics',
      image: photo('statsPublications', 900),
    },
    {
      title: 'Funders and foundations',
      body: 'Portfolio evidence, learning and funding intelligence across grants.',
      href: '/solutions/funders',
      image: photo('programmeReview', 900),
    },
    {
      title: 'Regional and multilateral bodies',
      body: 'Comparable, multilingual country evidence with national ownership preserved.',
      href: '/solutions/regional',
      image: photo('institutionFacade', 900),
    },
  ],
} as const;

export const flagship = {
  eyebrow: 'Adoption path',
  title: 'Start with one corpus, then widen without rebuilding.',
  body: 'A first engagement takes a controlled set of public outputs through the full chain: registration, translation, approval, release and measurement. That keeps sensitivity low and delivers visible value early. Once the chain holds under real volume and real governance, the same configuration extends to other departments, agencies, universities and donor-funded programmes without rebuilding the core.',
  cta: 'See the pilot path',
  href: '/get-started/pilot',
  // Photo by Christina @ wocintechchat.com on Unsplash
  image: {
    src: 'https://images.unsplash.com/photo-1573496130407-57329f01f769?auto=format&fit=crop&w=1200&q=80',
    alt: 'National institution briefing room',
  },
} as const;
