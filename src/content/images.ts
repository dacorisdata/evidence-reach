import type { ImageRef } from './types';

// Every photo here is already used elsewhere on the site, so alt text stays accurate and no new
// hot-linked image IDs are introduced. Swap for licensed photography when ready.
const base = 'https://images.unsplash.com';

const catalogue = {
  govBuilding: ['photo-1529107386315-e1a2ed48a620', 'Government building exterior'],
  statsPublications: ['photo-1450101499163-c8848c66ca85', 'Statistical publications and data tables'],
  fieldTeam: ['photo-1532629345422-7515f3d16bb6', 'Field programme team at work'],
  researchers: ['photo-1523240795612-9a054b0db644', 'Researchers collaborating around a table'],
  briefingRoom: ['photo-1577495508048-b635879837f1', 'National institution briefing room'],
  globe: [
    'photo-1451187580459-43490279c0fa',
    'Illuminated city networks across the globe at night, representing reach and connection',
  ],
  institutionFacade: ['photo-1493397212122-2b85dda8106b', 'Modern institutional building facade against the sky'],
  circuitBoard: ['photo-1518770660439-4636190af475', 'Close-up of a circuit board representing system integrations'],
  workflowTeam: ['photo-1521791055366-0d553872125f', 'Team reviewing a workflow together around a table'],
  whiteboard: ['photo-1556761175-5973dc0f32e7', 'Team working through a process on a whiteboard'],
  dashboardLaptop: ['photo-1551434678-e076c223a692', 'Analytics dashboard displayed on a laptop screen'],
  analyticsCharts: ['photo-1553877522-43269d4ea984', 'Close-up of analytics charts on a screen'],
  teamRegistering: ['photo-1454165804606-c3d57bc86b40', 'Team registering institutional documents'],
  commsTeam: ['photo-1522202176988-66273c2fd55f', 'Communications team drafting a policy brief'],
  leadersApproving: ['photo-1521791136064-7986c2920216', 'Institutional leaders approving a document'],
  publicRelease: ['photo-1591115765373-5207764f72e7', 'Public release of institutional information'],
  programmeReview: ['photo-1600880292203-757bb62b4baf', 'Working session reviewing programme results'],
  reportsShelves: ['photo-1568667256549-094345857637', 'Shelves of bound institutional reports'],
  colleaguesReport: ['photo-1543269865-cbf427effbad', 'Colleagues reviewing a report together around a laptop'],
  officeBuilding: ['photo-1486406146926-c627a92ad1ab', 'Modern office building exterior'],
  officeWorkspace: ['photo-1497366754035-f200968a6e72', 'Modern office workspace with natural light'],
  teamLaptops: ['photo-1522071820081-009f0129c71c', 'Team working together around a table with laptops and notes'],
  printedReport: ['photo-1552664730-d307ca884978', 'Colleagues reviewing a printed report together at a desk'],
} as const;

export type PhotoKey = keyof typeof catalogue;

export function photo(key: PhotoKey, width = 1200): ImageRef {
  const [id, alt] = catalogue[key];
  return { src: `${base}/${id}?auto=format&fit=crop&w=${width}&q=80`, alt };
}
