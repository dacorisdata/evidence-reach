import type { Metadata } from 'next';
import PageHero from '@/components/shared/PageHero';
import Section from '@/components/shared/Section';
import SectionHeading from '@/components/shared/SectionHeading';
import ImageBreak from '@/components/shared/ImageBreak';
import ClosingCta from '@/components/shared/ClosingCta';
import Reveal from '@/components/shared/Reveal';
import CapabilityGrid from '@/components/platform/CapabilityGrid';
import ModulesExplorer from '@/components/platform/ModulesExplorer';
import ApprovalFlow from '@/components/platform/ApprovalFlow';
import {
  platformHero,
  modulesIntro,
  scienceEngine,
  governance,
  architecture,
  registryFeatures,
  platformClosing,
} from '@/content/platform';

export const metadata: Metadata = {
  title: 'Platform overview',
  description:
    'DACORIS EvidenceReach: one workflow across sixteen modules, from evidence registry and communication production to governed publication and impact analytics.',
};

export default function PlatformPage() {
  return (
    <>
      <PageHero eyebrow={platformHero.eyebrow} title={platformHero.title} intro={platformHero.intro} image={platformHero.image} />

      <Section>
        <Reveal>
          <SectionHeading eyebrow={modulesIntro.eyebrow} title={modulesIntro.title} maxWidth={680} />
        </Reveal>
        <ModulesExplorer />
      </Section>

      <CapabilityGrid
        eyebrow={scienceEngine.eyebrow}
        title={scienceEngine.title}
        intro={scienceEngine.intro}
        cards={scienceEngine.cards}
      />

      <Section>
        <Reveal>
          <SectionHeading eyebrow={governance.eyebrow} title={governance.title} intro={governance.intro} maxWidth={680} />
        </Reveal>
        <ApprovalFlow />
      </Section>

      <ImageBreak eyebrow={architecture.eyebrow} line={architecture.line} image={architecture.image} />

      <CapabilityGrid eyebrow={registryFeatures.eyebrow} title={registryFeatures.title} cards={registryFeatures.cards} />

      <Reveal>
        <ClosingCta
          eyebrow={platformClosing.eyebrow}
          title={platformClosing.title}
          body={platformClosing.body}
          primaryCta={platformClosing.primaryCta}
          secondaryCta={platformClosing.secondaryCta}
        />
      </Reveal>
    </>
  );
}
