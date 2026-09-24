import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { brand } from '@/theme/tokens';
import { institutionStrip } from '@/content/home';

export default function InstitutionStrip() {
  return (
    <Box sx={{ borderBottom: `1px solid ${brand.line}` }}>
      <Box
        sx={{
          maxWidth: 1240,
          mx: 'auto',
          px: { xs: 2.5, md: 4 },
          py: { xs: 3, md: 3.5 },
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: { xs: 1.5, md: 3 },
        }}
      >
        <Typography
          sx={{
            fontSize: '0.78rem',
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: brand.inkSoft,
            flexShrink: 0,
          }}
        >
          {institutionStrip.label}
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: { xs: 2, md: 4 } }}>
          {institutionStrip.items.map((item) => (
            <Typography
              key={item}
              sx={{ fontSize: '0.92rem', fontWeight: 700, color: brand.ink, opacity: 0.75 }}
            >
              {item}
            </Typography>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
