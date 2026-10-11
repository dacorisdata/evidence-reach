import Link from 'next/link';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import PictureAsPdfOutlinedIcon from '@mui/icons-material/PictureAsPdfOutlined';
import { accent, brand } from '@/theme/tokens';
import Section from '@/components/shared/Section';
import {
  aboutDerCommunications,
  formatDeadline,
  formatPosted,
  getOpportunity,
  mailtoFor,
  portfolioNote,
  priorityPortfolios,
  type Opportunity,
  type OpportunityBlock,
} from '@/content/careers';
import OpportunityStatus from './OpportunityStatus';
import DownloadButton from './DownloadButton';
import CopyField from './CopyField';
import ClosedNotice from './ClosedNotice';

function SectionTitle({ children, id }: { children: React.ReactNode; id?: string }) {
  return (
    <Box id={id} sx={{ display: 'flex', alignItems: 'center', gap: 1.25, mb: 2.5, scrollMarginTop: 110 }}>
      <Box sx={{ width: 22, height: 2, borderRadius: 2, bgcolor: brand.green, flexShrink: 0 }} />
      <Typography variant="h3" sx={{ fontSize: { xs: '1.3rem', md: '1.45rem' } }}>
        {children}
      </Typography>
    </Box>
  );
}

function NumberedBlock({ block }: { block: OpportunityBlock }) {
  return (
    <Box component="ol" sx={{ listStyle: 'none', p: 0, m: 0, display: 'flex', flexDirection: 'column', gap: 1.5 }}>
      {block.items.map((item, index) => (
        <Box
          component="li"
          key={item.lead}
          sx={{
            display: 'grid',
            gridTemplateColumns: '36px minmax(0, 1fr)',
            gap: 2,
            p: 2.25,
            borderRadius: '5px',
            border: `1px solid ${brand.line}`,
            backgroundColor: '#ffffff',
          }}
        >
          <Box
            sx={{
              width: 36,
              height: 36,
              borderRadius: '50%',
              display: 'grid',
              placeItems: 'center',
              backgroundColor: brand.mintWash,
              color: brand.greenInk,
              fontWeight: 700,
              fontSize: '0.9rem',
            }}
          >
            {String(index + 1).padStart(2, '0')}
          </Box>
          <Box>
            <Typography sx={{ fontWeight: 700, color: brand.ink, mb: 0.4 }}>{item.lead.replace(/\.$/, '')}</Typography>
            <Typography variant="body2">{item.body}</Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
}

function CheckBlock({ block }: { block: OpportunityBlock }) {
  return (
    <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0, display: 'flex', flexDirection: 'column', gap: 2.25 }}>
      {block.items.map((item) => (
        <Box component="li" key={item.lead} sx={{ display: 'flex', gap: 1.5 }}>
          <CheckCircleOutlineOutlinedIcon sx={{ fontSize: 22, color: brand.greenInk, mt: '2px', flexShrink: 0 }} />
          <Typography sx={{ fontSize: '1rem', lineHeight: 1.7, color: brand.inkSoft }}>
            <Box component="span" sx={{ fontWeight: 700, color: brand.ink }}>
              {item.lead}
            </Box>{' '}
            {item.body}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}

function FactRow({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <Box sx={{ display: 'grid', gridTemplateColumns: '108px minmax(0, 1fr)', gap: 1.5, py: 1.25, borderBottom: `1px solid ${brand.line}` }}>
      <Typography sx={{ fontSize: '0.8rem', fontWeight: 600, color: brand.inkSoft }}>{label}</Typography>
      <Typography component="div" sx={{ fontSize: '0.88rem', fontWeight: 600, color: brand.ink }}>
        {value}
      </Typography>
    </Box>
  );
}

function jobPostingJsonLd(item: Opportunity) {
  const description = [
    ...item.overview,
    item.responsibilities.title,
    ...item.responsibilities.items.map((entry) => `${entry.lead} ${entry.body}`),
    item.requirements.title,
    ...item.requirements.items.map((entry) => `${entry.lead} ${entry.body}`),
  ]
    .map((line) => `<p>${line}</p>`)
    .join('');

  return {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: item.title,
    description,
    datePosted: item.posted,
    validThrough: item.deadline,
    employmentType: item.type === 'Institutional partnership' ? 'CONTRACTOR' : 'OTHER',
    hiringOrganization: {
      '@type': 'Organization',
      name: 'DACORIS EvidenceReach Communications',
      sameAs: 'https://www.dacoris.com',
    },
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Strathmore University',
        addressLocality: 'Nairobi',
        addressCountry: 'KE',
      },
    },
    directApply: false,
  };
}

export default function OpportunityPage({ opportunity: item }: { opportunity: Opportunity }) {
  const related = (item.related ?? []).map(getOpportunity).filter((entry): entry is Opportunity => Boolean(entry));
  const mailto = mailtoFor(item);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingJsonLd(item)).replace(/</g, '\\u003c') }}
      />

      {/* Header */}
      <Box component="section" sx={{ position: 'relative', overflow: 'hidden', backgroundColor: brand.footer }}>
        <Image src={item.image.src} alt="" fill priority sizes="100vw" style={{ objectFit: 'cover', opacity: 0.32 }} />
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(90deg, rgba(13,15,34,0.96) 0%, rgba(13,15,34,0.82) 55%, rgba(13,15,34,0.6) 100%)',
          }}
        />
        <Box
          sx={{
            position: 'relative',
            maxWidth: 1240,
            mx: 'auto',
            px: { xs: 2.5, md: 4 },
            pt: { xs: 5, md: 7 },
            pb: { xs: 5, md: 7 },
          }}
        >
          <Box
            component="nav"
            aria-label="Breadcrumb"
            sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 1, mb: 3.5, fontSize: '0.84rem' }}
          >
            {[
              { label: 'Home', href: '/' },
              { label: 'Resources', href: '/resources' },
              { label: 'Careers', href: '/careers' },
            ].map((crumb) => (
              <Box key={crumb.href} sx={{ display: 'inline-flex', alignItems: 'center', gap: 1 }}>
                <Box
                  component={Link}
                  href={crumb.href}
                  sx={{ color: 'rgba(255,255,255,0.68)', textDecoration: 'none', '&:hover': { color: '#ffffff' } }}
                >
                  {crumb.label}
                </Box>
                <Box component="span" sx={{ color: 'rgba(255,255,255,0.35)' }}>
                  /
                </Box>
              </Box>
            ))}
            <Box component="span" aria-current="page" sx={{ color: '#ffffff', fontWeight: 600 }}>
              {item.shortTitle}
            </Box>
          </Box>

          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2.5 }}>
            <Box
              sx={{
                px: 1.25,
                py: 0.4,
                borderRadius: 999,
                border: '1px solid rgba(255,255,255,0.24)',
                backgroundColor: 'rgba(255,255,255,0.08)',
              }}
            >
              <Typography sx={{ fontSize: '0.74rem', fontWeight: 700, color: '#ffffff', lineHeight: 1.4 }}>
                {item.type}
              </Typography>
            </Box>
            <OpportunityStatus deadline={item.deadline} showCountdown onDark />
          </Box>

          <Typography variant="h1" sx={{ color: '#ffffff', fontSize: 'clamp(2rem, 4vw, 3rem)', maxWidth: 820, mb: 2 }}>
            {item.title}
          </Typography>
          <Typography sx={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.05rem', lineHeight: 1.65, maxWidth: 680, mb: 3.5 }}>
            {item.summary}
          </Typography>

          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
            <DownloadButton document={item.document} variant="contained" size="large" label="Download full advert" />
            <Button
              component="a"
              href={mailto}
              variant="outlined"
              size="large"
              startIcon={<EmailOutlinedIcon />}
              sx={{
                color: '#ffffff',
                borderColor: 'rgba(255,255,255,0.4)',
                '&:hover': { borderColor: '#ffffff', backgroundColor: 'rgba(255,255,255,0.06)' },
              }}
            >
              Apply by email
            </Button>
          </Box>
        </Box>
      </Box>

      <Section bgcolor={brand.surface} sx={{ '& > div': { py: { xs: 6, md: 9 } } }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', lg: 'minmax(0, 1fr) 340px' },
            gap: { xs: 5, lg: 7 },
            alignItems: 'start',
          }}
        >
          {/* Main column */}
          <Box sx={{ minWidth: 0, order: { xs: 2, lg: 1 } }}>
            <ClosedNotice deadline={item.deadline} />

            <Box component="section" sx={{ mb: 6 }}>
              <SectionTitle>The opportunity</SectionTitle>
              {item.overview.map((paragraph) => (
                <Typography key={paragraph} sx={{ fontSize: '1.05rem', lineHeight: 1.8, color: brand.inkSoft, mb: 2 }}>
                  {paragraph}
                </Typography>
              ))}
            </Box>

            <Box component="section" sx={{ mb: 6 }}>
              <SectionTitle>{item.responsibilities.title}</SectionTitle>
              <NumberedBlock block={item.responsibilities} />
            </Box>

            <Box component="section" sx={{ mb: 6 }}>
              <SectionTitle>{item.requirements.title}</SectionTitle>
              <CheckBlock block={item.requirements} />
            </Box>

            <Box component="section" sx={{ mb: 6 }}>
              <SectionTitle>Priority client portfolios</SectionTitle>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2.5 }}>
                {priorityPortfolios.map((portfolio) => (
                  <Box
                    key={portfolio}
                    sx={{
                      px: 1.5,
                      py: 0.75,
                      borderRadius: '5px',
                      border: `1px solid ${accent.indigo.line}`,
                      backgroundColor: accent.indigo.wash,
                    }}
                  >
                    <Typography sx={{ fontSize: '0.86rem', fontWeight: 600, color: accent.indigo.main }}>{portfolio}</Typography>
                  </Box>
                ))}
              </Box>
              <Typography variant="body2">{portfolioNote}</Typography>
            </Box>

            <Box
              component="section"
              id="apply"
              sx={{
                scrollMarginTop: 110,
                p: { xs: 3, md: 4 },
                borderRadius: '5px',
                border: `1px solid ${brand.mintLine}`,
                backgroundColor: '#ffffff',
                mb: 6,
              }}
            >
              <SectionTitle>How to apply</SectionTitle>
              <Typography sx={{ fontSize: '1rem', lineHeight: 1.75, color: brand.inkSoft, mb: 3 }}>
                Email your application to{' '}
                <Box component="a" href={mailto} sx={{ color: brand.greenInk, fontWeight: 700 }}>
                  {item.application.email}
                </Box>{' '}
                no later than <strong>{formatDeadline(item.deadline, true)}</strong> (UTC+3).
              </Typography>

              <Typography sx={{ fontWeight: 700, color: brand.ink, mb: 1.5 }}>Include in your application</Typography>
              <Box
                component="ul"
                sx={{
                  listStyle: 'none',
                  p: 0,
                  m: 0,
                  mb: 3,
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, minmax(0, 1fr))' },
                  gap: 1.25,
                }}
              >
                {item.application.checklist.map((entry) => (
                  <Box component="li" key={entry} sx={{ display: 'flex', gap: 1 }}>
                    <CheckCircleOutlineOutlinedIcon sx={{ fontSize: 18, color: brand.greenInk, mt: '3px', flexShrink: 0 }} />
                    <Typography variant="body2">{entry}</Typography>
                  </Box>
                ))}
              </Box>

              <Box sx={{ mb: 3 }}>
                <CopyField label="Email subject line" value={item.application.subject} />
              </Box>

              <Typography variant="body2" sx={{ mb: 3 }}>
                {item.application.note}
              </Typography>

              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
                <Button component="a" href={mailto} variant="contained" color="primary" startIcon={<EmailOutlinedIcon />}>
                  Start your application
                </Button>
                <DownloadButton document={item.document} />
              </Box>
            </Box>

            <Box component="section">
              <SectionTitle>About DER Communications</SectionTitle>
              {aboutDerCommunications.map((paragraph) => (
                <Typography key={paragraph} sx={{ fontSize: '1rem', lineHeight: 1.8, color: brand.inkSoft, mb: 2 }}>
                  {paragraph}
                </Typography>
              ))}
              <Box
                component={Link}
                href="/about"
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 0.5,
                  fontWeight: 600,
                  fontSize: '0.92rem',
                  color: brand.greenInk,
                  textDecoration: 'none',
                  '&:hover': { textDecoration: 'underline' },
                }}
              >
                Learn more about EvidenceReach
                <ArrowForwardOutlinedIcon sx={{ fontSize: 16 }} />
              </Box>
            </Box>
          </Box>

          {/* Sidebar */}
          <Box
            component="aside"
            sx={{ order: { xs: 1, lg: 2 }, position: { lg: 'sticky' }, top: { lg: 100 }, display: 'flex', flexDirection: 'column', gap: 2.5 }}
          >
            <Box sx={{ p: 3, borderRadius: '5px', border: `1px solid ${brand.line}`, backgroundColor: '#ffffff' }}>
              <Typography variant="overline" sx={{ color: brand.greenInk, display: 'block', mb: 1 }}>
                At a glance
              </Typography>
              <Box sx={{ mb: 2.5 }}>
                <FactRow label="Status" value={<OpportunityStatus deadline={item.deadline} showCountdown />} />
                <FactRow label="Type" value={item.type} />
                <FactRow label="Team" value={item.department} />
                <FactRow label="Location" value={item.location} />
                <FactRow label="Work mode" value={item.workMode} />
                <FactRow label="Engagement" value={item.engagement} />
                <FactRow label="Posted" value={formatPosted(item.posted)} />
                <FactRow label="Deadline" value={formatDeadline(item.deadline, true)} />
              </Box>

              <DownloadButton document={item.document} variant="contained" fullWidth size="large" label="Download advert" />
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 0.75, mt: 1, mb: 2 }}>
                <PictureAsPdfOutlinedIcon sx={{ fontSize: 15, color: brand.inkSoft }} />
                <Typography sx={{ fontSize: '0.76rem', color: brand.inkSoft }}>
                  PDF · {item.document.size} · 2 pages
                </Typography>
              </Box>
              <Button component="a" href="#apply" variant="outlined" color="primary" fullWidth>
                How to apply
              </Button>
            </Box>

            {related.length > 0 ? (
              <Box sx={{ p: 3, borderRadius: '5px', border: `1px solid ${brand.line}`, backgroundColor: '#ffffff' }}>
                <Typography variant="overline" sx={{ color: brand.greenInk, display: 'block', mb: 1.5 }}>
                  Also in this call
                </Typography>
                {related.map((entry) => (
                  <Box
                    key={entry.slug}
                    component={Link}
                    href={`/careers/${entry.slug}`}
                    sx={{
                      display: 'block',
                      p: 1.75,
                      mx: -1.75,
                      borderRadius: '5px',
                      textDecoration: 'none',
                      color: 'inherit',
                      '&:hover': { backgroundColor: brand.surface },
                    }}
                  >
                    <Typography sx={{ fontWeight: 700, color: brand.ink, mb: 0.25 }}>{entry.title}</Typography>
                    <Typography sx={{ fontSize: '0.8rem', color: brand.inkSoft }}>{entry.type}</Typography>
                  </Box>
                ))}
                <Box
                  component={Link}
                  href="/careers"
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 0.5,
                    mt: 1,
                    fontWeight: 600,
                    fontSize: '0.86rem',
                    color: brand.greenInk,
                    textDecoration: 'none',
                  }}
                >
                  <ArrowBackOutlinedIcon sx={{ fontSize: 15 }} />
                  All opportunities
                </Box>
              </Box>
            ) : null}
          </Box>
        </Box>
      </Section>
    </>
  );
}
