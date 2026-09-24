import type { LegalSection } from '@/components/shared/LegalDocument';
import { photo } from './images';

// Set to false once the notices have been reviewed and approved by legal counsel.
export const legalDraft = true;

export const legalDraftNotice =
  'This page is a working draft pending legal review. It describes how this website currently works and is not final legal advice.';

export const legalUpdated = '21 September 2026';

export const privacyHero = {
  eyebrow: 'Privacy notice',
  title: 'How we handle personal information.',
  intro: 'What we collect through this website, why, and the choices you have.',
  image: photo('officeBuilding', 2400),
} as const;

export const privacyIntro =
  'This notice explains how DACORIS EvidenceReach, a DACORIS Group product, handles personal data collected through this website. It applies to visitors and to people who contact us.';

export const privacySections: readonly LegalSection[] = [
  {
    heading: 'Who we are',
    paragraphs: [
      'DACORIS EvidenceReach is a DACORIS Group product based at Strathmore University, Nairobi. We are responsible for personal data collected through this website. You can reach us at info@dacoris.com or +254 732 436199.',
    ],
  },
  {
    heading: 'What we collect',
    paragraphs: [
      'When you use the demo request form, the details you enter are placed into an email addressed to us by your own email application. The form does not store them on this website. The details are:',
    ],
    bullets: [
      'Your name and work email address',
      'Your organisation',
      'What you would like to disseminate',
      'Your website, if you choose to provide it',
    ],
  },
  {
    heading: 'Other information',
    paragraphs: [
      'If you email or phone us, we keep the correspondence. Our hosting provider may keep standard technical logs, such as IP address and browser type, for security and reliability.',
    ],
  },
  {
    heading: 'How we use it',
    bullets: [
      'To respond to your enquiry and arrange a demonstration',
      'To scope pilots and proposals for your institution',
      'To keep in touch about DER, where you have asked us to',
      'To meet legal and regulatory obligations',
    ],
    paragraphs: ['We do not sell personal data.'],
  },
  {
    heading: 'Our legal basis',
    paragraphs: [
      "We process personal data in line with Kenya's Data Protection Act, 2019. We rely on your consent when you contact us, and on our legitimate interest in responding to business enquiries.",
    ],
  },
  {
    heading: 'Sharing',
    paragraphs: [
      'We share personal data only with other DACORIS Group teams and with service providers who help us run our email and hosting, under appropriate confidentiality terms. We may also disclose it where the law requires.',
    ],
  },
  {
    heading: 'How long we keep it',
    paragraphs: [
      'We keep enquiry correspondence for as long as needed to handle your enquiry and any resulting relationship, then delete or anonymise it.',
    ],
  },
  {
    heading: 'Your rights',
    paragraphs: ['You can ask us at any time to:'],
    bullets: [
      'Tell you what personal data we hold about you and give you a copy',
      'Correct or complete it',
      'Delete it, or restrict or object to how we use it',
      'Withdraw your consent',
    ],
  },
  {
    heading: 'Complaints',
    paragraphs: [
      'If you are unhappy with how we handle your data, please contact us first. You also have the right to complain to the Office of the Data Protection Commissioner in Kenya.',
    ],
  },
  {
    heading: 'Cookies',
    paragraphs: [
      'At the time of writing, this website does not set advertising or analytics cookies. If that changes, we will update this notice.',
    ],
  },
  {
    heading: 'Data inside a DER deployment',
    paragraphs: [
      'Evidence and user data processed inside a DER deployment are governed by the agreement with each institution, not by this website notice.',
    ],
  },
  {
    heading: 'Changes to this notice',
    paragraphs: ['We may update this notice. The date at the top shows the latest version.'],
  },
];

export const termsHero = {
  eyebrow: 'Terms of use',
  title: 'The terms for using this website.',
  intro: 'Plain terms for visitors to the DACORIS EvidenceReach website.',
  image: photo('officeWorkspace', 2400),
} as const;

export const termsIntro =
  'By using this website you agree to these terms. If you do not agree, please do not use it.';

export const termsSections: readonly LegalSection[] = [
  {
    heading: 'About this website',
    paragraphs: [
      'This website is operated by DACORIS EvidenceReach, a DACORIS Group product, to describe our platform and services and to let institutions get in touch.',
    ],
  },
  {
    heading: 'Using the website',
    paragraphs: ['You agree to use the website lawfully. You must not:'],
    bullets: [
      'Attempt to disrupt, overload or gain unauthorised access to the website or its systems',
      'Use it to send unlawful, harmful or misleading material',
      'Copy or scrape it in a way that breaches these terms',
    ],
  },
  {
    heading: 'Information on this website',
    paragraphs: [
      'The website gives general information about DER. Capabilities are described as demonstrated, configurable or planned, and may change. Figures shown are illustrative unless stated otherwise. Nothing here is an offer. Scope, pricing and commitments are set out in a written agreement.',
    ],
  },
  {
    heading: 'Intellectual property',
    paragraphs: [
      'The content, name and marks on this website belong to DACORIS Group or its licensors. You may view and share pages for your own evaluation, but you may not reproduce or reuse them commercially without our written permission.',
    ],
  },
  {
    heading: 'Links to other sites',
    paragraphs: [
      'This website may link to other sites, including www.dacoris.com. We are not responsible for the content or practices of sites we do not operate.',
    ],
  },
  {
    heading: 'Disclaimer and liability',
    paragraphs: [
      'The website is provided as it is. To the extent the law allows, we exclude liability for loss arising from your use of it or reliance on its content.',
    ],
  },
  {
    heading: 'Governing law',
    paragraphs: ['These terms are governed by the laws of Kenya.'],
  },
  {
    heading: 'Contact',
    paragraphs: ['Questions about these terms can be sent to info@dacoris.com.'],
  },
];
