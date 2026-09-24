import type { Metadata } from 'next';
import PageHero from '@/components/shared/PageHero';
import ValuesStrip from '@/components/team/ValuesStrip';
import LeadershipGrid from '@/components/team/LeadershipGrid';
import AdvisoryStrip from '@/components/team/AdvisoryStrip';
import JoinUs from '@/components/team/JoinUs';
import { teamHero } from '@/content/team';

export const metadata: Metadata = {
  title: 'Team',
  description:
    'The people behind DACORIS EvidenceReach - leadership, engineering and an independent advisory circle working from Nairobi.',
};

export default function TeamPage() {
  return (
    <>
      <PageHero eyebrow={teamHero.eyebrow} title={teamHero.title} intro={teamHero.intro} image={teamHero.image} />
      <ValuesStrip />
      <LeadershipGrid />
      <AdvisoryStrip />
      <JoinUs />
    </>
  );
}
