import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { brand } from '@/theme/tokens';

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  intro?: string;
  align?: 'left' | 'center';
  maxWidth?: number;
};

export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = 'left',
  maxWidth = 760,
}: SectionHeadingProps) {
  return (
    <Box
      sx={{
        mb: { xs: 4, md: 6 },
        display: 'flex',
        flexDirection: 'column',
        alignItems: align === 'center' ? 'center' : 'flex-start',
        textAlign: align,
        maxWidth,
        mx: align === 'center' ? 'auto' : 0,
      }}
    >
      <Box
        sx={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 1,
          mb: 1.75,
        }}
      >
        <Box sx={{ width: 22, height: 2, borderRadius: 2, bgcolor: brand.green }} />
        <Typography variant="overline" sx={{ color: brand.greenInk }}>
          {eyebrow}
        </Typography>
      </Box>
      <Typography variant="h2">{title}</Typography>
      {intro ? (
        <Typography variant="subtitle1" sx={{ mt: 2, maxWidth: maxWidth - 40 }}>
          {intro}
        </Typography>
      ) : null}
    </Box>
  );
}
