import type { ImageRef } from './types';

export const contactHero = {
  eyebrow: 'Contact',
  title: 'Move from publication to public value.',
  intro:
    "Tell us about your institution's evidence and audiences, and we'll show you an end-to-end demonstration - ingestion, product generation, approval, publication tracking and impact reporting.",
  cta: { label: 'Request a demo', href: '#demo-form' },
  image: {
    src: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2400&q=80',
    alt: 'Modern office workspace with natural light',
  } satisfies ImageRef,
} as const;

export const contactFormCopy = {
  title: 'Tell us about your institution',
  submitLabel: 'Request a demo',
  fields: {
    name: 'Name',
    email: 'Work email',
    organization: 'Organization',
    disseminate: 'What would you like to disseminate?',
    website: 'Website',
  },
} as const;

export const contactInfoCopy = {
  eyebrow: 'Contact us',
} as const;

export const whatToExpect = {
  eyebrow: 'What to expect',
  body: 'A short discovery conversation, a demonstration on public-output data, and a configuration plan scoped to your priority use case.',
} as const;
