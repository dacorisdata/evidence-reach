import Link from 'next/link';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { brand } from '@/theme/tokens';
import { joinUs } from '@/content/team';

export default function JoinUs() {
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
          borderRadius: 5,
          border: `1px solid ${brand.line}`,
          px: { xs: 3.5, md: 6 },
          py: { xs: 5, md: 6 },
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 3,
        }}
      >
        <Box sx={{ flex: '1 1 380px', minWidth: 0, maxWidth: 560 }}>
          <Typography variant="overline" sx={{ color: brand.greenInk }}>
            {joinUs.eyebrow}
          </Typography>
          <Typography variant="h3" sx={{ mt: 1, mb: 1.25 }}>
            {joinUs.title}
          </Typography>
          <Typography variant="body2">{joinUs.body}</Typography>
        </Box>
        <Button component={Link} href={joinUs.href} variant="contained" color="primary" size="large">
          {joinUs.cta}
        </Button>
      </Box>
    </Box>
  );
}
