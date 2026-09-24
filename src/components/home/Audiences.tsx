import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from 'next/link';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import { brand } from '@/theme/tokens';
import { audiencesTeaser } from '@/content/home';
import Section from '@/components/shared/Section';
import SectionHeading from '@/components/shared/SectionHeading';

export default function Audiences() {
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
        <SectionHeading eyebrow={audiencesTeaser.eyebrow} title={audiencesTeaser.title} intro={audiencesTeaser.intro} maxWidth={680} />
        <Button component={Link} href={audiencesTeaser.href} variant="outlined" color="primary" sx={{ mb: { xs: 0, md: 6 } }}>
          {audiencesTeaser.cta}
        </Button>
      </Box>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2.5 }}>
        {audiencesTeaser.items.map((item) => (
          <Box
            key={item.title}
            component={Link}
            href={item.href}
            sx={{
              flex: '1 1 260px',
              minWidth: 0,
              display: 'block',
              textDecoration: 'none',
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
        ))}
      </Box>
    </Section>
  );
}
