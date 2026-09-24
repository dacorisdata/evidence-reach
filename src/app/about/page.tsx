import type { Metadata } from 'next';
import PageHero from '@/components/shared/PageHero';
import IdentityIntro from '@/components/about/IdentityIntro';
import Positioning from '@/components/about/Positioning';
import ImageBreak from '@/components/shared/ImageBreak';
import WhyStandOut from '@/components/about/WhyStandOut';
import ClosingCta from '@/components/shared/ClosingCta';
import Reveal from '@/components/shared/Reveal';
import { aboutHero, aboutClosingCta } from '@/content/about';

export const metadata: Metadata = {
  title: 'About',
  description:
    'DACORIS EvidenceReach (DER) is a specialized company and software platform under DACORIS Group, built to help institutions turn research, statistics, reports and datasets into governed dissemination and measurable impact.',
};

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow={aboutHero.eyebrow} title={aboutHero.title} intro={aboutHero.intro} image={aboutHero.image} />
      <IdentityIntro />
      <Positioning />
      <ImageBreak />
      <WhyStandOut />
      <Reveal>
        <ClosingCta
          eyebrow={aboutClosingCta.eyebrow}
          title={aboutClosingCta.title}
          body={aboutClosingCta.body}
          primaryCta={aboutClosingCta.primaryCta}
          secondaryCta={null}
        />
      </Reveal>
    </>
  );
}
