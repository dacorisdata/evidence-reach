import type { Metadata } from 'next';
import Box from '@mui/material/Box';
import PageHero from '@/components/shared/PageHero';
import Section from '@/components/shared/Section';
import Reveal from '@/components/shared/Reveal';
import ContactForm from '@/components/contact/ContactForm';
import ContactInfoPanel from '@/components/contact/ContactInfoPanel';
import { contactHero } from '@/content/contact';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    "Tell us about your institution's evidence and audiences, and we'll show you an end-to-end DACORIS EvidenceReach demonstration.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow={contactHero.eyebrow}
        title={contactHero.title}
        intro={contactHero.intro}
        image={contactHero.image}
      />

      <Section>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: { xs: 6, md: 8 } }}>
          <Reveal sx={{ flex: '1 1 420px', minWidth: 0 }}>
            <ContactForm />
          </Reveal>
          <Reveal delay={100} sx={{ flex: '0 1 320px', minWidth: 0 }}>
            <ContactInfoPanel />
          </Reveal>
        </Box>
      </Section>
    </>
  );
}
