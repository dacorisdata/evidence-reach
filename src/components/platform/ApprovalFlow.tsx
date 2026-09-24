import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import { brand } from '@/theme/tokens';
import { governance } from '@/content/platform';
import Reveal from '@/components/shared/Reveal';

export default function ApprovalFlow() {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 1.25 }}>
      {governance.stages.map((stage, index) => (
        <Box key={stage} sx={{ display: 'flex', alignItems: 'center', gap: 1.25 }}>
          <Reveal delay={index * 50}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                px: 2,
                py: 1,
                borderRadius: 999,
                border: `1px solid ${brand.line}`,
                backgroundColor: '#ffffff',
              }}
            >
              <Box
                sx={{
                  width: 22,
                  height: 22,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.72rem',
                  fontWeight: 800,
                  backgroundColor: brand.mintWash,
                  color: brand.greenInk,
                  flexShrink: 0,
                }}
              >
                {index + 1}
              </Box>
              <Typography sx={{ fontSize: '0.86rem', fontWeight: 700, color: brand.ink, whiteSpace: 'nowrap' }}>
                {stage}
              </Typography>
            </Box>
          </Reveal>
          {index < governance.stages.length - 1 ? (
            <ArrowForwardOutlinedIcon sx={{ fontSize: 16, color: brand.inkSoft, flexShrink: 0 }} />
          ) : null}
        </Box>
      ))}
    </Box>
  );
}
