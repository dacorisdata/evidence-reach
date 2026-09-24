import type { Metadata } from 'next';
import PageHero from '@/components/shared/PageHero';
import Section from '@/components/shared/Section';
import SectionHeading from '@/components/shared/SectionHeading';
import DataTable from '@/components/shared/DataTable';
import StatusChip from '@/components/shared/StatusChip';
import PitchBand from '@/components/shared/PitchBand';
import ClosingCta from '@/components/shared/ClosingCta';
import Reveal from '@/components/shared/Reveal';
import ApprovalFlow from '@/components/platform/ApprovalFlow';
import { brand } from '@/theme/tokens';
import {
  trustHero,
  trustRule,
  controlsIntro,
  controlsColumns,
  controlsRows,
  approvalIntro,
  readinessIntro,
  readinessColumns,
  readinessRows,
} from '@/content/platformPages';

export const metadata: Metadata = {
  title: 'Trust and responsible AI',
  description:
    'How DACORIS EvidenceReach keeps speed compatible with accountability: human approval, source-grounded AI, data protection, statistical confidentiality and release authority.',
};

export default function TrustPage() {
  return (
    <>
      <PageHero eyebrow={trustHero.eyebrow} title={trustHero.title} intro={trustHero.intro} image={trustHero.image} />

      <PitchBand eyebrow={trustRule.eyebrow} line={trustRule.line} body={trustRule.body} />

      <Section>
        <Reveal>
          <SectionHeading eyebrow={controlsIntro.eyebrow} title={controlsIntro.title} maxWidth={680} />
        </Reveal>
        <DataTable
          columns={[
            { key: 'area', label: controlsColumns.area, flex: '0.7 1 0' },
            { key: 'requirement', label: controlsColumns.requirement, flex: '1.3 1 0' },
            { key: 'why', label: controlsColumns.why },
          ]}
          rows={controlsRows.map((row) => ({ ...row }))}
        />
      </Section>

      <Section bgcolor={brand.surface}>
        <Reveal>
          <SectionHeading
            eyebrow={approvalIntro.eyebrow}
            title={approvalIntro.title}
            intro={approvalIntro.intro}
            maxWidth={720}
          />
        </Reveal>
        <ApprovalFlow />
      </Section>

      <Section id="readiness">
        <Reveal>
          <SectionHeading
            eyebrow={readinessIntro.eyebrow}
            title={readinessIntro.title}
            intro={readinessIntro.intro}
            maxWidth={720}
          />
        </Reveal>
        <DataTable
          columns={[
            { key: 'capability', label: readinessColumns.capability, flex: '1 1 0' },
            { key: 'status', label: readinessColumns.status, flex: '0 0 150px' },
          ]}
          rows={readinessRows.map((row) => ({
            capability: row.capability,
            status: <StatusChip status={row.status} />,
          }))}
        />
      </Section>

      <Reveal>
        <ClosingCta
          eyebrow="Security and legal review"
          title="Bring your security and data-governance teams early."
          body="We will walk through the controls, the deployment options and what is validated in production."
          primaryCta={{ label: 'Request a demo', href: '/contact' }}
          secondaryCta={{ label: 'Integrations and standards', href: '/platform/integrations' }}
        />
      </Reveal>
    </>
  );
}
