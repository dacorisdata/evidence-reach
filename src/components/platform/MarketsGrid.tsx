import Box from '@mui/material/Box';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import { brand } from '@/theme/tokens';
import { audiencesTeaser } from '@/content/home';
import Section from '@/components/shared/Section';
import SectionHeading from '@/components/shared/SectionHeading';
import Reveal from '@/components/shared/Reveal';

// Not currently used on the live Markets page (replaced by MarketsTable), kept so
// it still type-checks in case a card-grid presentation is wanted again later.
const marketsGridIntro = {
  eyebrow: 'Who it is for',
  title: 'Four audiences, one governed dissemination layer.',
};

export default function MarketsGrid() {
  return (
    <Section>
      <Reveal>
        <SectionHeading eyebrow={marketsGridIntro.eyebrow} title={marketsGridIntro.title} maxWidth={680} />
      </Reveal>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2.5 }}>
        {audiencesTeaser.items.map((item, index) => (
          <Reveal key={item.title} delay={index * 70} sx={{ flex: '1 1 260px', minWidth: 0 }}>
            <Box
              sx={{
                borderRadius: '5px',
                overflow: 'hidden',
                border: `1px solid ${brand.line}`,
                backgroundColor: '#ffffff',
                transition: 'transform 180ms ease, box-shadow 180ms ease',
                '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 18px 36px rgba(13,15,34,0.10)' },
              }}
            >
              <Box sx={{ position: 'relative', width: '100%', aspectRatio: '16 / 10' }}>
                <Image src={item.image.src} alt={item.image.alt} fill sizes="(max-width: 900px) 100vw, 300px" style={{ objectFit: 'cover' }} />
              </Box>
              <Box sx={{ p: 2.5 }}>
                <Typography sx={{ fontWeight: 700, fontSize: '1rem', color: brand.ink, mb: 0.75 }}>
                  {item.title}
                </Typography>
                <Typography variant="body2">{item.body}</Typography>
              </Box>
            </Box>
          </Reveal>
        ))}
      </Box>
    </Section>
  );
}
