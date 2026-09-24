import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import Image from 'next/image';
import { brand } from '@/theme/tokens';
import { impactTeaser } from '@/content/home';
import Section from '@/components/shared/Section';
import InfoCard from '@/components/shared/InfoCard';

export default function ImpactTeaser() {
  return (
    <Section>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: { xs: 5, md: 7 }, alignItems: 'center' }}>
        <Box sx={{ flex: '1 1 460px', minWidth: 0 }}>
          <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, mb: 1.75 }}>
            <Box sx={{ width: 22, height: 2, borderRadius: 2, bgcolor: brand.green }} />
            <Typography variant="overline" sx={{ color: brand.greenInk }}>{impactTeaser.eyebrow}</Typography>
          </Box>
          <Typography variant="h2" sx={{ mb: 2 }}>{impactTeaser.title}</Typography>
          <Typography variant="subtitle1" sx={{ mb: 3.5 }}>{impactTeaser.intro}</Typography>

          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 4 }}>
            {impactTeaser.cards.map((card) => (
              <Box key={card.title} sx={{ flex: '1 1 220px', minWidth: 0 }}>
                <InfoCard title={card.title} body={card.body} accentName={card.accent} />
              </Box>
            ))}
          </Box>

          <Button component={Link} href={impactTeaser.href} variant="outlined" color="primary">
            {impactTeaser.cta}
          </Button>
        </Box>

        <Box sx={{ flex: '1 1 380px', minWidth: 0 }}>
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              aspectRatio: '4 / 3',
              borderRadius: '5px',
              overflow: 'hidden',
              border: `1px solid ${brand.line}`,
            }}
          >
            <Image src={impactTeaser.image.src} alt={impactTeaser.image.alt} fill sizes="(max-width: 900px) 100vw, 560px" style={{ objectFit: 'cover' }} />
          </Box>
        </Box>
      </Box>
    </Section>
  );
}
