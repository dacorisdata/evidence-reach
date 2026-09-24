import type { Metadata } from 'next';
import PageHero from '@/components/shared/PageHero';
import Section from '@/components/shared/Section';
import SectionHeading from '@/components/shared/SectionHeading';
import ImageTextSplit from '@/components/shared/ImageTextSplit';
import ClosingCta from '@/components/shared/ClosingCta';
import Reveal from '@/components/shared/Reveal';
import MarketsTable from '@/components/platform/MarketsTable';
import SolutionsLinks from '@/components/platform/SolutionsLinks';
import CapabilityGrid from '@/components/platform/CapabilityGrid';
import {
  marketsHero,
  marketsTableIntro,
  marketsTableColumns,
  marketsTable,
  marketsFlagship,
  marketsClosing,
  ecosystemIntro,
  ecosystem,
} from '@/content/platform';

export const metadata: Metadata = {
  title: 'Solutions',
  description:
    'DACORIS EvidenceReach serves government ministries, national statistics offices, NGOs and implementers, funders, universities and think tanks, and regional and multilateral bodies.',
};

export default function SolutionsPage() {
  return (
    <>
      <PageHero eyebrow={marketsHero.eyebrow} title={marketsHero.title} intro={marketsHero.intro} image={marketsHero.image} />

      <Section>
        <Reveal>
          <SectionHeading eyebrow={marketsTableIntro.eyebrow} title={marketsTableIntro.title} maxWidth={680} />
        </Reveal>
        <MarketsTable columns={marketsTableColumns} rows={marketsTable} />
      </Section>

      <ImageTextSplit
        eyebrow={marketsFlagship.eyebrow}
        title={marketsFlagship.title}
        body={marketsFlagship.body}
        image={marketsFlagship.image}
        imagePosition="right"
      />

      <SolutionsLinks />

      <CapabilityGrid
        eyebrow={ecosystemIntro.eyebrow}
        title={ecosystemIntro.title}
        intro={ecosystemIntro.intro}
        cards={ecosystem}
        bgcolor="#ffffff"
      />

      <Reveal>
        <ClosingCta
          eyebrow={marketsClosing.eyebrow}
          title={marketsClosing.title}
          body={marketsClosing.body}
          primaryCta={{ label: 'Request a demo', href: '/contact' }}
          secondaryCta={marketsClosing.secondaryCta}
        />
      </Reveal>
    </>
  );
}
