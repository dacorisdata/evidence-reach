import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import { accent, brand, type AccentName } from '@/theme/tokens';
import Reveal from './Reveal';

export type Tier = {
  name: string;
  bestFit: string;
  scope: readonly string[];
  outcome: string;
  accent?: AccentName;
};

type TierCardsProps = {
  tiers: readonly Tier[];
};

const labelStyle = {
  fontSize: '0.72rem',
  fontWeight: 700,
  letterSpacing: '0.06em',
  textTransform: 'uppercase',
  color: brand.inkSoft,
  mb: 0.75,
} as const;

export default function TierCards({ tiers }: TierCardsProps) {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2.5 }}>
      {tiers.map((tier, index) => {
        const tone = accent[tier.accent ?? 'green'];
        return (
          <Reveal key={tier.name} delay={index * 70} sx={{ flex: '1 1 300px', minWidth: 0, display: 'flex' }}>
            <Box
              sx={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                p: 3.5,
                borderRadius: 4,
                border: `1px solid ${brand.line}`,
                backgroundColor: '#ffffff',
                borderTop: `4px solid ${tone.main}`,
              }}
            >
              <Typography variant="h3" sx={{ mb: 2 }}>
                {tier.name}
              </Typography>
              <Typography sx={labelStyle}>Best fit</Typography>
              <Typography variant="body2" sx={{ mb: 2.5 }}>
                {tier.bestFit}
              </Typography>
              <Typography sx={labelStyle}>Core scope</Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mb: 3 }}>
                {tier.scope.map((item) => (
                  <Box key={item} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                    <CheckOutlinedIcon sx={{ fontSize: 16, color: tone.main, mt: '3px', flexShrink: 0 }} />
                    <Typography variant="body2">{item}</Typography>
                  </Box>
                ))}
              </Box>
              <Box sx={{ mt: 'auto', p: 2, borderRadius: 3, backgroundColor: tone.wash }}>
                <Typography sx={{ ...labelStyle, color: tone.main }}>Commercial outcome</Typography>
                <Typography sx={{ fontSize: '0.92rem', fontWeight: 600, color: brand.ink, lineHeight: 1.5 }}>
                  {tier.outcome}
                </Typography>
              </Box>
            </Box>
          </Reveal>
        );
      })}
    </Box>
  );
}
