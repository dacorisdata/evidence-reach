import type { Metadata } from 'next';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { brand } from '@/theme/tokens';
import PageHero from '@/components/shared/PageHero';
import Section from '@/components/shared/Section';
import StatusChip from '@/components/shared/StatusChip';
import ChipList from '@/components/shared/ChipList';
import ClosingCta from '@/components/shared/ClosingCta';
import Reveal from '@/components/shared/Reveal';
import { developersHero, developerInterfaces, developersNote } from '@/content/resources';

export const metadata: Metadata = {
  title: 'Developers',
  description:
    'DACORIS EvidenceReach interfaces: Public Data API, OAI-PMH repository harvesting, DCAT catalogue metadata, webhooks and connectors.',
};

export default function DevelopersPage() {
  return (
    <>
      <PageHero
        eyebrow={developersHero.eyebrow}
        title={developersHero.title}
        intro={developersHero.intro}
        image={developersHero.image}
      />

      {developerInterfaces.map((item, index) => (
        <Section
          key={item.id}
          id={item.id}
          bgcolor={index % 2 === 1 ? brand.surface : undefined}
          sx={{ scrollMarginTop: 96 }}
        >
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: { xs: 3, md: 8 }, alignItems: 'flex-start' }}>
            <Reveal sx={{ flex: '1 1 380px', minWidth: 0 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, flexWrap: 'wrap', mb: 1.75 }}>
                <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1 }}>
                  <Box sx={{ width: 22, height: 2, borderRadius: 2, bgcolor: brand.green }} />
                  <Typography variant="overline" sx={{ color: brand.greenInk }}>
                    {item.eyebrow}
                  </Typography>
                </Box>
                <StatusChip status={item.status} />
              </Box>
              <Typography variant="h2" sx={{ mb: 2 }}>
                {item.title}
              </Typography>
              <Typography sx={{ fontSize: '1.05rem', lineHeight: 1.7, color: brand.inkSoft }}>{item.body}</Typography>
            </Reveal>
            <Reveal delay={100} sx={{ flex: '1 1 320px', minWidth: 0 }}>
              <Typography
                sx={{
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  color: brand.inkSoft,
                  mb: 1.5,
                }}
              >
                Typical uses
              </Typography>
              <ChipList items={item.uses} />
            </Reveal>
          </Box>
        </Section>
      ))}

      <Reveal>
        <ClosingCta
          eyebrow={developersNote.eyebrow}
          title={developersNote.title}
          body={developersNote.body}
          primaryCta={{ label: 'Request access details', href: '/contact' }}
          secondaryCta={{ label: 'Integrations and standards', href: '/platform/integrations' }}
        />
      </Reveal>
    </>
  );
}
