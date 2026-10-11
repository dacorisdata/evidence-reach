'use client';

import Link from 'next/link';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import EventOutlinedIcon from '@mui/icons-material/EventOutlined';
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { brand } from '@/theme/tokens';
import { featuredCampaign, formatDeadline, getOpportunity, type Opportunity } from '@/content/careers';
import DownloadButton from '@/components/careers/DownloadButton';
import { useOpenStatus } from '@/components/careers/useOpenStatus';

export default function HiringBand() {
  const { open, daysLeft } = useOpenStatus(featuredCampaign.deadline);
  if (!open) return null;

  const roles = featuredCampaign.slugs
    .map(getOpportunity)
    .filter((item): item is Opportunity => Boolean(item));

  return (
    <Box component="section" aria-labelledby="hiring-band-title" sx={{ borderBottom: `1px solid ${brand.line}` }}>
      <Box sx={{ maxWidth: 1240, mx: 'auto', px: { xs: 2.5, md: 4 }, py: { xs: 5, md: 7 } }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'minmax(0, 1.1fr) minmax(0, 1fr)' },
            borderRadius: '5px',
            overflow: 'hidden',
            border: `1px solid ${brand.line}`,
            boxShadow: '0 24px 48px rgba(13, 15, 34, 0.08)',
          }}
        >
          {/* Message */}
          <Box
            sx={{
              position: 'relative',
              p: { xs: 3.5, md: 5 },
              backgroundColor: brand.footer,
              backgroundImage:
                'radial-gradient(circle at 100% 0%, rgba(66,198,134,0.22) 0%, rgba(66,198,134,0) 55%)',
            }}
          >
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1,
                px: 1.5,
                py: 0.6,
                mb: 2.5,
                borderRadius: 999,
                backgroundColor: 'rgba(66,198,134,0.14)',
                border: '1px solid rgba(66,198,134,0.4)',
              }}
            >
              <Box sx={{ width: 7, height: 7, borderRadius: '50%', backgroundColor: brand.green }} />
              <Typography variant="overline" sx={{ color: '#ffffff', fontSize: '0.7rem', lineHeight: 1.6 }}>
                {featuredCampaign.eyebrow}
              </Typography>
            </Box>

            <Typography
              id="hiring-band-title"
              variant="h2"
              sx={{ color: '#ffffff', fontSize: { xs: '1.7rem', md: '2.15rem' }, mb: 1.75, maxWidth: 520 }}
            >
              {featuredCampaign.title}
            </Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.76)', lineHeight: 1.7, mb: 3, maxWidth: 520 }}>
              {featuredCampaign.body}
            </Typography>

            <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, mb: 3.5 }}>
              <EventOutlinedIcon sx={{ fontSize: 18, color: brand.green }} />
              <Typography sx={{ color: '#ffffff', fontWeight: 600, fontSize: '0.92rem' }}>
                Apply by {formatDeadline(featuredCampaign.deadline, true)}
                {daysLeft <= 14 ? (
                  <Box component="span" sx={{ color: 'rgba(255,255,255,0.6)', fontWeight: 500 }}>
                    {' '}
                    · {daysLeft <= 1 ? 'last day' : `${daysLeft} days left`}
                  </Box>
                ) : null}
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
              <Button
                component={Link}
                href="/careers"
                variant="contained"
                color="primary"
                size="large"
                endIcon={<ArrowForwardOutlinedIcon />}
              >
                View opportunities
              </Button>
              <DownloadButton
                document={featuredCampaign.document}
                size="large"
                sx={{
                  color: '#ffffff',
                  borderColor: 'rgba(255,255,255,0.4)',
                  '&:hover': { borderColor: '#ffffff', backgroundColor: 'rgba(255,255,255,0.06)' },
                }}
              />
            </Box>
          </Box>

          {/* Roles */}
          <Box sx={{ p: { xs: 3, md: 4 }, backgroundColor: brand.surface, display: 'flex', flexDirection: 'column', gap: 1.5, justifyContent: 'center' }}>
            <Typography variant="overline" sx={{ color: brand.inkSoft, mb: 0.5 }}>
              Two ways to join
            </Typography>
            {roles.map((role) => {
              const Icon = role.type === 'Institutional partnership' ? ApartmentOutlinedIcon : PersonOutlineOutlinedIcon;
              return (
                <Box
                  key={role.slug}
                  component={Link}
                  href={`/careers/${role.slug}`}
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: '44px minmax(0, 1fr) 20px',
                    gap: 2,
                    alignItems: 'center',
                    p: 2.25,
                    borderRadius: '5px',
                    border: `1px solid ${brand.line}`,
                    backgroundColor: '#ffffff',
                    textDecoration: 'none',
                    color: 'inherit',
                    transition: 'border-color 180ms ease, transform 180ms ease',
                    '&:hover': { borderColor: brand.mintLine, transform: 'translateX(3px)' },
                    '&:hover .hiring-arrow': { color: brand.greenInk },
                  }}
                >
                  <Box
                    sx={{
                      width: 44,
                      height: 44,
                      borderRadius: '5px',
                      display: 'grid',
                      placeItems: 'center',
                      backgroundColor: brand.mintWash,
                    }}
                  >
                    <Icon sx={{ fontSize: 22, color: brand.greenInk }} />
                  </Box>
                  <Box sx={{ minWidth: 0 }}>
                    <Typography sx={{ fontWeight: 700, color: brand.ink, lineHeight: 1.35 }}>{role.title}</Typography>
                    <Typography sx={{ fontSize: '0.84rem', color: brand.inkSoft, mt: 0.25 }}>
                      {role.type === 'Institutional partnership'
                        ? 'SaaS resellers, sales agencies and consultancies'
                        : 'B2B and SaaS sales professionals'}
                    </Typography>
                  </Box>
                  <ArrowForwardOutlinedIcon className="hiring-arrow" sx={{ fontSize: 20, color: brand.inkSoft, transition: 'color 180ms ease' }} />
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
