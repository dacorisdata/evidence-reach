import type { Metadata } from 'next';
import PageHero from '@/components/shared/PageHero';
import Section from '@/components/shared/Section';
import SectionHeading from '@/components/shared/SectionHeading';
import ImageTextSplit from '@/components/shared/ImageTextSplit';
import ClosingCta from '@/components/shared/ClosingCta';
import Reveal from '@/components/shared/Reveal';
import MarketsTable from '@/components/platform/MarketsTable';
import SolutionsLinks from '@/components/platform/SolutionsLinks';
import { marketsFlagship, marketsClosing } from '@/content/platform';
import {
  marketsPageHero,
  marketsPageTableIntro,
  marketsPageTableColumns,
  marketsPageTable,
} from '@/content/markets';

export const metadata: Metadata = {
  title: 'Markets',
  description:
    'DACORIS EvidenceReach is built for national statistical offices, government ministries, donor-funded programmes, universities, think tanks and industry consortia.',
};

export default function MarketsPage() {
  return (
    <>
      <PageHero
        eyebrow={marketsPageHero.eyebrow}
        title={marketsPageHero.title}
        intro={marketsPageHero.intro}
        image={marketsPageHero.image}
      />

      <Section>
        <Reveal>
          <SectionHeading
            eyebrow={marketsPageTableIntro.eyebrow}
            title={marketsPageTableIntro.title}
            maxWidth={680}
          />
        </Reveal>
        <MarketsTable columns={marketsPageTableColumns} rows={marketsPageTable} />
      </Section>

      <ImageTextSplit
        eyebrow={marketsFlagship.eyebrow}
        title={marketsFlagship.title}
        body={marketsFlagship.body}
        image={marketsFlagship.image}
        imagePosition="right"
      />

      <SolutionsLinks />

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
