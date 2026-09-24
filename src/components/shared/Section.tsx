import Box from '@mui/material/Box';
import type { SxProps, Theme } from '@mui/material/styles';

type SectionProps = {
  children: React.ReactNode;
  sx?: SxProps<Theme>;
  bgcolor?: string;
  id?: string;
};

export default function Section({ children, sx, bgcolor, id }: SectionProps) {
  return (
    <Box component="section" id={id} sx={{ bgcolor: bgcolor ?? 'transparent', ...sx }}>
      <Box
        sx={{
          maxWidth: 1240,
          mx: 'auto',
          width: '100%',
          px: { xs: 2.5, md: 4 },
          py: { xs: 7, md: 11 },
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
