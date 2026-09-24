import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { brand } from '@/theme/tokens';
import Section from './Section';

export type LegalSection = {
  heading: string;
  paragraphs?: readonly string[];
  bullets?: readonly string[];
};

type LegalDocumentProps = {
  updated: string;
  draftNotice?: string;
  intro: string;
  sections: readonly LegalSection[];
};

export default function LegalDocument({ updated, draftNotice, intro, sections }: LegalDocumentProps) {
  return (
    <Section>
      <Box sx={{ maxWidth: 820, mx: 'auto' }}>
        {draftNotice ? (
          <Box
            sx={{
              display: 'flex',
              gap: 1.25,
              alignItems: 'flex-start',
              p: 2,
              mb: 4,
              borderRadius: '5px',
              backgroundColor: brand.mintWash,
              border: `1px solid ${brand.mintLine}`,
            }}
          >
            <InfoOutlinedIcon sx={{ fontSize: 20, color: brand.greenInk, mt: '2px', flexShrink: 0 }} />
            <Typography variant="body2" sx={{ color: brand.ink }}>
              {draftNotice}
            </Typography>
          </Box>
        ) : null}

        <Typography sx={{ fontSize: '0.85rem', fontWeight: 600, color: brand.inkSoft, mb: 2 }}>
          Last updated: {updated}
        </Typography>
        <Typography sx={{ fontSize: '1.08rem', lineHeight: 1.75, color: brand.inkSoft, mb: 5 }}>{intro}</Typography>

        {sections.map((section, index) => (
          <Box key={section.heading} sx={{ mb: 4.5 }}>
            <Typography variant="h3" sx={{ mb: 1.5 }}>
              {index + 1}. {section.heading}
            </Typography>
            {section.paragraphs?.map((paragraph) => (
              <Typography key={paragraph} sx={{ fontSize: '1rem', lineHeight: 1.75, color: brand.inkSoft, mb: 1.5 }}>
                {paragraph}
              </Typography>
            ))}
            {section.bullets ? (
              <Box component="ul" sx={{ m: 0, pl: 3, display: 'flex', flexDirection: 'column', gap: 0.75 }}>
                {section.bullets.map((bullet) => (
                  <Typography key={bullet} component="li" sx={{ fontSize: '1rem', lineHeight: 1.7, color: brand.inkSoft }}>
                    {bullet}
                  </Typography>
                ))}
              </Box>
            ) : null}
          </Box>
        ))}
      </Box>
    </Section>
  );
}
