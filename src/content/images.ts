import type { ImageRef } from './types';

// Every photo here is already used elsewhere on the site, so alt text stays accurate and no new
// hot-linked image IDs are introduced. Swap for licensed photography when ready.
const base = 'https://images.unsplash.com';

// Attribution (Unsplash License does not require credit, but it is given here as good practice
// for the photos swapped in during the imagery audit):
//   statsPublications, fieldTeam, commsTeam, colleaguesReport, printedReport, briefingRoom -
//     Photo by Christina @ wocintechchat.com on Unsplash
//   researchers, programmeReview, aboutHero (see about.ts) - Photo by Ninthgrid on Unsplash
//   whiteboard, publicRelease, teamLaptops - Photo by UK Black Tech on Unsplash
//   dashboardLaptop - Photo by Vitaly Gariev on Unsplash
//   teamRegistering - Photo by Gylain Omer on Unsplash
const catalogue = {
  govBuilding: ['photo-1529107386315-e1a2ed48a620', 'Government building exterior'],
  statsPublications: ['photo-1758874384555-37d50c0ee81a', 'Statistical publications and data tables'],
  fieldTeam: ['photo-1573497701240-345a300b8d36', 'Field programme team at work'],
  researchers: ['photo-1739298061707-cefee19941b7', 'Researchers collaborating around a table'],
  briefingRoom: ['photo-1573496130407-57329f01f769', 'National institution briefing room'],
  globe: [
    'photo-1451187580459-43490279c0fa',
    'Illuminated city networks across the globe at night, representing reach and connection',
  ],
  institutionFacade: ['photo-1493397212122-2b85dda8106b', 'Modern institutional building facade against the sky'],
  circuitBoard: ['photo-1518770660439-4636190af475', 'Close-up of a circuit board representing system integrations'],
  workflowTeam: ['photo-1521791055366-0d553872125f', 'Team reviewing a workflow together around a table'],
  whiteboard: ['photo-1653565685060-e15e492a7fda', 'Team working through a process on a whiteboard'],
  dashboardLaptop: ['photo-1758876201660-103984519266', 'Analytics dashboard displayed on a laptop screen'],
  analyticsCharts: ['photo-1553877522-43269d4ea984', 'Close-up of analytics charts on a screen'],
  teamRegistering: ['photo-1787532378729-fe4241197405', 'Team registering institutional documents'],
  commsTeam: ['photo-1573164574511-73c773193279', 'Communications team drafting a policy brief'],
  leadersApproving: ['photo-1521791136064-7986c2920216', 'Institutional leaders approving a document'],
  publicRelease: ['photo-1653566031535-bcf33e1c2893', 'Public release of institutional information'],
  programmeReview: ['photo-1739298061740-5ed03045b280', 'Working session reviewing programme results'],
  reportsShelves: ['photo-1568667256549-094345857637', 'Shelves of bound institutional reports'],
  colleaguesReport: ['photo-1573167627769-e201a7ddf409', 'Colleagues reviewing a report together around a laptop'],
  officeBuilding: ['photo-1486406146926-c627a92ad1ab', 'Modern office building exterior'],
  officeWorkspace: ['photo-1497366754035-f200968a6e72', 'Modern office workspace with natural light'],
  teamLaptops: ['photo-1653566031587-74f7d86a2e71', 'Team working together around a table with laptops and notes'],
  printedReport: ['photo-1573164574397-dd250bc8a598', 'Colleagues reviewing a printed report together at a desk'],
} as const;

export type PhotoKey = keyof typeof catalogue;

export function photo(key: PhotoKey, width = 1200): ImageRef {
  const [id, alt] = catalogue[key];
  return { src: `${base}/${id}?auto=format&fit=crop&w=${width}&q=80`, alt };
}
