import type { Metadata } from 'next';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PageHero from '@/components/shared/PageHero';
import Section from '@/components/shared/Section';
import SectionHeading from '@/components/shared/SectionHeading';
import ClosingCta from '@/components/shared/ClosingCta';
import Reveal from '@/components/shared/Reveal';
import CareersListing from '@/components/careers/CareersListing';
import { brand } from '@/theme/tokens';
import { careersHero } from '@/content/careers';
import { site } from '@/content/site';

export const metadata: Metadata = {
  title: 'Careers and opportunities',
  description:
    'Jobs, sales partnerships and other opportunities with DACORIS EvidenceReach. Read each role, download the full advert and apply by email.',
};

const steps = [
  { title: 'Read the role', body: 'Each listing sets out the responsibilities, requirements and what to submit.' },
  { title: 'Download the advert', body: 'Keep the official PDF for reference or to share with your team.' },
  { title: 'Apply by email', body: `Send your application to ${site.email} with the subject line given, before the deadline.` },
];

export default function CareersPage() {
  return (
    <>
      <PageHero eyebrow={careersHero.eyebrow} title={careersHero.title} intro={careersHero.intro} image={careersHero.image} />

      <Section>
        <SectionHeading
          eyebrow="Open calls"
          title="Current opportunities."
          intro="Open roles are listed first. Closed adverts stay here for reference."
        />
        <CareersListing />
      </Section>

      <Section bgcolor={brand.surface} sx={{ '& > div': { py: { xs: 6, md: 8 } } }}>
        <Typography variant="overline" sx={{ color: brand.greenInk, display: 'block', mb: 3 }}>
          How applying works
        </Typography>
        <Box
          component="ol"
          sx={{
            listStyle: 'none',
            p: 0,
            m: 0,
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
            gap: { xs: 3, md: 4 },
          }}
        >
          {steps.map((step, index) => (
            <Box component="li" key={step.title} sx={{ borderTop: `2px solid ${index === 0 ? brand.green : brand.line}`, pt: 2.5 }}>
              <Typography sx={{ fontSize: '0.8rem', fontWeight: 700, color: brand.greenInk, mb: 1 }}>
                {String(index + 1).padStart(2, '0')}
              </Typography>
              <Typography variant="h4" sx={{ fontSize: '1.15rem', mb: 1 }}>
                {step.title}
              </Typography>
              <Typography variant="body2">{step.body}</Typography>
            </Box>
          ))}
        </Box>
      </Section>

      <Reveal>
        <ClosingCta
          eyebrow="Stay in touch"
          title="No role that fits right now?"
          body="New jobs and partnership calls are published here first. Introduce yourself and we will keep your details on file."
          primaryCta={{ label: 'Contact us', href: '/contact' }}
          secondaryCta={null}
        />
      </Reveal>
    </>
  );
}
