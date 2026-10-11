'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { accent } from '@/theme/tokens';
import { useOpenStatus } from './useOpenStatus';

type OpportunityStatusProps = {
  deadline: string;
  /** Adds "Closes in N days" to the chip while open. */
  showCountdown?: boolean;
  onDark?: boolean;
};

function countdownLabel(days: number) {
  if (days <= 0) return 'Closes today';
  if (days === 1) return 'Closes tomorrow';
  return `Closes in ${days} days`;
}

export default function OpportunityStatus({ deadline, showCountdown = false, onDark = false }: OpportunityStatusProps) {
  const { open, daysLeft } = useOpenStatus(deadline);
  const urgent = open && daysLeft <= 5;
  const tone = !open ? accent.coral : urgent ? accent.amber : accent.green;
  const label = !open ? 'Closed' : showCountdown ? `Open · ${countdownLabel(daysLeft)}` : 'Open';

  return (
    <Box
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 0.75,
        px: 1.25,
        py: 0.4,
        borderRadius: 999,
        backgroundColor: onDark ? 'rgba(255,255,255,0.1)' : tone.wash,
        border: `1px solid ${onDark ? 'rgba(255,255,255,0.24)' : tone.line}`,
      }}
    >
      <Box
        sx={{
          width: 6,
          height: 6,
          borderRadius: '50%',
          backgroundColor: onDark ? (open ? '#42c686' : '#e0674a') : tone.main,
          ...(open && {
            '@keyframes statusPulse': {
              '0%': { boxShadow: '0 0 0 0 rgba(66,198,134,0.55)' },
              '70%': { boxShadow: '0 0 0 6px rgba(66,198,134,0)' },
              '100%': { boxShadow: '0 0 0 0 rgba(66,198,134,0)' },
            },
            animation: 'statusPulse 2.2s ease-out infinite',
            '@media (prefers-reduced-motion: reduce)': { animation: 'none' },
          }),
        }}
      />
      <Typography
        sx={{ fontSize: '0.74rem', fontWeight: 700, color: onDark ? '#ffffff' : tone.main, lineHeight: 1.4, whiteSpace: 'nowrap' }}
      >
        {label}
      </Typography>
    </Box>
  );
}
