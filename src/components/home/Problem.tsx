import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { brand, accent } from '@/theme/tokens';
import { problem } from '@/content/home';
import Section from '@/components/shared/Section';

const accents = ['indigo', 'coral', 'amber', 'violet'] as const;

export default function Problem() {
  return (
    <Section>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: { xs: 5, md: 7 }, alignItems: 'center' }}>
        <Box sx={{ flex: '1 1 420px', minWidth: 0 }}>
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              aspectRatio: '4 / 3',
              borderRadius: '5px',
              overflow: 'hidden',
              border: `1px solid ${brand.line}`,
            }}
          >
            <Image src={problem.image.src} alt={problem.image.alt} fill sizes="(max-width: 900px) 100vw, 600px" style={{ objectFit: 'cover' }} />
          </Box>
        </Box>

        <Box sx={{ flex: '1 1 460px', minWidth: 0 }}>
          <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, mb: 1.75 }}>
            <Box sx={{ width: 22, height: 2, borderRadius: 2, bgcolor: brand.green }} />
            <Typography variant="overline" sx={{ color: brand.greenInk }}>
              {problem.eyebrow}
            </Typography>
          </Box>
          <Typography variant="h2" sx={{ mb: 2 }}>
            {problem.title}
          </Typography>
          <Typography variant="subtitle1" sx={{ mb: 4 }}>
            {problem.intro}
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
            {problem.points.map((point, index) => {
              const tone = accent[accents[index % accents.length]];
              return (
                <Box key={point.title} sx={{ display: 'flex', gap: 1.75 }}>
                  <Box
                    sx={{
                      width: 34,
                      height: 34,
                      flexShrink: 0,
                      borderRadius: 2,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: tone.wash,
                      color: tone.main,
                      fontWeight: 800,
                      fontSize: '0.85rem',
                    }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </Box>
                  <Box>
                    <Typography sx={{ fontWeight: 700, fontSize: '1rem', color: brand.ink, mb: 0.4 }}>
                      {point.title}
                    </Typography>
                    <Typography variant="body2">{point.body}</Typography>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>
    </Section>
  );
}
