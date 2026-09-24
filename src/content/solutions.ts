import type { ImageRef } from './types';
import { photo } from './images';

export type GapRow = {
  challenge: string;
  cost: string;
  fill: string;
};

export type Solution = {
  slug: string;
  label: string;
  metaDescription: string;
  hero: {
    eyebrow: string;
    title: string;
    intro: string;
    image: ImageRef;
  };
  gap: {
    title: string;
    intro: string;
    rows: readonly GapRow[];
  };
  products: readonly string[];
  owners: string;
  pitch: {
    line: string;
    body: string;
  };
  fit: string;
};

export const solutionScopeNote =
  'Capabilities shown are the configuration DER is designed around. Scope, integrations and timelines are agreed with each institution.';

export const solutionGapColumns = {
  challenge: 'Where evidence gets stuck',
  cost: 'What it costs the institution',
  fill: 'How DER fills the gap',
} as const;

export const solutionSections = {
  gapEyebrow: 'The gap DER closes',
  productsEyebrow: 'High-value DER products',
  productsTitle: 'Products this group creates from one governed source.',
  ownersLabel: 'Likely business owners',
  fitLabel: 'Typical starting package',
  pitchEyebrow: 'The pitch',
  closingEyebrow: 'Next step',
  closingTitle: 'See it on your own evidence.',
  closingBody:
    'A short discovery conversation, then a demonstration built around your priority decision or release.',
} as const;

export const solutions: readonly Solution[] = [
  {
    slug: 'ministries',
    label: 'Government ministries',
    metaDescription:
      'DACORIS EvidenceReach turns scattered evidence into timely, defensible policy, planning, budget and public-communication products for ministries and agencies.',
    hero: {
      eyebrow: 'Government ministries and agencies',
      title: 'Turn scattered evidence into timely, defensible policy, planning and budget products.',
      intro:
        'One governed path from research, statistics and programme evidence to the exact products leaders and citizens need.',
      image: photo('govBuilding', 2400),
    },
    gap: {
      title: 'Evidence exists. The path to use is broken.',
      intro: 'Five gaps ministries describe, and what DER does about each.',
      rows: [
        {
          challenge: 'Evidence lives across departments, agencies, consultants and programmes',
          cost: 'Teams repeat searches and commission work that already exists',
          fill: 'Federated registry, harvesting, related-evidence links and ownership metadata',
        },
        {
          challenge: 'Policy windows are short; reports are long and technical',
          cost: 'Leaders act on partial briefings or receive evidence too late',
          fill: 'Executive, cabinet, budget, policy and public-explainer templates built from one authoritative source',
        },
        {
          challenge: 'Claims lose provenance as they move into speeches, briefs and media',
          cost: 'Reputational risk and slow verification when numbers are challenged',
          fill: 'Source-to-claim trace, versions, approvals and a searchable publication record',
        },
        {
          challenge: 'Cross-ministry coordination is weak',
          cost: 'Conflicting numbers, duplicated initiatives and inconsistent messages',
          fill: 'Shared taxonomies, permissions, department dashboards and common evidence packs',
        },
        {
          challenge: 'The impact of evidence on policy is not institutionalised',
          cost: 'Government cannot show what research informed a plan, budget or guideline',
          fill: 'Impact cases linking evidence to decisions, uptake, implementation and follow-through',
        },
      ],
    },
    products: [
      'Cabinet and executive briefs',
      'Policy option notes',
      'Regulatory or budget evidence packs',
      'Ministerial factsheets',
      'Public explainers',
      'Media releases',
      'Stakeholder consultation summaries',
      'Implementation learning notes',
    ],
    owners: 'Policy and planning, M&E, research and communication teams',
    pitch: {
      line: 'Turn scattered evidence into cabinet-ready decisions with the source, review and impact trail intact.',
      body: 'DER gives a ministry one governed path from research, statistics and programme evidence to the exact products leaders and citizens need. Each claim remains linked to its authoritative source; each draft follows the right review; and each release can be tracked beyond impressions to verified policy use and follow-through.',
    },
    fit: 'DER Institutional for one ministry; DER Federation for a government-wide rollout.',
  },
  {
    slug: 'statistics',
    label: 'National statistics offices',
    metaDescription:
      'DACORIS EvidenceReach makes official statistics easier to find, understand, reuse and trust, without compromising impartiality or confidentiality.',
    hero: {
      eyebrow: 'National statistics offices and official data producers',
      title: 'Make official statistics easier to find, understand, reuse and trust.',
      intro:
        'A governed dissemination and utilisation layer that complements production and open-data systems, without compromising impartiality or confidentiality.',
      image: photo('statsPublications', 2400),
    },
    gap: {
      title: 'High-quality statistics still go unread.',
      intro: 'Five gaps statistics offices describe, and what DER does about each.',
      rows: [
        {
          challenge: 'Statistics are distributed across publications, data portals, archives and directorates',
          cost: 'Users struggle to discover the latest authoritative release',
          fill: 'Harvested catalogue, version status, related series, common taxonomy and unified search',
        },
        {
          challenge: "Technical products do not meet every audience's literacy or time constraints",
          cost: 'High-quality releases remain unread or are misinterpreted',
          fill: 'Data stories, statistical briefs, public explainers, media packs and social copy generated from approved source text',
        },
        {
          challenge: 'Release workflows and corrections are hard to trace',
          cost: 'Inconsistent versions undermine trust',
          fill: 'Embargo-aware review, approval, publication and withdrawal or correction records',
        },
        {
          challenge: 'Misinformation travels faster than official explanations',
          cost: 'Public trust erodes even when the underlying statistics are sound',
          fill: 'Rapid source-linked explainers, FAQs and media products, with monitored attention signals',
        },
        {
          challenge: 'Use of statistics in policy is not systematically evidenced',
          cost: 'The office cannot demonstrate public value or prioritise user engagement',
          fill: 'Impact cases for policy, budget, market, media and research use; attention-to-use analytics',
        },
      ],
    },
    products: [
      'Release briefs',
      'Methodology notes',
      'Sector and county profiles',
      'Data stories',
      'Journalist and media packs',
      'Myth-versus-fact explainers',
      'Social cards and copy',
      'Policy-use case studies',
      'Release calendars and correction notices',
    ],
    owners: 'Statistician-General, dissemination and data stewardship teams',
    pitch: {
      line: 'Make every official statistic traceable, understandable and usable before misinformation fills the gap.',
      body: 'DER complements the production and open-data systems of a statistics office with a governed dissemination and utilisation layer. It harvests authoritative outputs, converts each release into audience-ready products, protects confidentiality boundaries, records corrections and channels, and shows where statistics influence policy, markets, media and research.',
    },
    fit: 'DER Institutional.',
  },
  {
    slug: 'ngos',
    label: 'NGOs and implementers',
    metaDescription:
      'DACORIS EvidenceReach helps NGOs and implementing organisations turn evaluations and study evidence into reporting, learning and adaptive management.',
    hero: {
      eyebrow: 'NGOs, civil-society organisations and implementers',
      title: 'Make every evaluation, study and learning product work twice: for accountability, then for improvement.',
      intro:
        'Convert project evidence into donor reporting, organisational learning and adaptive management from one governed record.',
      image: photo('fieldTeam', 2400),
    },
    gap: {
      title: 'Learning disappears at close-out.',
      intro: 'Five gaps implementers describe, and what DER does about each.',
      rows: [
        {
          challenge: 'Evidence is stored by project, donor, country or staff member',
          cost: 'Learning disappears at close-out or turnover',
          fill: 'Portfolio-wide evidence registry with programme, geography, funder, outcome and partner relationships',
        },
        {
          challenge: 'Multiple donor formats drive repetitive reporting',
          cost: 'MEAL and programme teams spend time reformatting rather than learning',
          fill: 'Reusable source records and configurable donor, board, learning and public templates',
        },
        {
          challenge: 'Evaluation recommendations are not tracked into management action',
          cost: 'The organisation repeats weaknesses and cannot show adaptive management',
          fill: 'Impact and learning cases linking recommendation, decision, owner, implementation and follow-through',
        },
        {
          challenge: 'Local partner knowledge is under-represented',
          cost: 'Reporting extracts information but does not build shared learning',
          fill: 'Role-based contribution, multilingual products, partner review and controlled access',
        },
        {
          challenge: 'Advocacy claims and success stories can lose their evidence trail',
          cost: 'Credibility and safeguarding risks increase',
          fill: 'Source-grounded communication, sensitivity controls, consent metadata and approval gates',
        },
      ],
    },
    products: [
      'Learning briefs',
      'Donor evidence packs',
      'Evaluation syntheses',
      'Programme dashboards',
      'Implementation guides',
      'Advocacy briefs',
      'Community explainers',
      'Management-response updates',
      'Evidence-backed case studies',
      'IATI-linked documentation where applicable',
    ],
    owners: 'MEAL, programmes and knowledge management',
    pitch: {
      line: 'Stop treating evaluation reports as project endings; turn them into an institutional learning engine.',
      body: 'DER connects programme evidence, evaluations, funders, partners and outcomes in one searchable system. Teams can generate donor-ready, board-ready and community-ready products from the same governed evidence, while tracking what recommendations were adopted and what changed in implementation.',
    },
    fit: 'DER Institutional; DER Portfolio for multi-programme organisations.',
  },
  {
    slug: 'funders',
    label: 'Funders and foundations',
    metaDescription:
      'DACORIS EvidenceReach gives funders, foundations and development partners portfolio evidence, learning and funding intelligence across grantees.',
    hero: {
      eyebrow: 'Funders, foundations and development partners',
      title: 'Move from grant-by-grant reporting to portfolio evidence, learning and funding intelligence.',
      intro:
        'See patterns, gaps, outcomes and influence across a grant portfolio without forcing every partner into one heavy operating system.',
      image: photo('programmeReview', 2400),
    },
    gap: {
      title: 'Boards see delivery volume, not use and contribution.',
      intro: 'Five gaps funders describe, and what DER does about each.',
      rows: [
        {
          challenge: 'Grantees report in inconsistent formats and vocabularies',
          cost: 'Portfolio synthesis is slow, manual and biased toward what is easy to count',
          fill: 'Common metadata and taxonomy with flexible ingestion and grantee-specific mappings',
        },
        {
          challenge: 'Activity and output reporting dominates',
          cost: 'Boards see delivery volume but not credible outcomes, use or contribution',
          fill: 'Evidence-to-impact chain linking grants, outputs, products, verified cases and follow-through',
        },
        {
          challenge: 'Evidence gaps and duplication are difficult to see',
          cost: 'Funding decisions repeat research or neglect under-evidenced priorities',
          fill: 'Cross-grant search, relationship mapping, thematic and geographic views and gap analysis',
        },
        {
          challenge: 'Positive narratives can be detached from supporting evidence',
          cost: 'Reputational and assurance risk',
          fill: 'Source-linked claims, review authority, evidence-strength labels and audit history',
        },
        {
          challenge: 'Learning does not reliably return to grantees',
          cost: 'The same reporting burden persists without collective improvement',
          fill: 'Shared learning products, controlled portfolio views and reusable feedback loops',
        },
      ],
    },
    products: [
      'Portfolio syntheses',
      'Board evidence briefs',
      'Thematic and geographic learning maps',
      'Evidence-gap analyses',
      'Investment cases',
      'Grantee learning packs',
      'Funding opportunity and decision records',
      'IATI-aligned publication packages',
      'Verified impact stories',
    ],
    owners: 'Programmes, learning and evaluation, and grants teams',
    pitch: {
      line: 'See what your portfolio knows, what it repeats, what it changes and where the next grant should go.',
      body: 'DER creates a governed evidence layer across diverse grantees without forcing every partner into one heavy operating system. It connects grant records, outputs and results; synthesises evidence into board and public products; and distinguishes reach from verified use, uptake and follow-through.',
    },
    fit: 'DER Portfolio.',
  },
  {
    slug: 'research',
    label: 'Universities and think tanks',
    metaDescription:
      'DACORIS EvidenceReach moves research beyond the repository into policy, practice and public value, and evidences that movement.',
    hero: {
      eyebrow: 'Universities, research councils and think tanks',
      title: 'Move research beyond the repository into policy, practice and public value - then evidence it.',
      intro:
        'Harvest existing research infrastructure and add a governed knowledge-mobilisation workflow with an impact trail.',
      image: photo('researchers', 2400),
    },
    gap: {
      title: 'A repository proves research exists, not where it travelled.',
      intro: 'Five gaps research institutions describe, and what DER does about each.',
      rows: [
        {
          challenge: 'Research outputs are spread across repositories, centres and researcher profiles',
          cost: 'Institutional knowledge is incomplete and hard to mobilise',
          fill: 'OAI-PMH harvesting, persistent identifiers, taxonomy and linked project, funder and output records',
        },
        {
          challenge: 'Academic formats do not fit policy and public audiences',
          cost: 'High-quality research has low uptake outside the discipline',
          fill: 'Policy briefs, executive summaries, public explainers, media releases and stakeholder packs from approved source text',
        },
        {
          challenge: 'Knowledge-exchange activity is not integrated with the research record',
          cost: 'Engagement is episodic and institutional memory is weak',
          fill: 'Product workflow, audience and channel metadata, stakeholder records and activity history',
        },
        {
          challenge: 'Impact assessment relies too heavily on publications and citations',
          cost: 'Societal and policy contributions remain invisible or anecdotal',
          fill: 'Attention, use, uptake and follow-through model plus verified impact cases and policy links',
        },
        {
          challenge: 'Open science creates opportunity and responsibility',
          cost: 'Openness without rights, sensitivity and context can cause harm',
          fill: 'Rights, licence and sensitivity metadata, access controls and appropriate public and restricted outputs',
        },
      ],
    },
    products: [
      'Policy briefs',
      'Executive summaries',
      'Stakeholder briefing packs',
      'Media releases',
      'Public explainers',
      'Funder impact narratives',
      'Research-to-policy pathways',
      'Open-science communication',
      'Evidence maps',
      'Policy citation and verified-use cases',
    ],
    owners: 'Research office, knowledge exchange and communications',
    pitch: {
      line: 'Your repository proves research exists. DER helps prove where it travelled, who used it and what it changed.',
      body: 'DER harvests existing research infrastructure and adds a governed knowledge-mobilisation workflow. Researchers and communication teams can create audience-specific products without losing the source, funder or authorship trail, while impact teams document policy references, uptake and credible contribution cases beyond citations.',
    },
    fit: 'DER Institutional; DER Portfolio for research councils and multi-centre groups.',
  },
  {
    slug: 'regional',
    label: 'Regional and multilateral bodies',
    metaDescription:
      'DACORIS EvidenceReach provides a federated, multilingual evidence layer for regional and multilateral bodies while preserving national ownership and provenance.',
    hero: {
      eyebrow: 'Regional, continental and multilateral bodies',
      title: 'Create comparable, multilingual and governable cross-country evidence without erasing national ownership.',
      intro:
        'A federated evidence and communication layer where countries retain source authority and regional teams can discover, compare, translate and package evidence.',
      image: photo('globe', 2400),
    },
    gap: {
      title: 'Country evidence is hard to compare and slow to package.',
      intro: 'Five gaps regional bodies describe, and what DER does about each.',
      rows: [
        {
          challenge: 'Country evidence uses different classifications, formats and release cycles',
          cost: 'Regional synthesis is slow and comparability is weak',
          fill: 'Shared metadata core with country mappings, multilingual taxonomies and source-preserving federation',
        },
        {
          challenge: 'Evidence is exchanged through reports and email',
          cost: 'Partners cannot easily discover or reuse prior submissions',
          fill: 'Permissioned regional registry, APIs, repository harvesting and update notifications',
        },
        {
          challenge: 'Regional products require complex review across institutions',
          cost: 'Publication cycles are delayed and accountability is unclear',
          fill: 'Multi-organisation roles, review gates, version history, embargoes and formal approval records',
        },
        {
          challenge: 'SDG, Agenda 2063 and programme reporting overlap',
          cost: 'Parallel reporting increases cost and inconsistency',
          fill: 'Framework mappings, reusable indicator and output relationships and configurable reporting products',
        },
        {
          challenge: 'Impact across countries is reduced to aggregate reach',
          cost: 'The body cannot show adoption, replication or policy convergence',
          fill: 'Cross-country impact cases, significance levels and attention, use, uptake and follow-through views',
        },
      ],
    },
    products: [
      'Regional outlooks',
      'Country profiles',
      'Cross-country evidence maps',
      'SDG and Agenda 2063 evidence packs',
      'Communique support notes',
      'Multilingual explainers',
      'Partner learning briefs',
      'Harmonisation guidance',
      'Replication and uptake cases',
    ],
    owners:
      'Data and statistics, policy and results, knowledge management, communications, ICT and legal teams, with national focal points',
    pitch: {
      line: 'Connect country evidence without taking ownership away from the countries that produced it.',
      body: 'DER provides a federated evidence and communication layer: countries retain source authority while regional teams can discover, compare, translate and package evidence using shared standards. Configurable permissions and approval routes preserve governance; impact cases show where regional evidence is adopted, replicated or implemented.',
    },
    fit: 'DER Federation.',
  },
];

export function getSolution(slug: string) {
  return solutions.find((solution) => solution.slug === slug);
}
