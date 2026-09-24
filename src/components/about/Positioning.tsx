import Box from '@mui/material/Box';
import { brand } from '@/theme/tokens';
import { positioning } from '@/content/about';
import Section from '@/components/shared/Section';
import SectionHeading from '@/components/shared/SectionHeading';
import InfoCard from '@/components/shared/InfoCard';
import Reveal from '@/components/shared/Reveal';

export default function Positioning() {
  return (
    <Section bgcolor={brand.surface}>
      <Reveal>
        <SectionHeading eyebrow={positioning.eyebrow} title={positioning.title} intro={positioning.intro} maxWidth={720} />
      </Reveal>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2.5 }}>
        {positioning.cards.map((card, index) => (
          <Reveal key={card.title} delay={index * 60} sx={{ flex: '1 1 280px', minWidth: 0 }}>
            <InfoCard title={card.title} body={card.body} accentName={card.accent} index={index} />
          </Reveal>
        ))}
      </Box>
    </Section>
  );
}
