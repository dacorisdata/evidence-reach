import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { accent, type AccentName } from '@/theme/tokens';

export type Status = 'Demonstrated' | 'Configurable' | 'Planned';

const statusTone: Record<Status, AccentName> = {
  Demonstrated: 'green',
  Configurable: 'indigo',
  Planned: 'amber',
};

export default function StatusChip({ status }: { status: Status }) {
  const tone = accent[statusTone[status]];
  return (
    <Box
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 0.75,
        px: 1.25,
        py: 0.4,
        borderRadius: 999,
        backgroundColor: tone.wash,
        border: `1px solid ${tone.line}`,
      }}
    >
      <Box sx={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: tone.main }} />
      <Typography sx={{ fontSize: '0.74rem', fontWeight: 700, color: tone.main, lineHeight: 1.4 }}>
        {status}
      </Typography>
    </Box>
  );
}
