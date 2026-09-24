import Box from '@mui/material/Box';
import { whyStandOut } from '@/content/about';
import Section from '@/components/shared/Section';
import SectionHeading from '@/components/shared/SectionHeading';
import DifferentiatorCard from './DifferentiatorCard';
import Reveal from '@/components/shared/Reveal';

export default function WhyStandOut() {
  return (
    <Section>
      <Reveal>
        <SectionHeading eyebrow={whyStandOut.eyebrow} title={whyStandOut.title} maxWidth={680} />
      </Reveal>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2.5 }}>
        {whyStandOut.cards.map((card, index) => (
          <Reveal key={card.title} delay={index * 60} sx={{ flex: '1 1 280px', minWidth: 0 }}>
            <DifferentiatorCard title={card.title} body={card.body} />
          </Reveal>
        ))}
      </Box>
    </Section>
  );
}
