import type { AccentName } from '@/theme/tokens';

export const teamHero = {
  eyebrow: 'Who we are',
  title: 'The people building evidence infrastructure for public institutions.',
  intro:
    'A small, deliberately cross-disciplinary team - data systems, governance, product and public policy - working from Nairobi with institutions across the region.',
  // Photo by UK Black Tech on Unsplash
  image: {
    src: 'https://images.unsplash.com/photo-1653566031587-74f7d86a2e71?auto=format&fit=crop&w=2400&q=80',
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
    // Photo by Christina @ wocintechchat.com on Unsplash
    image: {
      src: 'https://images.unsplash.com/photo-1573497161161-c3e73707e25c?auto=format&fit=crop&w=800&q=80',
      alt: 'Portrait of Amina Odhiambo',
    },
  },
  {
    name: 'Brian Kiptoo',
    role: 'Head of Product',
    bio: 'Shapes how evidence becomes communication - from policy briefs to donor-ready releases audiences actually open.',
    // Photo by tekimax on Unsplash
    image: {
      src: 'https://images.unsplash.com/photo-1588178454780-441fa5b99fa5?auto=format&fit=crop&w=800&q=80',
      alt: 'Portrait of Brian Kiptoo',
    },
  },
  {
    name: 'Wanjiru Njeri',
    role: 'Head of Governance & Assurance',
    bio: 'Designs the approval hierarchies and audit trails that let institutions publish with confidence, not caution.',
    // Photo by Christina @ wocintechchat.com on Unsplash
    image: {
      src: 'https://images.unsplash.com/photo-1573497491765-dccce02b29df?auto=format&fit=crop&w=800&q=80',
      alt: 'Portrait of Wanjiru Njeri',
    },
  },
  {
    name: 'David Mensah',
    role: 'Head of Engineering',
    bio: 'Builds the registry, release pipeline and impact-intelligence infrastructure that runs underneath every product.',
    // Photo by Olawale Munna on Unsplash
    image: {
      src: 'https://images.unsplash.com/photo-1614023342667-6f060e9d1e04?auto=format&fit=crop&w=800&q=80',
      alt: 'Portrait of David Mensah',
    },
  },
  {
    name: 'Fatima Al-Hassan',
    role: 'Head of Impact Intelligence',
    bio: 'Turns attention, uptake and follow-through signals into evidence institutions can bring back to their funders.',
    // Photo by Christina @ wocintechchat.com on Unsplash
    image: {
      src: 'https://images.unsplash.com/photo-1573497491207-618cc224f243?auto=format&fit=crop&w=800&q=80',
      alt: 'Portrait of Fatima Al-Hassan',
    },
  },
  {
    name: 'Samuel Otieno',
    role: 'Partnerships & Government Relations',
    bio: 'Works with ministries, donors and universities to scope first engagements and plan the path to scale.',
    // Photo by Tau Mor on Unsplash
    image: {
      src: 'https://images.unsplash.com/photo-1610903866883-c280999dcc0e?auto=format&fit=crop&w=800&q=80',
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
