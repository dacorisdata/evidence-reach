import type { Metadata } from 'next';
import PageHero from '@/components/shared/PageHero';
import LegalDocument from '@/components/shared/LegalDocument';
import {
  legalDraft,
  legalDraftNotice,
  legalUpdated,
  privacyHero,
  privacyIntro,
  privacySections,
} from '@/content/legal';

export const metadata: Metadata = {
  title: 'Privacy notice',
  description: 'How DACORIS EvidenceReach handles personal information collected through this website.',
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow={privacyHero.eyebrow} title={privacyHero.title} intro={privacyHero.intro} image={privacyHero.image} />
      <LegalDocument
        updated={legalUpdated}
        draftNotice={legalDraft ? legalDraftNotice : undefined}
        intro={privacyIntro}
        sections={privacySections}
      />
    </>
  );
}
