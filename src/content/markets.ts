import type { ImageRef } from './types';
import { photo } from './images';

export const marketsPageHero = {
  eyebrow: 'Markets',
  title: 'Who DER is built for.',
  intro:
    'Evidence-rich institutions that must communicate high volumes of research, statistics and reports to government, donors, media, researchers, private sector and citizens - in a structured and measurable way.',
  image: photo('institutionFacade', 2400) satisfies ImageRef,
} as const;

export const marketsPageTableIntro = {
  eyebrow: 'Who it is for',
  title: 'Six client types, one governed dissemination layer.',
} as const;

export const marketsPageTableColumns = {
  clientType: 'Client type',
  useCase: 'High-value use case',
} as const;

export const marketsPageTable = [
  {
    clientType: 'National statistical offices',
    useCase: 'Public statistics, economic surveys, census outputs, sectoral data and national development evidence.',
  },
  {
    clientType: 'Government ministries & agencies',
    useCase: 'Policy reports, programme data, project results and public accountability products.',
  },
  {
    clientType: 'Donor-funded programmes',
    useCase: 'Visibility, learning, reporting, impact communication and stakeholder accountability.',
  },
  {
    clientType: 'Universities & research institutions',
    useCase: 'Research outputs, policy briefs, institutional repositories and public engagement.',
  },
  {
    clientType: 'Think tanks & policy centres',
    useCase: 'Evidence translation, debate support, stakeholder communication and uptake tracking.',
  },
  {
    clientType: 'Industry & development consortia',
    useCase: 'Sector intelligence, investment evidence, market reports and commercialization pathways.',
  },
] as const;
