'use client';

import Link from 'next/link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { accent } from '@/theme/tokens';
import { formatDeadline } from '@/content/careers';
import { useOpenStatus } from './useOpenStatus';

export default function ClosedNotice({ deadline }: { deadline: string }) {
  const { open } = useOpenStatus(deadline);
  if (open) return null;
  return (
    <Box
      role="status"
      sx={{
        mb: 4,
        p: 2.5,
        borderRadius: '5px',
        border: `1px solid ${accent.coral.line}`,
        backgroundColor: accent.coral.wash,
      }}
    >
      <Typography sx={{ fontWeight: 700, color: accent.coral.main, mb: 0.5 }}>
        Applications closed on {formatDeadline(deadline)}.
      </Typography>
      <Typography variant="body2">
        This advert is kept for reference. See{' '}
        <Box component={Link} href="/careers" sx={{ color: 'inherit', fontWeight: 600 }}>
          current opportunities
        </Box>{' '}
        for roles that are still open.
      </Typography>
    </Box>
  );
}
