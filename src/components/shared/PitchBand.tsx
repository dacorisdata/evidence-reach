import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { brand } from '@/theme/tokens';
import Reveal from './Reveal';

type PitchBandProps = {
  eyebrow: string;
  line: string;
  body?: string;
};

export default function PitchBand({ eyebrow, line, body }: PitchBandProps) {
  return (
    <Box
      component="section"
      sx={{ maxWidth: 1240, mx: 'auto', width: '100%', px: { xs: 2.5, md: 4 }, py: { xs: 4, md: 6 } }}
    >
      <Reveal>
        <Box
          sx={{
            borderRadius: 5,
            backgroundColor: brand.footer,
            px: { xs: 3.5, md: 7 },
            py: { xs: 5, md: 7 },
            backgroundImage:
              'radial-gradient(34rem 20rem at 0% -20%, rgba(66, 198, 134, 0.22), rgba(13,15,34,0) 60%)',
          }}
        >
          <Typography variant="overline" sx={{ color: brand.green }}>
            {eyebrow}
          </Typography>
          <Typography
            sx={{
              color: '#ffffff',
              fontWeight: 800,
              fontSize: { xs: '1.5rem', md: '2.05rem' },
              lineHeight: 1.25,
              mt: 1,
              maxWidth: 820,
            }}
          >
            {line}
          </Typography>
          {body ? (
            <Typography
              sx={{
                color: 'rgba(255,255,255,0.74)',
                fontSize: '1.05rem',
                lineHeight: 1.7,
                mt: 2.5,
                maxWidth: 780,
              }}
            >
              {body}
            </Typography>
          ) : null}
        </Box>
      </Reveal>
    </Box>
  );
}
