import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { brand } from '@/theme/tokens';
import type { Stat } from '@/content/types';

type StatsBandProps = {
  stats: Stat[];
  caption?: string;
};

export default function StatsBand({ stats, caption }: StatsBandProps) {
  return (
    <Box
      sx={{
        borderRadius: '5px',
        border: `1px solid ${brand.line}`,
        backgroundColor: brand.surface,
        px: { xs: 3, md: 5 },
        py: { xs: 4, md: 5 },
        display: 'flex',
        flexWrap: 'wrap',
        gap: { xs: 4, md: 2 },
      }}
    >
      {stats.map((stat) => (
        <Box key={stat.label} sx={{ flex: '1 1 200px', minWidth: 0, textAlign: 'center' }}>
          <Typography
            sx={{
              fontWeight: 800,
              fontSize: { xs: '2.4rem', md: '3rem' },
              color: brand.greenInk,
              lineHeight: 1,
              mb: 1,
            }}
          >
            {stat.value}
          </Typography>
          <Typography variant="body2" sx={{ fontWeight: 600 }}>
            {stat.label}
          </Typography>
        </Box>
      ))}
      {caption ? (
        <Box sx={{ flex: '1 1 100%', textAlign: 'center', pt: 1 }}>
          <Typography variant="body2" sx={{ fontSize: '0.8rem', color: brand.inkSoft }}>
            {caption}
          </Typography>
        </Box>
      ) : null}
    </Box>
  );
}
