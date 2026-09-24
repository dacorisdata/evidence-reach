import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { brand } from '@/theme/tokens';
import { identity } from '@/content/about';
import Section from '@/components/shared/Section';
import Reveal from '@/components/shared/Reveal';

export default function IdentityIntro() {
  return (
    <Section sx={{ py: { xs: 6, md: 8 } }}>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: { xs: 4, md: 6 }, alignItems: 'center' }}>
        <Reveal sx={{ flex: '1 1 380px', minWidth: 0 }}>
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              aspectRatio: '4 / 3',
              borderRadius: 4,
              overflow: 'hidden',
              border: `1px solid ${brand.line}`,
            }}
          >
            <Image
              src={identity.image.src}
              alt={identity.image.alt}
              fill
              sizes="(max-width: 900px) 100vw, 480px"
              style={{ objectFit: 'cover' }}
            />
          </Box>
        </Reveal>

        <Reveal delay={100} sx={{ flex: '1 1 380px', minWidth: 0 }}>
          <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, mb: 1.75 }}>
            <Box sx={{ width: 22, height: 2, borderRadius: 2, bgcolor: brand.green }} />
            <Typography variant="overline" sx={{ color: brand.greenInk }}>
              {identity.eyebrow}
            </Typography>
          </Box>
          <Typography variant="h2" sx={{ mb: 2 }}>
            {identity.title}
          </Typography>
          <Typography variant="body1">{identity.body}</Typography>
        </Reveal>
      </Box>
    </Section>
  );
}
