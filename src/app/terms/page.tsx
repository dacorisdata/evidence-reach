import type { Metadata } from 'next';
import PageHero from '@/components/shared/PageHero';
import LegalDocument from '@/components/shared/LegalDocument';
import {
  legalDraft,
  legalDraftNotice,
  legalUpdated,
  termsHero,
  termsIntro,
  termsSections,
} from '@/content/legal';

export const metadata: Metadata = {
  title: 'Terms of use',
  description: 'Terms for using the DACORIS EvidenceReach website.',
};

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow={termsHero.eyebrow} title={termsHero.title} intro={termsHero.intro} image={termsHero.image} />
      <LegalDocument
        updated={legalUpdated}
        draftNotice={legalDraft ? legalDraftNotice : undefined}
        intro={termsIntro}
        sections={termsSections}
      />
    </>
  );
}
