import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { brand } from '@/theme/tokens';
import { mission } from '@/content/about';
import Section from '@/components/shared/Section';

export default function Mission() {
  return (
    <Section>
      <Box sx={{ display: 'flex', flexWrap: 'wrap-reverse', gap: { xs: 5, md: 7 }, alignItems: 'center' }}>
        <Box sx={{ flex: '1 1 460px', minWidth: 0 }}>
          <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, mb: 1.75 }}>
            <Box sx={{ width: 22, height: 2, borderRadius: 2, bgcolor: brand.green }} />
            <Typography variant="overline" sx={{ color: brand.greenInk }}>
              {mission.eyebrow}
            </Typography>
          </Box>
          <Typography variant="h2" sx={{ mb: 2.5 }}>
            {mission.title}
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {mission.body.map((paragraph) => (
              <Typography key={paragraph} variant="body1">
                {paragraph}
              </Typography>
            ))}
          </Box>
        </Box>

        <Box sx={{ flex: '1 1 420px', minWidth: 0 }}>
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
              src={mission.image.src}
              alt={mission.image.alt}
              fill
              sizes="(max-width: 900px) 100vw, 560px"
              style={{ objectFit: 'cover' }}
            />
          </Box>
        </Box>
      </Box>
    </Section>
  );
}
