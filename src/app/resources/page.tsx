import type { Metadata } from 'next';
import PageHero from '@/components/shared/PageHero';
import LinkCards from '@/components/shared/LinkCards';
import ClosingCta from '@/components/shared/ClosingCta';
import Reveal from '@/components/shared/Reveal';
import CapabilityGrid from '@/components/platform/CapabilityGrid';
import {
  resourcesHero,
  resourcesLinksIntro,
  resourcesLinks,
  evaluatorsIntro,
} from '@/content/resources';

export const metadata: Metadata = {
  title: 'Resources',
  description:
    'Everything you need to evaluate DACORIS EvidenceReach: how it fits your stack, trust and governance, integrations, packages, pilots and implementation.',
};

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow={resourcesHero.eyebrow}
        title={resourcesHero.title}
        intro={resourcesHero.intro}
        image={resourcesHero.image}
      />

      <LinkCards
        eyebrow={resourcesLinksIntro.eyebrow}
        title={resourcesLinksIntro.title}
        intro={resourcesLinksIntro.intro}
        items={resourcesLinks}
        bgcolor="#ffffff"
      />

      <CapabilityGrid
        eyebrow={evaluatorsIntro.eyebrow}
        title={evaluatorsIntro.title}
        intro={evaluatorsIntro.intro}
        cards={evaluatorsIntro.cards}
      />

      <Reveal>
        <ClosingCta
          eyebrow="Talk to us"
          title="Want a walkthrough for your evaluation team?"
          body="We will tailor a demonstration to the people in your decision group."
          primaryCta={{ label: 'Request a demo', href: '/contact' }}
          secondaryCta={null}
        />
      </Reveal>
    </>
  );
}
