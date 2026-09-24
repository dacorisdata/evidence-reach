import Link from 'next/link';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import type { ImageRef } from '@/content/types';

type PageHeroProps = {
  eyebrow: string;
  title: string;
  intro?: string;
  image: ImageRef;
  cta?: { label: string; href: string };
};

export default function PageHero({ eyebrow, title, intro, image, cta }: PageHeroProps) {
  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        minHeight: { xs: '46vh', md: '54vh' },
        display: 'flex',
        alignItems: 'flex-end',
        overflow: 'hidden',
        backgroundColor: '#0d0f22',
      }}
    >
      <Image src={image.src} alt={image.alt} fill priority sizes="100vw" style={{ objectFit: 'cover' }} />

      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: [
            'linear-gradient(180deg, rgba(13,15,34,0.5) 0%, rgba(13,15,34,0.45) 40%, rgba(13,15,34,0.92) 100%)',
            'linear-gradient(90deg, rgba(13,15,34,0.85) 0%, rgba(13,15,34,0.3) 60%, rgba(13,15,34,0.45) 100%)',
          ].join(','),
        }}
      />

      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          maxWidth: 1240,
          mx: 'auto',
          width: '100%',
          px: { xs: 2.5, md: 4 },
          pt: { xs: 12, md: 8 },
          pb: { xs: 5, md: 6.5 },
          '@keyframes heroFadeUp': {
            from: { opacity: 0, transform: 'translateY(14px)' },
            to: { opacity: 1, transform: 'translateY(0)' },
          },
          '& > *': {
            animation: 'heroFadeUp 700ms cubic-bezier(0.22, 1, 0.36, 1) both',
          },
        }}
      >
        <Box
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 1,
            px: 1.75,
            py: 0.7,
            mb: 2.5,
            borderRadius: 999,
            backgroundColor: 'rgba(255,255,255,0.08)',
            border: '1px solid rgba(255,255,255,0.22)',
            backdropFilter: 'blur(6px)',
            animationDelay: '0ms',
          }}
        >
          <Box sx={{ width: 7, height: 7, borderRadius: '50%', backgroundColor: '#42c686' }} />
          <Typography variant="overline" sx={{ color: '#ffffff', fontSize: '0.7rem' }}>
            {eyebrow}
          </Typography>
        </Box>

        <Typography
          variant="h1"
          sx={{ color: '#ffffff', maxWidth: 760, fontSize: 'clamp(2.2rem, 4.4vw, 3.4rem)', animationDelay: '90ms' }}
        >
          {title}
        </Typography>

        {intro ? (
          <Typography
            sx={{
              color: 'rgba(255,255,255,0.8)',
              fontSize: '1.05rem',
              lineHeight: 1.65,
              maxWidth: 620,
              mt: 2.5,
              animationDelay: '170ms',
            }}
          >
            {intro}
          </Typography>
        ) : null}

        {cta ? (
          <Button
            component={Link}
            href={cta.href}
            variant="contained"
            color="primary"
            size="large"
            sx={{ mt: 3.5, animationDelay: '230ms' }}
          >
            {cta.label}
          </Button>
        ) : null}
      </Box>
    </Box>
  );
}
