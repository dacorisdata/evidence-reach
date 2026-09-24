import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from 'next/link';
import { brand } from '@/theme/tokens';
import { platformOs } from '@/content/home';
import Section from '@/components/shared/Section';
import SectionHeading from '@/components/shared/SectionHeading';
import InfoCard from '@/components/shared/InfoCard';

export default function PlatformOs() {
  return (
    <Section bgcolor={brand.surface}>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          gap: 3,
        }}
      >
        <SectionHeading eyebrow={platformOs.eyebrow} title={platformOs.title} intro={platformOs.intro} maxWidth={680} />
        <Button component={Link} href={platformOs.href} variant="outlined" color="primary" sx={{ mb: { xs: 0, md: 6 } }}>
          See the platform
        </Button>
      </Box>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2.5 }}>
        {platformOs.cards.map((card, index) => (
          <InfoCard key={card.title} title={card.title} body={card.body} accentName={card.accent} index={index} />
        ))}
      </Box>
    </Section>
  );
}
