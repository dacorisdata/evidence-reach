import type { Metadata } from 'next';
import { brand } from '@/theme/tokens';
import PageHero from '@/components/shared/PageHero';
import Section from '@/components/shared/Section';
import SectionHeading from '@/components/shared/SectionHeading';
import StepsList from '@/components/shared/StepsList';
import ChipList from '@/components/shared/ChipList';
import ImageTextSplit from '@/components/shared/ImageTextSplit';
import ClosingCta from '@/components/shared/ClosingCta';
import Reveal from '@/components/shared/Reveal';
import CapabilityGrid from '@/components/platform/CapabilityGrid';
import {
  pilotHero,
  pilotRolesIntro,
  pilotStepsIntro,
  pilotSteps,
  pilotMetrics,
  pilotSplit,
} from '@/content/getStarted';

export const metadata: Metadata = {
  title: 'Start with a pilot',
  description:
    'A time-bound, measurable DACORIS EvidenceReach pilot with a named sponsor, data owner, approver and agreed success metrics, taken end to end on your own evidence.',
};

export default function PilotPage() {
  return (
    <>
      <PageHero
        eyebrow={pilotHero.eyebrow}
        title={pilotHero.title}
        intro={pilotHero.intro}
        image={pilotHero.image}
        cta={{ label: 'Scope a pilot', href: '/contact' }}
      />

      <CapabilityGrid
        eyebrow={pilotRolesIntro.eyebrow}
        title={pilotRolesIntro.title}
        cards={pilotRolesIntro.cards}
        bgcolor="#ffffff"
      />

      <Section bgcolor={brand.surface}>
        <Reveal>
          <SectionHeading
            eyebrow={pilotStepsIntro.eyebrow}
            title={pilotStepsIntro.title}
            intro={pilotStepsIntro.intro}
            maxWidth={720}
          />
        </Reveal>
        <StepsList steps={pilotSteps} />
      </Section>

      <Section>
        <Reveal>
          <SectionHeading
            eyebrow={pilotMetrics.eyebrow}
            title={pilotMetrics.title}
            intro={pilotMetrics.intro}
            maxWidth={680}
          />
        </Reveal>
        <ChipList items={pilotMetrics.items} />
      </Section>

      <ImageTextSplit
        eyebrow={pilotSplit.eyebrow}
        title={pilotSplit.title}
        body={pilotSplit.body}
        image={pilotSplit.image}
        imagePosition="left"
        bgcolor={brand.surface}
      />

      <Reveal>
        <ClosingCta
          eyebrow="Next step"
          title="Tell us the decision that hurts most."
          body="We will scope a pilot around it, with named owners and success metrics."
          primaryCta={{ label: 'Scope a pilot', href: '/contact' }}
          secondaryCta={{ label: 'See packages', href: '/get-started/packages' }}
        />
      </Reveal>
    </>
  );
}
