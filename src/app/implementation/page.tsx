import type { Metadata } from 'next';
import { brand } from '@/theme/tokens';
import PageHero from '@/components/shared/PageHero';
import Section from '@/components/shared/Section';
import SectionHeading from '@/components/shared/SectionHeading';
import ImplementationMethod from '@/components/shared/ImplementationMethod';
import ChipList from '@/components/shared/ChipList';
import ImageTextSplit from '@/components/shared/ImageTextSplit';
import ClosingCta from '@/components/shared/ClosingCta';
import Reveal from '@/components/shared/Reveal';
import {
  implementationHero,
  implementationWhoIntro,
  implementationServicesLink,
} from '@/content/getStarted';

export const metadata: Metadata = {
  title: 'Implementation',
  description:
    'How DACORIS EvidenceReach is implemented: discover, configure, connect, launch and scale, with professional services for adoption and governance.',
};

export default function ImplementationPage() {
  return (
    <>
      <PageHero
        eyebrow={implementationHero.eyebrow}
        title={implementationHero.title}
        intro={implementationHero.intro}
        image={implementationHero.image}
      />

      <ImplementationMethod />

      <Section bgcolor={brand.surface}>
        <Reveal>
          <SectionHeading
            eyebrow={implementationWhoIntro.eyebrow}
            title={implementationWhoIntro.title}
            intro={implementationWhoIntro.intro}
            maxWidth={720}
          />
        </Reveal>
        <ChipList items={implementationWhoIntro.items} />
      </Section>

      <ImageTextSplit
        eyebrow={implementationServicesLink.eyebrow}
        title={implementationServicesLink.title}
        body={implementationServicesLink.body}
        image={implementationServicesLink.image}
        imagePosition="right"
      />

      <Reveal>
        <ClosingCta
          eyebrow="Next step"
          title="Plan your first evidence cycle."
          body="We will scope discovery and configuration around your priority use case."
          primaryCta={{ label: 'Request a demo', href: '/contact' }}
          secondaryCta={{ label: 'See packages', href: '/get-started/packages' }}
        />
      </Reveal>
    </>
  );
}
