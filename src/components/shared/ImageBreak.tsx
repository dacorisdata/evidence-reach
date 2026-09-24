import Image from 'next/image';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { imageBreak as defaultImageBreak } from '@/content/about';
import Reveal from '@/components/shared/Reveal';
import type { ImageRef } from '@/content/types';

type ImageBreakProps = {
  eyebrow?: string;
  line?: string;
  image?: ImageRef;
};

export default function ImageBreak({
  eyebrow = defaultImageBreak.eyebrow,
  line = defaultImageBreak.line,
  image = defaultImageBreak.image,
}: ImageBreakProps = {}) {
  return (
    <Box sx={{ maxWidth: 1240, mx: 'auto', width: '100%', px: { xs: 2.5, md: 4 }, py: { xs: 5, md: 7 } }}>
      <Reveal>
        <Box
          sx={{
            position: 'relative',
            borderRadius: '5px',
            overflow: 'hidden',
            height: { xs: 260, md: 360 },
          }}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 1240px) 100vw, 1240px"
            style={{ objectFit: 'cover' }}
          />
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(100deg, rgba(13,15,34,0.82) 0%, rgba(13,15,34,0.45) 46%, rgba(13,15,34,0.15) 100%)',
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              left: { xs: 20, md: 48 },
              right: 20,
              bottom: { xs: 20, md: 40 },
              maxWidth: 520,
            }}
          >
            <Typography variant="overline" sx={{ color: '#42c686' }}>
              {eyebrow}
            </Typography>
            <Typography sx={{ color: '#ffffff', fontWeight: 700, fontSize: { xs: '1.15rem', md: '1.4rem' }, lineHeight: 1.35, mt: 0.75 }}>
              {line}
            </Typography>
          </Box>
        </Box>
      </Reveal>
    </Box>
  );
}
