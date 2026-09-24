import type { Metadata } from 'next';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { brand } from '@/theme/tokens';
import PageHero from '@/components/shared/PageHero';
import Section from '@/components/shared/Section';
import SectionHeading from '@/components/shared/SectionHeading';
import DataTable from '@/components/shared/DataTable';
import StatusChip from '@/components/shared/StatusChip';
import ImageTextSplit from '@/components/shared/ImageTextSplit';
import ClosingCta from '@/components/shared/ClosingCta';
import Reveal from '@/components/shared/Reveal';
import CapabilityGrid from '@/components/platform/CapabilityGrid';
import {
  fitPrinciple,
  integrationsHero,
  integrationsArchitecture,
  standardsIntro,
  standardsColumns,
  standardsRows,
  statusLegend,
  deploymentIntro,
} from '@/content/platformPages';
import { photo } from '@/content/images';

export const metadata: Metadata = {
  title: 'Integrations and standards',
  description:
    'DACORIS EvidenceReach connects to systems of record using OAI-PMH, DCAT, SDMX, IATI and institutional identity standards, with cloud, sovereign or on-premise deployment.',
};

export default function IntegrationsPage() {
  return (
    <>
      <PageHero
        eyebrow={integrationsHero.eyebrow}
        title={integrationsHero.title}
        intro={integrationsHero.intro}
        image={integrationsHero.image}
      />

      <ImageTextSplit
        eyebrow={fitPrinciple.eyebrow}
        title="Reference your authoritative systems. Never compete with them."
        body={`${fitPrinciple.line} ${fitPrinciple.body}`}
        image={photo('teamRegistering', 1200)}
        imagePosition="left"
      />

      <CapabilityGrid
        eyebrow={integrationsArchitecture.eyebrow}
        title={integrationsArchitecture.title}
        intro={integrationsArchitecture.intro}
        cards={integrationsArchitecture.cards}
      />

      <Section id="standards">
        <Reveal>
          <SectionHeading
            eyebrow={standardsIntro.eyebrow}
            title={standardsIntro.title}
            intro={standardsIntro.intro}
            maxWidth={720}
          />
        </Reveal>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: { xs: 1.5, md: 3 }, mb: 4 }}>
          {statusLegend.map((item) => (
            <Box key={item.status} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <StatusChip status={item.status} />
              <Typography sx={{ fontSize: '0.85rem', color: brand.inkSoft }}>{item.meaning}</Typography>
            </Box>
          ))}
        </Box>

        <DataTable
          columns={[
            { key: 'standard', label: standardsColumns.standard, flex: '1.1 1 0' },
            { key: 'usedFor', label: standardsColumns.usedFor, flex: '1.4 1 0' },
            { key: 'status', label: standardsColumns.status, flex: '0 0 150px' },
          ]}
          rows={standardsRows.map((row) => ({
            standard: row.standard,
            usedFor: row.usedFor,
            status: <StatusChip status={row.status} />,
          }))}
        />
      </Section>

      <CapabilityGrid
        eyebrow={deploymentIntro.eyebrow}
        title={deploymentIntro.title}
        intro={deploymentIntro.intro}
        cards={deploymentIntro.cards}
        bgcolor="#ffffff"
      />

      <Reveal>
        <ClosingCta
          eyebrow="Technical questions"
          title="Bring your ICT and data teams to the demonstration."
          body="We will walk through the connection points for your repositories, portals and identity provider."
          primaryCta={{ label: 'Request a demo', href: '/contact' }}
          secondaryCta={{ label: 'Developer interfaces', href: '/developers' }}
        />
      </Reveal>
    </>
  );
}
