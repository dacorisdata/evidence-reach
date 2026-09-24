import type { NavItem } from './types';

export const mainNav: NavItem[] = [
  {
    label: 'Platform',
    children: [
      {
        label: 'Platform overview',
        href: '/platform',
        blurb: 'One workflow across the whole evidence value chain, from intake to impact.',
      },
      {
        label: 'How DER fits',
        href: '/platform/how-der-fits',
        blurb: 'Where DER sits next to repositories, data portals, M&E tools and BI.',
      },
      {
        label: 'Impact intelligence',
        href: '/platform/impact',
        blurb: 'Measure attention, use, uptake and follow-through after publication.',
      },
      {
        label: 'Markets we serve',
        href: '/platform/markets',
        blurb: 'Who EvidenceReach is built for, and the use cases it carries.',
      },
      {
        label: 'Integrations and standards',
        href: '/platform/integrations',
        blurb: 'Repositories, statistics standards, identity and deployment options.',
      },
      {
        label: 'Trust and responsible AI',
        href: '/platform/trust',
        blurb: 'Governance, data protection, human approval and release authority.',
      },
    ],
  },
  {
    label: 'Solutions',
    children: [
      {
        label: 'All solutions',
        href: '/solutions',
        blurb: 'Six client groups and the evidence job DER does for each.',
      },
      {
        label: 'Government ministries',
        href: '/solutions/ministries',
        blurb: 'Evidence for policy, planning and budgets, with the source trail intact.',
      },
      {
        label: 'National statistics offices',
        href: '/solutions/statistics',
        blurb: 'Make official statistics easier to find, understand, reuse and trust.',
      },
      {
        label: 'NGOs and implementers',
        href: '/solutions/ngos',
        blurb: 'Turn evaluations and learning products into reporting and adaptive management.',
      },
      {
        label: 'Funders and foundations',
        href: '/solutions/funders',
        blurb: 'Portfolio evidence, learning and funding intelligence across grants.',
      },
      {
        label: 'Universities and think tanks',
        href: '/solutions/research',
        blurb: 'Move research beyond the repository and evidence where it travelled.',
      },
      {
        label: 'Regional and multilateral bodies',
        href: '/solutions/regional',
        blurb: 'Comparable country evidence with national ownership preserved.',
      },
    ],
  },
  {
    label: 'Get started',
    children: [
      {
        label: 'Packages',
        href: '/get-started/packages',
        blurb: 'Institutional, Portfolio and Federation, with the services that make adoption stick.',
      },
      {
        label: 'Start with a pilot',
        href: '/get-started/pilot',
        blurb: 'A time-bound, measurable first cycle with named owners and success metrics.',
      },
      {
        label: 'Implementation',
        href: '/implementation',
        blurb: 'From discovery and configuration through to institutional scale.',
      },
    ],
    featured: {
      eyebrow: 'First conversation',
      title: 'See it on your own evidence',
      body: 'A short discovery call and a demonstration on public-output data, scoped to your priority use case.',
      href: '/contact',
      cta: 'Request a demo',
    },
  },
  {
    label: 'Resources',
    children: [
      {
        label: 'FAQ',
        href: '/faq',
        blurb: 'Answers on hosting, AI, implementation, pricing and scale.',
      },
      {
        label: 'News',
        href: '/news',
        blurb: 'Updates from DACORIS EvidenceReach.',
      },
    ],
  },
  {
    label: 'Company',
    children: [
      {
        label: 'About',
        href: '/about',
        blurb: 'Why EvidenceReach exists, and where it sits in the DACORIS Group.',
      },
      {
        label: 'Team',
        href: '/team',
        blurb: 'The people behind the platform.',
      },
      {
        label: 'Contact',
        href: '/contact',
        blurb: 'Request a demonstration scoped to your institution.',
      },
    ],
  },
];

export const footerNav = [
  {
    title: 'Platform',
    links: [
      { label: 'Overview', href: '/platform' },
      { label: 'How DER fits', href: '/platform/how-der-fits' },
      { label: 'Impact intelligence', href: '/platform/impact' },
      { label: 'Markets', href: '/platform/markets' },
      { label: 'Integrations and standards', href: '/platform/integrations' },
      { label: 'Trust and responsible AI', href: '/platform/trust' },
    ],
  },
  {
    title: 'Solutions',
    links: [
      { label: 'Government ministries', href: '/solutions/ministries' },
      { label: 'Statistics offices', href: '/solutions/statistics' },
      { label: 'NGOs and implementers', href: '/solutions/ngos' },
      { label: 'Funders and foundations', href: '/solutions/funders' },
      { label: 'Universities and think tanks', href: '/solutions/research' },
      { label: 'Regional and multilateral', href: '/solutions/regional' },
    ],
  },
  {
    title: 'Get started',
    links: [
      { label: 'Packages', href: '/get-started/packages' },
      { label: 'Start with a pilot', href: '/get-started/pilot' },
      { label: 'Implementation', href: '/implementation' },
      { label: 'Request a demo', href: '/contact' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'FAQ', href: '/faq' },
      { label: 'News', href: '/news' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Team', href: '/team' },
      { label: 'Contact', href: '/contact' },
      { label: 'Privacy notice', href: '/privacy' },
      { label: 'Terms of use', href: '/terms' },
      { label: 'www.dacoris.com', href: 'https://www.dacoris.com' },
    ],
  },
];
