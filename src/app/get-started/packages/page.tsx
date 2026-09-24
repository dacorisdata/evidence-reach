import type { Metadata } from 'next';
import PageHero from '@/components/shared/PageHero';
import Section from '@/components/shared/Section';
import SectionHeading from '@/components/shared/SectionHeading';
import TierCards from '@/components/shared/TierCards';
import ImageTextSplit from '@/components/shared/ImageTextSplit';
import ClosingCta from '@/components/shared/ClosingCta';
import Reveal from '@/components/shared/Reveal';
import CapabilityGrid from '@/components/platform/CapabilityGrid';
import { packagesHero, packagesIntro, tiers, servicesIntro, pricingNote } from '@/content/getStarted';

export const metadata: Metadata = {
  title: 'Packages',
  description:
    'DACORIS EvidenceReach packages: DER Institutional, DER Portfolio and DER Federation, with professional services for adoption and governance.',
};

export default function PackagesPage() {
  return (
    <>
      <PageHero
        eyebrow={packagesHero.eyebrow}
        title={packagesHero.title}
        intro={packagesHero.intro}
        image={packagesHero.image}
        cta={{ label: 'Talk to us', href: '/contact' }}
      />

      <Section>
        <Reveal>
          <SectionHeading
            eyebrow={packagesIntro.eyebrow}
            title={packagesIntro.title}
            intro={packagesIntro.intro}
            maxWidth={720}
          />
        </Reveal>
        <TierCards tiers={tiers} />
      </Section>

      <CapabilityGrid
        eyebrow={servicesIntro.eyebrow}
        title={servicesIntro.title}
        intro={servicesIntro.intro}
        cards={servicesIntro.cards}
      />

      <ImageTextSplit
        eyebrow={pricingNote.eyebrow}
        title={pricingNote.title}
        body={pricingNote.body}
        image={pricingNote.image}
        imagePosition="right"
      />

      <Reveal>
        <ClosingCta
          eyebrow="Not sure which fits?"
          title="Start with a pilot and choose the package with evidence."
          body="A time-bound, measurable first cycle shows which package fits your governance and scope."
          primaryCta={{ label: 'Start with a pilot', href: '/get-started/pilot' }}
          secondaryCta={{ label: 'Request a demo', href: '/contact' }}
        />
      </Reveal>
    </>
  );
}
