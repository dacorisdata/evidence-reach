import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { accent, brand, type AccentName } from '@/theme/tokens';

type InfoCardProps = {
  title: string;
  subtitle?: string;
  body: string;
  accentName?: AccentName;
  index?: number;
};

export default function InfoCard({ title, subtitle, body, accentName = 'green', index }: InfoCardProps) {
  const tone = accent[accentName];
  return (
    <Box
      sx={{
        flex: '1 1 280px',
        minWidth: 0,
        p: 3,
        borderRadius: '5px',
        border: `1px solid ${brand.line}`,
        backgroundColor: '#ffffff',
        transition: 'border-color 180ms ease, transform 180ms ease, box-shadow 180ms ease',
        '&:hover': {
          borderColor: tone.line,
          transform: 'translateY(-3px)',
          boxShadow: '0 16px 32px rgba(13, 15, 34, 0.08)',
        },
      }}
    >
      <Box
        sx={{
          width: 38,
          height: 38,
          borderRadius: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: tone.wash,
          color: tone.main,
          fontWeight: 800,
          fontSize: '0.95rem',
          mb: 2,
        }}
      >
        {typeof index === 'number' ? String(index + 1).padStart(2, '0') : null}
      </Box>
      <Typography variant="h4" sx={{ mb: subtitle ? 0.5 : 1 }}>
        {title}
      </Typography>
      {subtitle ? (
        <Typography sx={{ fontWeight: 700, fontSize: '0.86rem', color: tone.main, mb: 1 }}>
          {subtitle}
        </Typography>
      ) : null}
      <Typography variant="body2">{body}</Typography>
    </Box>
  );
}
