import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { accent, brand } from '@/theme/tokens';
import { milestones } from '@/content/about';
import Section from '@/components/shared/Section';
import SectionHeading from '@/components/shared/SectionHeading';

export default function Timeline() {
  return (
    <Section bgcolor={brand.surface}>
      <SectionHeading eyebrow={milestones.eyebrow} title={milestones.title} intro={milestones.intro} maxWidth={680} />

      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        {milestones.items.map((item, index) => {
          const tone = accent[item.accent];
          const isLast = index === milestones.items.length - 1;
          return (
            <Box key={item.year} sx={{ display: 'flex', gap: { xs: 2.5, md: 4 } }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0, width: { xs: 64, md: 96 } }}>
                <Box
                  sx={{
                    width: { xs: 56, md: 76 },
                    height: { xs: 56, md: 76 },
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: tone.wash,
                    color: tone.main,
                    fontWeight: 800,
                    fontSize: { xs: '0.78rem', md: '0.92rem' },
                    border: `1px solid ${tone.line}`,
                    flexShrink: 0,
                  }}
                >
                  {item.year}
                </Box>
                {!isLast ? (
                  <Box sx={{ width: 2, flexGrow: 1, minHeight: 40, backgroundColor: brand.line, my: 1 }} />
                ) : null}
              </Box>

              <Box sx={{ pb: isLast ? 0 : { xs: 4, md: 5 }, pt: { xs: 1, md: 1.5 } }}>
                <Typography sx={{ fontWeight: 700, fontSize: '1.08rem', color: brand.ink, mb: 0.75 }}>
                  {item.title}
                </Typography>
                <Typography variant="body2" sx={{ maxWidth: 560 }}>
                  {item.body}
                </Typography>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Section>
  );
}
