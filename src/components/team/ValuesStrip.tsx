import Box from '@mui/material/Box';
import { brand } from '@/theme/tokens';
import { values } from '@/content/team';
import Section from '@/components/shared/Section';
import SectionHeading from '@/components/shared/SectionHeading';
import InfoCard from '@/components/shared/InfoCard';

export default function ValuesStrip() {
  return (
    <Section bgcolor={brand.surface}>
      <SectionHeading eyebrow={values.eyebrow} title={values.title} maxWidth={640} />
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2.5 }}>
        {values.items.map((item, index) => (
          <InfoCard key={item.title} title={item.title} body={item.body} accentName={item.accent} index={index} />
        ))}
      </Box>
    </Section>
  );
}
