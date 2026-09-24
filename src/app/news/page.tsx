import type { Metadata } from 'next';
import PageHero from '@/components/shared/PageHero';
import Section from '@/components/shared/Section';
import NewsListing from '@/components/news/NewsListing';
import { newsHero } from '@/content/news';

export const metadata: Metadata = {
  title: 'News',
  description: 'Product releases, pilots and programme updates from DACORIS EvidenceReach.',
};

export default function NewsPage() {
  return (
    <>
      <PageHero eyebrow={newsHero.eyebrow} title={newsHero.title} intro={newsHero.intro} image={newsHero.image} />
      <Section>
        <NewsListing />
      </Section>
    </>
  );
}
