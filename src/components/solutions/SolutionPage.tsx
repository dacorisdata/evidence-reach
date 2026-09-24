import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { brand } from '@/theme/tokens';
import PageHero from '@/components/shared/PageHero';
import Section from '@/components/shared/Section';
import SectionHeading from '@/components/shared/SectionHeading';
import DataTable from '@/components/shared/DataTable';
import ChipList from '@/components/shared/ChipList';
import PitchBand from '@/components/shared/PitchBand';
import ClosingCta from '@/components/shared/ClosingCta';
import Reveal from '@/components/shared/Reveal';
import {
  solutionGapColumns,
  solutionScopeNote,
  solutionSections,
  type Solution,
} from '@/content/solutions';

const metaLabel = {
  fontSize: '0.72rem',
  fontWeight: 700,
  letterSpacing: '0.06em',
  textTransform: 'uppercase',
  color: brand.inkSoft,
  mb: 0.75,
} as const;

export default function SolutionPage({ solution }: { solution: Solution }) {
  return (
    <>
      <PageHero
        eyebrow={solution.hero.eyebrow}
        title={solution.hero.title}
        intro={solution.hero.intro}
        image={solution.hero.image}
        cta={{ label: 'Request a demo', href: '/contact' }}
      />

      <Section>
        <Reveal>
          <SectionHeading
            eyebrow={solutionSections.gapEyebrow}
            title={solution.gap.title}
            intro={solution.gap.intro}
            maxWidth={720}
          />
        </Reveal>
        <DataTable
          columns={[
            { key: 'challenge', label: solutionGapColumns.challenge, flex: '1.1 1 0' },
            { key: 'cost', label: solutionGapColumns.cost },
            { key: 'fill', label: solutionGapColumns.fill, flex: '1.2 1 0' },
          ]}
          rows={solution.gap.rows.map((row) => ({ ...row }))}
        />
      </Section>

      <Section bgcolor={brand.surface}>
        <Reveal>
          <SectionHeading
            eyebrow={solutionSections.productsEyebrow}
            title={solutionSections.productsTitle}
            maxWidth={680}
          />
        </Reveal>
        <ChipList items={solution.products} />

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: { xs: 3, md: 6 }, mt: { xs: 5, md: 7 } }}>
          <Reveal sx={{ flex: '1 1 320px', minWidth: 0 }}>
            <Typography sx={metaLabel}>{solutionSections.ownersLabel}</Typography>
            <Typography variant="body2">{solution.owners}</Typography>
          </Reveal>
          <Reveal delay={80} sx={{ flex: '1 1 320px', minWidth: 0 }}>
            <Typography sx={metaLabel}>{solutionSections.fitLabel}</Typography>
            <Typography variant="body2">{solution.fit}</Typography>
          </Reveal>
        </Box>
      </Section>

      <PitchBand eyebrow={solutionSections.pitchEyebrow} line={solution.pitch.line} body={solution.pitch.body} />

      <Box sx={{ maxWidth: 1240, mx: 'auto', px: { xs: 2.5, md: 4 }, pb: { xs: 3, md: 4 } }}>
        <Typography sx={{ fontSize: '0.82rem', color: brand.inkSoft, maxWidth: 720 }}>{solutionScopeNote}</Typography>
      </Box>

      <Reveal>
        <ClosingCta
          eyebrow={solutionSections.closingEyebrow}
          title={solutionSections.closingTitle}
          body={solutionSections.closingBody}
          primaryCta={{ label: 'Request a demo', href: '/contact' }}
          secondaryCta={{ label: 'See all solutions', href: '/solutions' }}
        />
      </Reveal>
    </>
  );
}
