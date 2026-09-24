import type { AccentName } from '@/theme/tokens';

export const teamHero = {
  eyebrow: 'Who we are',
  title: 'The people building evidence infrastructure for public institutions.',
  intro:
    'A small, deliberately cross-disciplinary team - data systems, governance, product and public policy - working from Nairobi with institutions across the region.',
  image: {
    src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2400&q=80',
    alt: 'Team working together around a table with laptops and notes',
  },
} as const;

export const values = {
  eyebrow: 'How we work',
  title: 'Four principles that shape every release.',
  items: [
    {
      title: 'Evidence first',
      body: 'Every product we ship traces back to a registered, versioned source. Nothing is invented in translation.',
      accent: 'green' as AccentName,
    },
    {
      title: 'Governed by design',
      body: 'Approval hierarchies and audit trails are built into the workflow, not bolted on after something goes wrong.',
      accent: 'indigo' as AccentName,
    },
    {
      title: 'Built for the public interest',
      body: 'Our customers serve citizens. We design for accountability first, growth metrics second.',
      accent: 'teal' as AccentName,
    },
    {
      title: 'Regional, not extractive',
      body: 'Hosted, staffed and supported in the region we serve, with data residency institutions can verify.',
      accent: 'amber' as AccentName,
    },
  ],
} as const;

export const leadershipIntro = {
  eyebrow: 'Leadership',
  title: 'A team that has sat on both sides of the publication gap.',
  intro:
    'Most of us have worked inside the institutions we now build for - writing the briefs nobody read, or waiting on the approval nobody could find.',
} as const;

export const leadership = [
  {
    name: 'Amina Odhiambo',
    role: 'Founder & Chief Executive',
    bio: 'Fifteen years leading data systems for national statistics offices before founding DACORIS to close the gap between publication and public value.',
    image: {
      src: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80',
      alt: 'Portrait of Amina Odhiambo',
    },
  },
  {
    name: 'Brian Kiptoo',
    role: 'Head of Product',
    bio: 'Shapes how evidence becomes communication - from policy briefs to donor-ready releases audiences actually open.',
    image: {
      src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
      alt: 'Portrait of Brian Kiptoo',
    },
  },
  {
    name: 'Wanjiru Njeri',
    role: 'Head of Governance & Assurance',
    bio: 'Designs the approval hierarchies and audit trails that let institutions publish with confidence, not caution.',
    image: {
      src: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80',
      alt: 'Portrait of Wanjiru Njeri',
    },
  },
  {
    name: 'David Mensah',
    role: 'Head of Engineering',
    bio: 'Builds the registry, release pipeline and impact-intelligence infrastructure that runs underneath every product.',
    image: {
      src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80',
      alt: 'Portrait of David Mensah',
    },
  },
  {
    name: 'Fatima Al-Hassan',
    role: 'Head of Impact Intelligence',
    bio: 'Turns attention, uptake and follow-through signals into evidence institutions can bring back to their funders.',
    image: {
      src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80',
      alt: 'Portrait of Fatima Al-Hassan',
    },
  },
  {
    name: 'Samuel Otieno',
    role: 'Partnerships & Government Relations',
    bio: 'Works with ministries, donors and universities to scope first engagements and plan the path to scale.',
    image: {
      src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80',
      alt: 'Portrait of Samuel Otieno',
    },
  },
] as const;

export const advisory = {
  eyebrow: 'Advisory circle',
  title: 'Independent counsel on governance, ethics and public-sector data.',
  intro:
    'A small group of practitioners who review our approach to assurance, AI use and institutional partnership twice a year.',
  members: [
    { name: 'Prof. Elena Cortez', focus: 'Public-sector data policy' },
    { name: 'Dr. Grace Mwangi', focus: 'Research governance and ethics' },
    { name: 'James Whitfield', focus: 'Donor programme measurement' },
    { name: 'Dr. Kwame Boateng', focus: 'AI assurance and responsible automation' },
  ],
} as const;

export const joinUs = {
  eyebrow: 'Join us',
  title: 'Help institutions turn evidence into action.',
  body: 'We are a small team solving a problem most vendors ignore. If governed data infrastructure for the public sector sounds like your kind of hard problem, we would like to hear from you.',
  cta: 'Get in touch',
  href: '/contact',
} as const;
