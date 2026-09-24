import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { brand } from '@/theme/tokens';
import Reveal from './Reveal';

export type Step = {
  title: string;
  body: string;
};

type StepsListProps = {
  steps: readonly Step[];
};

export default function StepsList({ steps }: StepsListProps) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', maxWidth: 860 }}>
      {steps.map((step, index) => (
        <Reveal key={step.title} delay={Math.min(index, 6) * 50}>
          <Box sx={{ display: 'flex', gap: { xs: 2, md: 3 }, alignItems: 'flex-start' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignSelf: 'stretch' }}>
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  fontSize: '0.95rem',
                  backgroundColor: brand.mintWash,
                  color: brand.greenInk,
                  border: `1px solid ${brand.mintLine}`,
                  flexShrink: 0,
                }}
              >
                {index + 1}
              </Box>
              {index < steps.length - 1 ? (
                <Box sx={{ flex: 1, width: 2, minHeight: 24, backgroundColor: brand.line, my: 0.75 }} />
              ) : null}
            </Box>
            <Box sx={{ pb: index < steps.length - 1 ? 3.5 : 0, minWidth: 0 }}>
              <Typography variant="h4" sx={{ mb: 0.75, mt: 0.5 }}>
                {step.title}
              </Typography>
              <Typography variant="body2">{step.body}</Typography>
            </Box>
          </Box>
        </Reveal>
      ))}
    </Box>
  );
}
