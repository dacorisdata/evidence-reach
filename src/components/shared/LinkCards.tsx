import Link from 'next/link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import { brand } from '@/theme/tokens';
import Section from './Section';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

export type LinkCard = {
  label: string;
  href: string;
  blurb: string;
};

type LinkCardsProps = {
  eyebrow: string;
  title: string;
  intro?: string;
  items: readonly LinkCard[];
  bgcolor?: string;
};

export default function LinkCards({ eyebrow, title, intro, items, bgcolor }: LinkCardsProps) {
  return (
    <Section bgcolor={bgcolor ?? brand.surface}>
      <Reveal>
        <SectionHeading eyebrow={eyebrow} title={title} intro={intro} maxWidth={680} />
      </Reveal>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2.5 }}>
        {items.map((item, index) => (
          <Reveal key={item.href} delay={index * 60} sx={{ flex: '1 1 280px', minWidth: 0 }}>
            <Box
              component={Link}
              href={item.href}
              sx={{
                display: 'block',
                height: '100%',
                textDecoration: 'none',
                p: 3,
                borderRadius: '5px',
                border: `1px solid ${brand.line}`,
                backgroundColor: '#ffffff',
                transition: 'border-color 180ms ease, transform 180ms ease, box-shadow 180ms ease',
                '&:hover': {
                  borderColor: brand.mintLine,
                  transform: 'translateY(-3px)',
                  boxShadow: '0 16px 32px rgba(13, 15, 34, 0.08)',
                },
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.6, mb: 1 }}>
                <Typography sx={{ fontWeight: 700, fontSize: '1.02rem', color: brand.ink }}>{item.label}</Typography>
                <ArrowForwardOutlinedIcon sx={{ fontSize: 16, color: brand.inkSoft }} />
              </Box>
              <Typography variant="body2">{item.blurb}</Typography>
            </Box>
          </Reveal>
        ))}
      </Box>
    </Section>
  );
}
