import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Link from 'next/link';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import { brand } from '@/theme/tokens';
import { group } from '@/content/about';
import Section from '@/components/shared/Section';

export default function GroupSection() {
  return (
    <Section>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: { xs: 4, md: 6 },
          alignItems: 'center',
          borderRadius: '5px',
          border: `1px solid ${brand.line}`,
          overflow: 'hidden',
        }}
      >
        <Box sx={{ flex: '1 1 420px', minWidth: 0, position: 'relative', alignSelf: 'stretch', minHeight: 280 }}>
          <Image src={group.image.src} alt={group.image.alt} fill sizes="(max-width: 900px) 100vw, 560px" style={{ objectFit: 'cover' }} />
        </Box>
        <Box sx={{ flex: '1 1 420px', minWidth: 0, px: { xs: 2.5, md: 1 }, py: { xs: 1, md: 4 } }}>
          <Typography variant="overline" sx={{ color: brand.greenInk }}>
            {group.eyebrow}
          </Typography>
          <Typography variant="h2" sx={{ mt: 1, mb: 2 }}>
            {group.title}
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            {group.body}
          </Typography>
          <Box component={Link} href="https://www.dacoris.com" sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.75, textDecoration: 'none' }}>
            <Typography sx={{ fontWeight: 700, color: brand.greenInk }}>Visit www.dacoris.com</Typography>
            <ArrowForwardOutlinedIcon sx={{ fontSize: 18, color: brand.greenInk }} />
          </Box>
        </Box>
      </Box>
    </Section>
  );
}
