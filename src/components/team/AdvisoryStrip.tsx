import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { accentAt, brand } from '@/theme/tokens';
import { advisory } from '@/content/team';
import Section from '@/components/shared/Section';

function initials(name: string) {
  return name
    .replace('Prof. ', '')
    .replace('Dr. ', '')
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

export default function AdvisoryStrip() {
  return (
    <Section bgcolor={brand.footer}>
      <Box sx={{ mb: { xs: 4, md: 6 }, maxWidth: 680 }}>
        <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, mb: 1.75 }}>
          <Box sx={{ width: 22, height: 2, borderRadius: 2, bgcolor: brand.green }} />
          <Typography variant="overline" sx={{ color: brand.green }}>
            {advisory.eyebrow}
          </Typography>
        </Box>
        <Typography variant="h2" sx={{ color: '#ffffff', mb: 2 }}>
          {advisory.title}
        </Typography>
        <Typography sx={{ color: 'rgba(255,255,255,0.68)', fontSize: '1.05rem', lineHeight: 1.65 }}>
          {advisory.intro}
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
        {advisory.members.map((member, index) => {
          const tone = accentAt(index);
          return (
            <Box
              key={member.name}
              sx={{
                flex: '1 1 260px',
                minWidth: 0,
                display: 'flex',
                alignItems: 'center',
                gap: 1.75,
                p: 2,
                borderRadius: '5px',
                border: '1px solid rgba(255,255,255,0.12)',
                backgroundColor: 'rgba(255,255,255,0.03)',
              }}
            >
              <Box
                sx={{
                  flexShrink: 0,
                  width: 44,
                  height: 44,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: tone.wash,
                  color: tone.main,
                  fontWeight: 800,
                  fontSize: '0.85rem',
                }}
              >
                {initials(member.name)}
              </Box>
              <Box>
                <Typography sx={{ fontWeight: 700, fontSize: '0.95rem', color: '#ffffff' }}>
                  {member.name}
                </Typography>
                <Typography sx={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)' }}>
                  {member.focus}
                </Typography>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Section>
  );
}
