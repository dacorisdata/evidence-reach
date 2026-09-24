import Link from 'next/link';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { brand } from '@/theme/tokens';
import { closingCta as defaultClosingCta } from '@/content/site';

type CtaLink = {
  label: string;
  href: string;
};

type ClosingCtaProps = {
  eyebrow?: string;
  title?: string;
  body?: string;
  primaryCta?: CtaLink;
  secondaryCta?: CtaLink | null;
};

export default function ClosingCta({
  eyebrow = defaultClosingCta.eyebrow,
  title = defaultClosingCta.title,
  body = defaultClosingCta.body,
  primaryCta = defaultClosingCta.primaryCta,
  secondaryCta = defaultClosingCta.secondaryCta,
}: ClosingCtaProps = {}) {
  return (
    <Box
      component="section"
      sx={{
        maxWidth: 1240,
        mx: 'auto',
        width: '100%',
        px: { xs: 2.5, md: 4 },
        pb: { xs: 8, md: 12 },
      }}
    >
      <Box
        sx={{
          position: 'relative',
          overflow: 'hidden',
          borderRadius: '5px',
          backgroundColor: brand.footer,
          px: { xs: 3.5, md: 7 },
          py: { xs: 6, md: 8 },
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 4,
          backgroundImage: [
            'radial-gradient(38rem 22rem at 8% -20%, rgba(66, 198, 134, 0.28), rgba(13,15,34,0) 60%)',
            'radial-gradient(30rem 20rem at 100% 120%, rgba(58, 68, 168, 0.28), rgba(13,15,34,0) 60%)',
          ].join(','),
        }}
      >
        <Box sx={{ flex: '1 1 420px', minWidth: 0, maxWidth: 620, position: 'relative', zIndex: 1 }}>
          <Typography variant="overline" sx={{ color: brand.green }}>
            {eyebrow}
          </Typography>
          <Typography variant="h2" sx={{ color: '#ffffff', mt: 1, mb: 2 }}>
            {title}
          </Typography>
          <Typography sx={{ color: 'rgba(255,255,255,0.72)', fontSize: '1.05rem', lineHeight: 1.65 }}>
            {body}
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 1.5,
            position: 'relative',
            zIndex: 1,
          }}
        >
          <Button component={Link} href={primaryCta.href} variant="contained" color="primary" size="large">
            {primaryCta.label}
          </Button>
          {secondaryCta ? (
            <Button
              component={Link}
              href={secondaryCta.href}
              variant="outlined"
              size="large"
              sx={{
                color: '#ffffff',
                borderColor: 'rgba(255,255,255,0.35)',
                '&:hover': { borderColor: '#ffffff', backgroundColor: 'rgba(255,255,255,0.08)' },
              }}
            >
              {secondaryCta.label}
            </Button>
          ) : null}
        </Box>
      </Box>
    </Box>
  );
}
