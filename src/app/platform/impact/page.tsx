import type { Metadata } from 'next';
import PageHero from '@/components/shared/PageHero';
import ImageTextSplit from '@/components/shared/ImageTextSplit';
import ClosingCta from '@/components/shared/ClosingCta';
import Reveal from '@/components/shared/Reveal';
import CapabilityGrid from '@/components/platform/CapabilityGrid';
import Section from '@/components/shared/Section';
import StatsBand from '@/components/shared/StatsBand';
import SectionHeading from '@/components/shared/SectionHeading';
import DataTable from '@/components/shared/DataTable';
import { stats, statsCaption } from '@/content/home';
import { valueLadderIntro, valueLadderColumns, valueLadderRows } from '@/content/platformPages';
import { impactHero, impactDimensionsIntro, impactDimensions, impactCases, impactClosing } from '@/content/platform';

export const metadata: Metadata = {
  title: 'Impact intelligence',
  description:
    'DER tracks what happens after publication - an altmetrics-style evidence-to-impact layer measuring attention, use, uptake and follow-through.',
};

export default function ImpactPage() {
  return (
    <>
      <PageHero eyebrow={impactHero.eyebrow} title={impactHero.title} intro={impactHero.intro} image={impactHero.image} />

      <Section>
        <Reveal>
          <StatsBand stats={stats} caption={statsCaption} />
        </Reveal>
      </Section>

      <CapabilityGrid
        eyebrow={impactDimensionsIntro.eyebrow}
        title={impactDimensionsIntro.title}
        cards={impactDimensions}
      />

      <Section>
        <Reveal>
          <SectionHeading
            eyebrow={valueLadderIntro.eyebrow}
            title={valueLadderIntro.title}
            intro={valueLadderIntro.intro}
            maxWidth={760}
          />
        </Reveal>
        <DataTable
          columns={[
            { key: 'layer', label: valueLadderColumns.layer, flex: '0.7 1 0' },
            { key: 'indicators', label: valueLadderColumns.indicators, flex: '1.4 1 0' },
            { key: 'evidence', label: valueLadderColumns.evidence },
          ]}
          rows={valueLadderRows.map((row) => ({ ...row }))}
        />
      </Section>

      <ImageTextSplit
        eyebrow={impactCases.eyebrow}
        title={impactCases.title}
        body={impactCases.body}
        image={impactCases.image}
      />

      <Reveal>
        <ClosingCta
          eyebrow={impactClosing.eyebrow}
          title={impactClosing.title}
          body={impactClosing.body}
          primaryCta={impactClosing.primaryCta}
          secondaryCta={impactClosing.secondaryCta}
        />
      </Reveal>
    </>
  );
}
