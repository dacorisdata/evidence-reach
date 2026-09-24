import type { AccentName } from '@/theme/tokens';
import type { Card } from './types';

export const aboutHero = {
  eyebrow: 'Company identity',
  title: 'DACORIS EvidenceReach',
  intro:
    'A DACORIS Group company that turns research, statistics and reports into governed communication - and measurable impact.',
  image: {
    src: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=2400&q=80',
    alt: 'A team celebrating a milestone around a laptop in a bright office',
  },
} as const;

export const identity = {
  eyebrow: 'The problem',
  title: 'Evidence that never left the shelf.',
  body: 'Valuable evidence sits in disconnected repositories and long reports, reaching almost no one. DER connects it to audiences, channels, approvals and impact indicators - so it moves from storage to public value.',
  image: {
    src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
    alt: 'Colleagues reviewing a printed report together at a desk',
  },
} as const;

export const positioning = {
  eyebrow: 'Positioning',
  title: 'A dissemination operating system, not just a repository.',
  intro: 'What to communicate, to whom, through which channel, under whose approval - and with what outcome.',
  cards: [
    {
      title: 'Evidence organization',
      body: 'Connect outputs to sectors, ministries, themes, datasets, projects and focus areas.',
      accent: 'indigo' as AccentName,
    },
    {
      title: 'Communication production',
      body: 'Generate briefs, posts, advisories, media kits and summaries from technical outputs.',
      accent: 'violet' as AccentName,
    },
    {
      title: 'Governed publication',
      body: 'Review, approval and channel release with audit trails and accountability.',
      accent: 'amber' as AccentName,
    },
    {
      title: 'Stakeholder reach',
      body: 'Channels for government, donors, media, industry, academia and the public.',
      accent: 'teal' as AccentName,
    },
    {
      title: 'Impact intelligence',
      body: 'Attention, use, uptake, follow-through, enquiries and impact cases.',
      accent: 'green' as AccentName,
    },
    {
      title: 'Scalable infrastructure',
      body: 'From hundreds of public outputs to millions via repository integration and APIs.',
      accent: 'coral' as AccentName,
    },
  ] satisfies Card[],
} as const;

export const imageBreak = {
  eyebrow: 'In practice',
  line: 'From a single ministry pilot to an enterprise catalogue of millions of outputs - without rebuilding the core.',
  image: {
    src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2000&q=80',
    alt: 'Analytics dashboard showing evidence uptake and reach',
  },
} as const;

export const whyStandOut = {
  eyebrow: 'Why DER stands out',
  title: 'Where repositories stop, EvidenceReach begins.',
  cards: [
    {
      title: 'It is not just a repository',
      body: 'DER converts outputs into products, channels, approvals and measurable reach.',
    },
    {
      title: 'Built for public-sector evidence',
      body: 'It understands ministries, directorates, statistics, donor reporting and leadership accountability.',
    },
    {
      title: 'Connects communication and impact',
      body: 'Every product is tracked beyond publication, creating a living evidence-of-use layer.',
    },
    {
      title: 'Human-governed AI',
      body: 'AI accelerates drafting and classification while final authority stays with institutional reviewers.',
    },
    {
      title: 'Scalable and configurable',
      body: 'Start as a public-output demonstration and grow into a million-output enterprise platform.',
    },
    {
      title: 'Real-time leadership view',
      body: 'Executive teams see outputs, pipeline, reach, risk, pending approvals and impact cases in one place.',
    },
  ],
} as const;

export const aboutClosingCta = {
  eyebrow: 'Get started',
  title: 'Ready to make your evidence visible, usable and measurable?',
  body: 'Partner with DACORIS EvidenceReach to move from publication to public value.',
  primaryCta: {
    label: 'Request a demo',
    href: 'mailto:info@dacoris.com?subject=DACORIS%20EvidenceReach%20demo',
  },
} as const;

// Legacy content kept only so the (currently unused) Mission/Timeline/GroupSection
// components still type-check. Not rendered on the live About page.
export const mission = {
  eyebrow: 'Why we exist',
  title: 'We saw the gap from the inside, so we built the bridge.',
  body: [
    'Before DACORIS, our founding team worked inside the institutions EvidenceReach now serves.',
  ],
  image: {
    src: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1200&q=80',
    alt: 'Colleagues reviewing a report together around a laptop',
  },
} as const;

export const milestones = {
  eyebrow: 'How we got here',
  title: 'From a shared frustration to institutional infrastructure.',
  intro: 'A short history, still being written.',
  items: [
    {
      year: '2023',
      title: 'DACORIS EvidenceReach is founded',
      body: 'A small team sets out to fix the gap between publication and public value.',
      accent: 'indigo' as AccentName,
    },
  ],
} as const;

export const group = {
  eyebrow: 'Part of something larger',
  title: 'A DACORIS Group product.',
  body: 'DACORIS Group builds specialist software for institutions solving public-interest problems.',
  image: {
    src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    alt: 'Modern office building exterior',
  },
} as const;
