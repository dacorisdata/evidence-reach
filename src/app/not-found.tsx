import Link from 'next/link';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { brand } from '@/theme/tokens';

export default function NotFound() {
  return (
    <Box
      sx={{
        maxWidth: 1240,
        mx: 'auto',
        px: { xs: 2.5, md: 4 },
        py: { xs: 10, md: 16 },
        textAlign: 'center',
      }}
    >
      <Typography variant="overline" sx={{ color: brand.greenInk }}>
        404
      </Typography>
      <Typography variant="h2" sx={{ mt: 1, mb: 2 }}>
        This page is still being built.
      </Typography>
      <Typography variant="subtitle1" sx={{ mb: 4, mx: 'auto', maxWidth: 520 }}>
        We are rolling out the rest of the EvidenceReach site alongside the landing page. In the
        meantime, head back home or get in touch with us directly.
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1.5, flexWrap: 'wrap' }}>
        <Button component={Link} href="/" variant="contained" color="primary">
          Back to home
        </Button>
        <Button component={Link} href="/contact" variant="outlined" color="primary">
          Contact us
        </Button>
      </Box>
    </Box>
  );
}
