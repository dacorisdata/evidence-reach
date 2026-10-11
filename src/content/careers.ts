import type { ImageRef } from './types';
import { photo } from './images';
import { site } from './site';

/* ------------------------------------------------------------------ */
/* Careers and opportunities                                           */
/*                                                                     */
/* To publish a new opportunity:                                       */
/*   1. Drop the advert PDF into /public/careers/                      */
/*   2. Add an entry to `opportunities` below (copy an existing one).  */
/* Open/closed status, the homepage band and the announcement bar all  */
/* follow `deadline` automatically - nothing to switch off by hand.    */
/* ------------------------------------------------------------------ */

export type OpportunityType = 'Institutional partnership' | 'Individual role';

export type OpportunityDocument = {
  label: string;
  href: string;
  fileName: string;
  size: string;
};

export type OpportunityBlock = {
  title: string;
  intro?: string;
  items: readonly { lead: string; body: string }[];
};

export type Opportunity = {
  slug: string;
  title: string;
  shortTitle: string;
  type: OpportunityType;
  department: string;
  location: string;
  workMode: string;
  engagement: string;
  /** ISO date the advert went live, YYYY-MM-DD. */
  posted: string;
  /** ISO timestamp with offset. Applications close at this moment. */
  deadline: string;
  summary: string;
  metaDescription: string;
  image: ImageRef;
  overview: readonly string[];
  responsibilities: OpportunityBlock;
  requirements: OpportunityBlock;
  application: {
    email: string;
    subject: string;
    checklist: readonly string[];
    note: string;
  };
  document: OpportunityDocument;
  related?: readonly string[];
};

const derAdvert: OpportunityDocument = {
  label: 'Full advert (PDF)',
  href: '/careers/DER_Communications_Sales_Recruitment_Advert.pdf',
  fileName: 'DER_Communications_Sales_Recruitment_Advert.pdf',
  size: '114 KB',
};

const derDeadline = '2026-10-25T23:59:00+03:00';

export const aboutDerCommunications = [
  'DACORIS EvidenceReach Communications (DER Communications), part of DACORIS Group, helps institutions turn reports, datasets, research and programme findings into accessible communication for their audiences.',
  'The platform supports evidence registration, tailored briefs and summaries, publication approvals, targeted dissemination and tracking of attention, use and uptake. We are seeking institutions and individuals who can translate this value into new client relationships and subscription sales.',
] as const;

export const priorityPortfolios = [
  'Government ministries, departments, agencies and parastatals',
  'National statistics offices, regulators and county governments',
  'NGOs, civil society organisations and programme implementers',
  'Development agencies, funders and foundations',
  'Universities, research institutes and think tanks',
  'Regional and multilateral bodies',
  'Professional associations with substantial evidence and reporting needs',
] as const;

export const portfolioNote =
  'Applicants should specify their strongest sectors and geographic markets. Relevant buyers include institutional leadership and teams responsible for communications, research, policy, monitoring and evaluation, knowledge management, ICT and procurement.';

export const opportunities: readonly Opportunity[] = [
  {
    slug: 'institutional-sales-agents',
    title: 'Institutional Sales Agents',
    shortTitle: 'Sales Agents (institutions)',
    type: 'Institutional partnership',
    department: 'Sales and partnerships',
    location: 'Kenya and the wider region',
    workMode: 'Field and remote',
    engagement: 'Sales agency agreement',
    posted: '2026-10-11',
    deadline: derDeadline,
    summary:
      'For established SaaS resellers, technology sales agencies, software distributors and consultancies with a verifiable record of selling software to institutional buyers.',
    metaDescription:
      'DER Communications invites SaaS resellers, technology sales agencies and consultancies to apply as Institutional Sales Agents. Apply by 25 October 2026.',
    image: photo('briefingRoom', 1600),
    overview: [
      'We invite established SaaS resellers, technology sales agencies, software distributors and consultancies with demonstrable institutional software sales experience to apply as sales agents for DER Communications.',
      'Agents build a qualified pipeline in agreed portfolios and territories, take opportunities from first meeting through procurement, and convert pilots into recurring subscriptions.',
    ],
    responsibilities: {
      title: 'What the institution will do',
      items: [
        {
          lead: 'Develop a focused market plan.',
          body: 'Map priority accounts, decision-makers and procurement cycles; build a qualified pipeline and agree sales targets with DACORIS.',
        },
        {
          lead: 'Generate and qualify opportunities.',
          body: 'Secure meetings, assess communication and evidence-use needs, identify budgets and confirm who influences and approves purchases.',
        },
        {
          lead: 'Demonstrate and sell DER.',
          body: 'Coordinate tailored demonstrations, prepare proposals with DACORIS, support approved bids and procurement processes, and negotiate within authorised terms.',
        },
        {
          lead: 'Convert and retain clients.',
          body: 'Progress pilots towards subscriptions; coordinate onboarding handovers and support account growth, renewals and expansion opportunities.',
        },
        {
          lead: 'Maintain disciplined reporting.',
          body: 'Submit weekly CRM updates covering meetings, pipeline stages, deal values, forecasts, next actions, obstacles and competitor intelligence.',
        },
      ],
    },
    requirements: {
      title: 'Required institutional experience and capacity',
      items: [
        {
          lead: 'A verifiable SaaS sales record.',
          body: 'Preferably three or more years selling subscription software or enterprise technology to organisational buyers, with evidence of deals personally originated, closed and renewed.',
        },
        {
          lead: 'Relevant deal experience.',
          body: 'At least two relevant client examples showing the solution, buyer sector, sales cycle, scope, sales role and outcome. Anonymised evidence is acceptable where confidentiality applies.',
        },
        {
          lead: 'Institutional market access.',
          body: 'Credible relationships in selected portfolios and experience navigating procurement, multi-stakeholder approvals, proposals, tenders and technical reviews.',
        },
        {
          lead: 'Delivery readiness.',
          body: 'A legally registered institution with a named sales lead, adequate sales capacity, CRM discipline and the ability to explain SaaS subscriptions, onboarding, integrations and customer value accurately.',
        },
      ],
    },
    application: {
      email: site.email,
      subject: 'DER Communications Institutional Sales Agent Application',
      checklist: [
        'Organisation profile and registration details',
        'Named sales lead and team CVs',
        'Target sectors and territories',
        'Two relevant SaaS sales examples',
        'Client references, where authorised',
        'A brief market entry plan',
      ],
      note: 'Applications should show how you will secure institutional meetings, progress opportunities through procurement and convert interest into recurring subscription revenue. Commercial terms will be discussed with selected applicants.',
    },
    document: derAdvert,
    related: ['sales-and-marketing-officers'],
  },
  {
    slug: 'sales-and-marketing-officers',
    title: 'Sales and Marketing Officers',
    shortTitle: 'Sales and Marketing Officers',
    type: 'Individual role',
    department: 'Sales and marketing',
    location: 'Nairobi, Kenya',
    workMode: 'Hybrid',
    engagement: 'Terms discussed with selected applicants',
    posted: '2026-10-11',
    deadline: derDeadline,
    summary:
      'For commercially focused professionals who can build an institutional sales pipeline, communicate DER’s value clearly and turn qualified opportunities into subscriptions.',
    metaDescription:
      'DER Communications is recruiting Individual Sales and Marketing Officers to build an institutional SaaS sales pipeline. Apply by 25 October 2026.',
    image: photo('commsTeam', 1600),
    overview: [
      'We welcome commercially focused professionals who can build an institutional sales pipeline, communicate DER’s value clearly and turn qualified opportunities into subscriptions.',
      'Officers prospect and develop accounts, run consultative sales conversations with product and technical colleagues, and support targeted, sector-specific marketing.',
    ],
    responsibilities: {
      title: 'What the officer will do',
      items: [
        {
          lead: 'Prospect and develop accounts.',
          body: 'Research target institutions, conduct outreach, build relationships and book discovery meetings with relevant decision-makers.',
        },
        {
          lead: 'Run consultative sales conversations.',
          body: 'Understand client needs, define use cases and coordinate demonstrations and proposals with the product and technical teams.',
        },
        {
          lead: 'Drive conversion.',
          body: 'Follow up consistently, address objections, progress opportunities through procurement and meet agreed targets for qualified meetings, proposals and closed subscriptions.',
        },
        {
          lead: 'Support targeted marketing.',
          body: 'Develop sector-specific campaigns, presentations and outreach content; represent DER at relevant events and measure campaign-generated leads and conversion.',
        },
        {
          lead: 'Manage the pipeline and client handover.',
          body: 'Keep CRM records current, report weekly, forecast realistically and coordinate onboarding, account follow-up and renewal opportunities.',
        },
      ],
    },
    requirements: {
      title: 'Qualifications and expected experience',
      items: [
        {
          lead: 'Education.',
          body: 'A degree or diploma in sales, marketing, business, communications, ICT or a related discipline, or equivalent relevant professional experience.',
        },
        {
          lead: 'Sales experience.',
          body: 'Preferably two or more years in B2B sales or business development, including direct experience selling SaaS, enterprise software or subscription technology. Evidence of measurable results is essential.',
        },
        {
          lead: 'Commercial competence.',
          body: 'Ability to qualify opportunities, present a business case, demonstrate software, prepare proposals, negotiate, close sales and support renewals. Familiarity with institutional procurement is an advantage.',
        },
        {
          lead: 'Communication and digital skills.',
          body: 'Strong written and verbal communication, presentation and relationship management skills; practical experience with CRM tools, spreadsheets, digital prospecting and campaign reporting.',
        },
        {
          lead: 'Sector understanding and work discipline.',
          body: 'Knowledge of at least one priority portfolio; ability to learn evidence dissemination and impact concepts; accurate reporting, initiative and responsible handling of client information.',
        },
      ],
    },
    application: {
      email: site.email,
      subject: 'DER Communications Sales and Marketing Officer Application',
      checklist: [
        'CV or résumé',
        'A brief cover letter identifying your strongest client portfolio',
        'A short summary of sales achievements: targets, results, products sold and your role',
        'A professional profile or portfolio link, if available',
      ],
      note: 'Applications should show how you will secure institutional meetings, progress opportunities through procurement and convert interest into recurring subscription revenue. Employment terms will be discussed with selected applicants.',
    },
    document: derAdvert,
    related: ['institutional-sales-agents'],
  },
];

/* ------------------------------------------------------------------ */
/* Page copy                                                           */
/* ------------------------------------------------------------------ */

export const careersHero = {
  eyebrow: 'Careers and opportunities',
  title: 'Help institutions put their evidence to work.',
  intro:
    'Jobs, sales partnerships and other opportunities with DACORIS EvidenceReach. Read the role, download the full advert and apply by email.',
  image: photo('teamLaptops', 2400),
} as const;

export const careersEmpty = {
  title: 'No open opportunities right now.',
  body: 'New roles and partnership calls are published here first. Send us a note and we will keep your details on file.',
} as const;

/** The opportunity promoted on the homepage and in the announcement bar. */
export const featuredCampaign = {
  eyebrow: 'We are hiring',
  title: 'Sales opportunities at DER Communications',
  body: 'We are recruiting Institutional Sales Agents and individual Sales and Marketing Officers to bring EvidenceReach to ministries, statistics offices, NGOs, funders and universities.',
  barText: 'We are hiring: sales opportunities at DER Communications.',
  slugs: ['institutional-sales-agents', 'sales-and-marketing-officers'],
  document: derAdvert,
  deadline: derDeadline,
} as const;

/* ------------------------------------------------------------------ */
/* Helpers                                                             */
/* ------------------------------------------------------------------ */

export function getOpportunity(slug: string) {
  return opportunities.find((item) => item.slug === slug);
}

export function isOpen(deadline: string, now: Date = new Date()) {
  return now.getTime() <= new Date(deadline).getTime();
}

export function daysLeft(deadline: string, now: Date = new Date()) {
  const ms = new Date(deadline).getTime() - now.getTime();
  return Math.ceil(ms / 86_400_000);
}

/** Deadlines are shown in East Africa Time regardless of the reader's time zone. */
export function formatDeadline(deadline: string, withTime = false) {
  const date = new Date(deadline);
  const day = date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'Africa/Nairobi',
  });
  if (!withTime) return day;
  const time = date
    .toLocaleTimeString('en-GB', { hour: 'numeric', minute: '2-digit', hour12: true, timeZone: 'Africa/Nairobi' })
    .toLowerCase();
  return `${day}, ${time} EAT`;
}

export function formatPosted(isoDate: string) {
  const [year, month, day] = isoDate.split('-').map(Number);
  return new Date(year, month - 1, day).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export function mailtoFor(opportunity: Opportunity) {
  return `mailto:${opportunity.application.email}?subject=${encodeURIComponent(opportunity.application.subject)}`;
}

export function getOpportunityTypes() {
  return [...new Set(opportunities.map((item) => item.type))];
}
