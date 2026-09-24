import Link from 'next/link';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import HubOutlinedIcon from '@mui/icons-material/HubOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import { hero } from '@/content/home';

const trustIcons = [VerifiedUserOutlinedIcon, PublicOutlinedIcon, HubOutlinedIcon];

export default function Hero() {
  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'flex-end',
        overflow: 'hidden',
        backgroundColor: '#0d0f22',
      }}
    >
      <Image
        src={hero.image.src}
        alt={hero.image.alt}
        fill
        priority
        sizes="100vw"
        style={{ objectFit: 'cover', objectPosition: 'center' }}
      />

      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: [
            'linear-gradient(180deg, rgba(13,15,34,0.55) 0%, rgba(13,15,34,0.42) 38%, rgba(13,15,34,0.86) 100%)',
            'linear-gradient(90deg, rgba(13,15,34,0.9) 0%, rgba(13,15,34,0.35) 55%, rgba(13,15,34,0.55) 100%)',
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
          pt: { xs: 16, md: 10 },
          pb: { xs: 8, md: 11 },
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'flex-end',
          gap: 4,
        }}
      >
        <Box sx={{ flex: '1 1 560px', minWidth: 0, maxWidth: 780 }}>
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 1,
              px: 1.75,
              py: 0.7,
              mb: 3,
              borderRadius: 999,
              backgroundColor: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.22)',
              backdropFilter: 'blur(6px)',
            }}
          >
            <Box sx={{ width: 7, height: 7, borderRadius: '50%', backgroundColor: '#42c686' }} />
            <Typography variant="overline" sx={{ color: '#ffffff', fontSize: '0.7rem' }}>
              {hero.eyebrow}
            </Typography>
          </Box>

          <Typography
            variant="h1"
            sx={{
              color: '#ffffff',
              mb: 3,
              textShadow: '0 6px 30px rgba(0,0,0,0.35)',
            }}
          >
            {hero.headline}
          </Typography>

          <Typography
            sx={{
              color: 'rgba(255,255,255,0.82)',
              fontSize: { xs: '1.05rem', md: '1.18rem' },
              lineHeight: 1.65,
              maxWidth: 620,
              mb: 4.5,
            }}
          >
            {hero.intro}
          </Typography>

          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, mb: 5 }}>
            <Button component={Link} href={hero.primaryCta.href} variant="contained" color="primary" size="large">
              {hero.primaryCta.label}
            </Button>
            <Button
              component={Link}
              href={hero.secondaryCta.href}
              variant="outlined"
              size="large"
              sx={{
                color: '#ffffff',
                borderColor: 'rgba(255,255,255,0.45)',
                '&:hover': { borderColor: '#ffffff', backgroundColor: 'rgba(255,255,255,0.1)' },
              }}
            >
              {hero.secondaryCta.label}
            </Button>
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: { xs: 2, sm: 3.5 },
              pt: 3,
              borderTop: '1px solid rgba(255,255,255,0.18)',
            }}
          >
            {hero.trust.map((item, index) => {
              const Icon = trustIcons[index];
              return (
                <Box key={item} sx={{ display: 'flex', alignItems: 'center', gap: 0.8 }}>
                  <Icon sx={{ fontSize: 18, color: '#42c686' }} />
                  <Typography sx={{ fontSize: '0.85rem', fontWeight: 600, color: 'rgba(255,255,255,0.78)' }}>
                    {item}
                  </Typography>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          position: 'absolute',
          left: '50%',
          bottom: { xs: 20, md: 28 },
          transform: 'translateX(-50%)',
          zIndex: 1,
          display: { xs: 'none', sm: 'flex' },
          flexDirection: 'column',
          alignItems: 'center',
          gap: 0.5,
          animation: 'heroBounce 2.2s ease-in-out infinite',
          '@keyframes heroBounce': {
            '0%, 100%': { transform: 'translateX(-50%) translateY(0)' },
            '50%': { transform: 'translateX(-50%) translateY(6px)' },
          },
        }}
      >
        <Typography sx={{ fontSize: '0.7rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)' }}>
          {hero.scrollLabel}
        </Typography>
        <KeyboardArrowDownOutlinedIcon sx={{ color: 'rgba(255,255,255,0.6)' }} />
      </Box>
    </Box>
  );
}
