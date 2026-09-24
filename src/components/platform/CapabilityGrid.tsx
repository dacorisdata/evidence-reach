import Box from '@mui/material/Box';
import { brand } from '@/theme/tokens';
import Section from '@/components/shared/Section';
import SectionHeading from '@/components/shared/SectionHeading';
import InfoCard from '@/components/shared/InfoCard';
import Reveal from '@/components/shared/Reveal';
import type { Card } from '@/content/types';

type CapabilityGridProps = {
  eyebrow: string;
  title: string;
  intro?: string;
  cards: Card[];
  bgcolor?: string;
};

export default function CapabilityGrid({ eyebrow, title, intro, cards, bgcolor }: CapabilityGridProps) {
  return (
    <Section bgcolor={bgcolor ?? brand.surface}>
      <Reveal>
        <SectionHeading eyebrow={eyebrow} title={title} intro={intro} maxWidth={680} />
      </Reveal>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2.5 }}>
        {cards.map((card, index) => (
          <Reveal key={card.title} delay={index * 60} sx={{ flex: '1 1 280px', minWidth: 0 }}>
            <InfoCard title={card.title} subtitle={card.subtitle} body={card.body} accentName={card.accent} index={index} />
          </Reveal>
        ))}
      </Box>
    </Section>
  );
}
