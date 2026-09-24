import type { Metadata } from 'next';
import PageHero from '@/components/shared/PageHero';
import Section from '@/components/shared/Section';
import SectionHeading from '@/components/shared/SectionHeading';
import DataTable from '@/components/shared/DataTable';
import PitchBand from '@/components/shared/PitchBand';
import ImageTextSplit from '@/components/shared/ImageTextSplit';
import ClosingCta from '@/components/shared/ClosingCta';
import Reveal from '@/components/shared/Reveal';
import {
  fitHero,
  fitPrinciple,
  fitTableIntro,
  fitTableColumns,
  fitRows,
  fitCategory,
} from '@/content/platformPages';

export const metadata: Metadata = {
  title: 'How DER fits',
  description:
    'DACORIS EvidenceReach is the utilisation layer above open-data portals, M&E systems, repositories, evidence tools, CMS and BI. It orchestrates them rather than replacing them.',
};

export default function HowDerFitsPage() {
  return (
    <>
      <PageHero eyebrow={fitHero.eyebrow} title={fitHero.title} intro={fitHero.intro} image={fitHero.image} />

      <PitchBand eyebrow={fitPrinciple.eyebrow} line={fitPrinciple.line} body={fitPrinciple.body} />

      <Section>
        <Reveal>
          <SectionHeading
            eyebrow={fitTableIntro.eyebrow}
            title={fitTableIntro.title}
            intro={fitTableIntro.intro}
            maxWidth={720}
          />
        </Reveal>
        <DataTable
          columns={[
            { key: 'category', label: fitTableColumns.category, flex: '0.9 1 0' },
            { key: 'solves', label: fitTableColumns.solves },
            { key: 'gap', label: fitTableColumns.gap },
            { key: 'role', label: fitTableColumns.role },
          ]}
          rows={fitRows.map((row) => ({ ...row }))}
        />
      </Section>

      <ImageTextSplit
        eyebrow={fitCategory.eyebrow}
        title={fitCategory.title}
        body={fitCategory.body}
        image={fitCategory.image}
        imagePosition="right"
      />

      <Reveal>
        <ClosingCta
          eyebrow="Next step"
          title="See how DER would sit above your systems."
          body="Tell us which repositories, portals and tools you run today and we will show the connection points."
          primaryCta={{ label: 'Request a demo', href: '/contact' }}
          secondaryCta={{ label: 'Integrations and standards', href: '/platform/integrations' }}
        />
      </Reveal>
    </>
  );
}
