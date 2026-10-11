'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import { brand } from '@/theme/tokens';
import { featuredCampaign, formatDeadline } from '@/content/careers';
import { useOpenStatus } from '@/components/careers/useOpenStatus';

const DISMISS_KEY = `der-announcement-dismissed:${featuredCampaign.deadline}`;

export default function AnnouncementBar() {
  const { open } = useOpenStatus(featuredCampaign.deadline);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    try {
      if (window.sessionStorage.getItem(DISMISS_KEY) === '1') setDismissed(true);
    } catch {
      // Storage can be unavailable (private mode); the bar just shows.
    }
  }, []);

  if (!open || dismissed) return null;

  const dismiss = () => {
    setDismissed(true);
    try {
      window.sessionStorage.setItem(DISMISS_KEY, '1');
    } catch {
      // ignore
    }
  };

  return (
    <Box
      role="region"
      aria-label="Announcement"
      sx={{ backgroundColor: brand.greenInk, color: '#ffffff' }}
    >
      <Box
        sx={{
          position: 'relative',
          maxWidth: 1240,
          mx: 'auto',
          px: { xs: 2, md: 4 },
          pr: { xs: 6, md: 7 },
          minHeight: 40,
          py: 0.75,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          component={Link}
          href="/careers"
          sx={{
            display: 'inline-flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            columnGap: 1,
            rowGap: 0.25,
            color: '#ffffff',
            textDecoration: 'none',
            textAlign: 'center',
            '&:hover .announce-cta': { textDecoration: 'underline' },
          }}
        >
          <Typography sx={{ fontSize: '0.82rem', fontWeight: 600, color: '#ffffff', display: { xs: 'none', sm: 'block' } }}>
            {featuredCampaign.barText}
          </Typography>
          <Typography sx={{ fontSize: '0.82rem', fontWeight: 600, color: '#ffffff', display: { xs: 'block', sm: 'none' } }}>
            We are hiring sales talent.
          </Typography>
          <Typography sx={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.8)', display: { xs: 'none', sm: 'block' } }}>
            Apply by {formatDeadline(featuredCampaign.deadline)}.
          </Typography>
          <Typography
            className="announce-cta"
            sx={{ fontSize: '0.82rem', fontWeight: 700, color: '#ffffff', display: 'inline-flex', alignItems: 'center', gap: 0.4 }}
          >
            View roles
            <ArrowForwardOutlinedIcon sx={{ fontSize: 15 }} />
          </Typography>
        </Box>
        <IconButton
          size="small"
          onClick={dismiss}
          aria-label="Dismiss announcement"
          sx={{ position: 'absolute', right: { xs: 8, md: 24 }, color: 'rgba(255,255,255,0.85)' }}
        >
          <CloseOutlinedIcon sx={{ fontSize: 18 }} />
        </IconButton>
      </Box>
    </Box>
  );
}
