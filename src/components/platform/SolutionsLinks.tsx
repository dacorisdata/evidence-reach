import Box from '@mui/material/Box';
import Link from 'next/link';
import Typography from '@mui/material/Typography';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import { brand } from '@/theme/tokens';
import { mainNav } from '@/content/nav';
import { solutionsLinksIntro } from '@/content/platform';
import Section from '@/components/shared/Section';
import SectionHeading from '@/components/shared/SectionHeading';
import Reveal from '@/components/shared/Reveal';

export default function SolutionsLinks() {
  const solutions = (mainNav.find((item) => item.label === 'Solutions')?.children ?? []).filter(
    (item) => item.href !== '/solutions',
  );

  return (
    <Section bgcolor={brand.surface}>
      <Reveal>
        <SectionHeading eyebrow={solutionsLinksIntro.eyebrow} title={solutionsLinksIntro.title} maxWidth={680} />
      </Reveal>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2.5 }}>
        {solutions.map((item, index) => (
          <Reveal key={item.href} delay={index * 60} sx={{ flex: '1 1 260px', minWidth: 0 }}>
            <Box
              component={Link}
              href={item.href}
              sx={{
                display: 'block',
                height: '100%',
                textDecoration: 'none',
                p: 3,
                borderRadius: 3,
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
                <Typography sx={{ fontWeight: 700, fontSize: '1.02rem', color: brand.ink }}>
                  {item.label}
                </Typography>
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
