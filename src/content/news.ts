import type { ImageRef } from './types';
import { photo } from './images';

export const NEWS_DEFAULT_AUTHOR = 'DACORIS Group';

export type NewsParagraph =
  | string
  | {
      bold: string;
      after: string;
    };

export type NewsArticle = {
  slug: string;
  title: string;
  date: string;
  author: string;
  keywords: readonly string[];
  image: ImageRef;
  summary: string;
  subheading: string;
  metaDescription: string;
  paragraphs: readonly NewsParagraph[];
};

export const newsArticles: readonly NewsArticle[] = [
  {
    slug: 'knbs-style-flagship',
    title: 'EvidenceReach positioned for a KNBS-style flagship',
    date: '2026-07-10',
    author: NEWS_DEFAULT_AUTHOR,
    keywords: ['flagship', 'KNBS', 'public evidence', 'national statistics', 'dissemination'],
    image: photo('statsPublications', 1200),
    summary:
      'The platform addresses a clear institutional challenge — large volumes of public evidence that must reach ministries, donors, media, researchers and citizens in a structured, measurable way.',
    subheading: 'A clear first use case',
    metaDescription:
      'DACORIS EvidenceReach is strategically positioned for a KNBS-style first adoption — high-volume public evidence reaching government, citizens, donors and development partners.',
    paragraphs: [
      'DACORIS EvidenceReach is strategically positioned for a KNBS-style first adoption. An institution with high-volume reports, datasets and sectoral outputs must communicate them to government, the public, donors, private sector, media, researchers and development partners.',
      'Once validated in this environment, the same architecture can be configured for other national agencies, regional bodies, universities and donor-funded programmes — without rebuilding the core system.',
    ],
  },
  {
    slug: 'introducing-dacoris-evidencereach',
    title: 'Introducing DACORIS EvidenceReach',
    date: '2026-07-01',
    author: NEWS_DEFAULT_AUTHOR,
    keywords: ['product launch', 'platform', 'evidence dissemination', 'impact analytics', 'workflow'],
    image: photo('publicRelease', 1200),
    summary:
      'A dissemination operating system that turns institutional evidence into targeted communication, governed dissemination and measurable impact.',
    subheading: 'From publication to public value',
    metaDescription:
      'DACORIS EvidenceReach brings evidence dissemination into one platform — registry, AI-assisted content, approval workflows, publication tracking and impact analytics.',
    paragraphs: [
      'Most institutions produce more evidence than they can communicate effectively. Valuable reports are published, but the next steps are often manual: writing summaries, choosing channels, seeking approval, tracking reach and proving impact.',
      {
        bold: 'DACORIS EvidenceReach',
        after:
          ' brings this entire workflow into one platform — a central registry for reports, datasets and grey literature; AI-assisted summaries, briefs and social content; approval workflows for communication teams, analysts, directorates and leadership; publication tracking across web, media and social; and impact analytics showing attention, use, uptake and follow-through.',
      },
      'Evidence should not only be published. It should reach, influence and be measured.',
    ],
  },
];

export type NewsItem = {
  slug: string;
  title: string;
  date: string;
  author: string;
  keywords: readonly string[];
  image: ImageRef;
  summary: string;
  href: string;
};

export const newsItems: readonly NewsItem[] = newsArticles.map((article) => ({
  slug: article.slug,
  title: article.title,
  date: article.date,
  author: article.author,
  keywords: article.keywords,
  image: article.image,
  summary: article.summary,
  href: `/news/${article.slug}`,
}));

export const newsHero = {
  eyebrow: 'News',
  title: 'Updates from DACORIS EvidenceReach.',
  intro: 'Product releases, pilots and programme news, published as they happen.',
  image: photo('publicRelease', 2400),
} as const;

export const newsEmpty = {
  title: 'No updates published yet.',
  body: 'Product and programme updates will appear here. To hear about releases and pilots, get in touch and we will keep you informed.',
} as const;

export function getNewsArticle(slug: string) {
  return newsArticles.find((article) => article.slug === slug);
}

export function getNewsAuthors() {
  return [...new Set(newsArticles.map((article) => article.author))].sort();
}

export function getNewsDates() {
  return [...new Set(newsArticles.map((article) => article.date))].sort().reverse();
}

export function getNewsKeywords() {
  return [...new Set(newsArticles.flatMap((article) => article.keywords))].sort();
}

export function formatNewsDate(isoDate: string) {
  const [year, month, day] = isoDate.split('-').map(Number);
  return new Date(year, month - 1, day).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}
