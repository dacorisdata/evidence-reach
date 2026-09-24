import { photo } from './images';

export type FaqItem = {
  question: string;
  answer: string;
  related?: readonly { label: string; href: string }[];
};

export const faqHero = {
  eyebrow: 'FAQ',
  title: 'Frequently asked questions.',
  intro: 'Straight answers on hosting, AI, implementation, pricing and scale.',
  image: photo('printedReport', 2400),
} as const;

export const faqItems: readonly FaqItem[] = [
  {
    question: 'How is our evidence hosted and secured?',
    answer:
      'DER supports public data first, with provision for private cloud, on-premise or Kenya-hosted deployment depending on your governance environment. Role-based access, audit logging and governed approvals protect sensitive material.',
    related: [
      { label: 'Trust and responsible AI', href: '/platform/trust' },
      { label: 'Integrations and standards', href: '/platform/integrations' },
    ],
  },
  {
    question: 'Where can the platform be deployed?',
    answer:
      'Public cloud, private cloud, on-premise, or a Kenya-hosted environment - chosen to match your data-residency and governance requirements.',
    related: [{ label: 'Deployment options', href: '/platform/integrations' }],
  },
  {
    question: 'How does the AI work, and can we trust it?',
    answer:
      'AI is an authoring and decision-support layer, not an uncontrolled publisher. Every AI-generated item remains a draft until it passes human review and institutional approval, preserving accuracy, auditability and accountability.',
    related: [{ label: 'Trust and responsible AI', href: '/platform/trust' }],
  },
  {
    question: 'What does implementation look like?',
    answer:
      'Six phases: discovery and configuration, evidence-registry setup, communication-studio configuration, dashboard and impact setup, an end-to-end demonstration, and scale-up deployment with integrations and training.',
    related: [{ label: 'Implementation', href: '/implementation' }],
  },
  {
    question: 'How is DER licensed and priced?',
    answer:
      'A client implementation licence (annual or multi-year), plus optional professional services, an impact-intelligence package, managed dissemination support, configurable sector editions and enterprise integration.',
    related: [{ label: 'Packages', href: '/get-started/packages' }],
  },
  {
    question: 'Can it scale beyond a demonstration?',
    answer:
      'Yes. Start with a controlled public-output demonstration of hundreds of outputs and grow to millions through repository integration, APIs and a lakehouse-ready architecture.',
    related: [{ label: 'Start with a pilot', href: '/get-started/pilot' }],
  },
];

export const faqClosing = {
  eyebrow: 'Still have a question?',
  title: 'Ask us directly.',
  body: 'Tell us what you need to know and we will answer for your institution.',
} as const;
