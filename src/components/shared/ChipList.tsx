import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import { brand } from '@/theme/tokens';
import Reveal from './Reveal';

type ChipListProps = {
  items: readonly string[];
};

export default function ChipList({ items }: ChipListProps) {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.25 }}>
      {items.map((item, index) => (
        <Reveal key={item} delay={Math.min(index, 8) * 30}>
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 0.9,
              px: 1.75,
              py: 1,
              borderRadius: 999,
              border: `1px solid ${brand.line}`,
              backgroundColor: '#ffffff',
            }}
          >
            <CheckOutlinedIcon sx={{ fontSize: 16, color: brand.greenInk }} />
            <Typography sx={{ fontSize: '0.9rem', fontWeight: 600, color: brand.ink }}>{item}</Typography>
          </Box>
        </Reveal>
      ))}
    </Box>
  );
}
