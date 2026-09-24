import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { brand } from '@/theme/tokens';
import { leadership, leadershipIntro } from '@/content/team';
import Section from '@/components/shared/Section';
import TeamCard from './TeamCard';

export default function LeadershipGrid() {
  return (
    <Section>
      <Box sx={{ mb: { xs: 4, md: 6 }, maxWidth: 680 }}>
        <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, mb: 1.75 }}>
          <Box sx={{ width: 22, height: 2, borderRadius: 2, bgcolor: brand.green }} />
          <Typography variant="overline" sx={{ color: brand.greenInk }}>
            {leadershipIntro.eyebrow}
          </Typography>
        </Box>
        <Typography variant="h2" sx={{ mb: 2 }}>
          {leadershipIntro.title}
        </Typography>
        <Typography variant="subtitle1">{leadershipIntro.intro}</Typography>
      </Box>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2.5 }}>
        {leadership.map((member) => (
          <TeamCard key={member.name} name={member.name} role={member.role} bio={member.bio} image={member.image} />
        ))}
      </Box>
    </Section>
  );
}
