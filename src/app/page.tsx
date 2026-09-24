import Hero from '@/components/home/Hero';
import InstitutionStrip from '@/components/home/InstitutionStrip';
import Problem from '@/components/home/Problem';
import PlatformOs from '@/components/home/PlatformOs';
import ImplementationMethod from '@/components/shared/ImplementationMethod';
import ImpactTeaser from '@/components/home/ImpactTeaser';
import Audiences from '@/components/home/Audiences';
import StatsBand from '@/components/shared/StatsBand';
import ClosingCta from '@/components/shared/ClosingCta';
import Section from '@/components/shared/Section';
import { stats, statsCaption } from '@/content/home';

export default function HomePage() {
  return (
    <>
      <Hero />
      <InstitutionStrip />
      <Problem />
      <PlatformOs />
      <ImplementationMethod />
      <ImpactTeaser />
      <Section sx={{ pt: 0 }}>
        <StatsBand stats={stats} caption={statsCaption} />
      </Section>
      <Audiences />
      <ClosingCta />
    </>
  );
}
