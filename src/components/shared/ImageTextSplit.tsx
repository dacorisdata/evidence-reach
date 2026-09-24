import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { brand } from '@/theme/tokens';
import Section from './Section';
import Reveal from './Reveal';
import type { ImageRef } from '@/content/types';

type ImageTextSplitProps = {
  eyebrow: string;
  title: string;
  body: string;
  image: ImageRef;
  imagePosition?: 'left' | 'right';
  bgcolor?: string;
};

export default function ImageTextSplit({
  eyebrow,
  title,
  body,
  image,
  imagePosition = 'left',
  bgcolor,
}: ImageTextSplitProps) {
  const imageBlock = (
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
        <Image src={image.src} alt={image.alt} fill sizes="(max-width: 900px) 100vw, 480px" style={{ objectFit: 'cover' }} />
      </Box>
    </Reveal>
  );

  const textBlock = (
    <Reveal delay={100} sx={{ flex: '1 1 380px', minWidth: 0 }}>
      <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, mb: 1.75 }}>
        <Box sx={{ width: 22, height: 2, borderRadius: 2, bgcolor: brand.green }} />
        <Typography variant="overline" sx={{ color: brand.greenInk }}>
          {eyebrow}
        </Typography>
      </Box>
      <Typography variant="h2" sx={{ mb: 2 }}>
        {title}
      </Typography>
      <Typography sx={{ fontSize: '1.05rem', lineHeight: 1.7, color: brand.inkSoft }}>{body}</Typography>
    </Reveal>
  );

  return (
    <Section bgcolor={bgcolor} sx={{ py: { xs: 6, md: 8 } }}>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: { xs: 4, md: 6 }, alignItems: 'center' }}>
        {imagePosition === 'left' ? (
          <>
            {imageBlock}
            {textBlock}
          </>
        ) : (
          <>
            {textBlock}
            {imageBlock}
          </>
        )}
      </Box>
    </Section>
  );
}
