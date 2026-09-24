import type { Metadata } from 'next';
import PageHero from '@/components/shared/PageHero';
import Section from '@/components/shared/Section';
import ClosingCta from '@/components/shared/ClosingCta';
import Reveal from '@/components/shared/Reveal';
import FaqList from '@/components/shared/FaqList';
import { faqHero, faqItems, faqClosing } from '@/content/faq';

export const metadata: Metadata = {
  title: 'FAQ',
  description:
    'Frequently asked questions about DACORIS EvidenceReach: hosting and security, deployment, AI, implementation, licensing and scale.',
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

export default function FaqPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <PageHero eyebrow={faqHero.eyebrow} title={faqHero.title} intro={faqHero.intro} image={faqHero.image} />

      <Section>
        <FaqList items={faqItems} />
      </Section>

      <Reveal>
        <ClosingCta
          eyebrow={faqClosing.eyebrow}
          title={faqClosing.title}
          body={faqClosing.body}
          primaryCta={{ label: 'Request a demo', href: '/contact' }}
          secondaryCta={{ label: 'Visit the resources hub', href: '/resources' }}
        />
      </Reveal>
    </>
  );
}
