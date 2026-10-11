'use client';

import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import { brand } from '@/theme/tokens';

export default function CopyField({ label, value }: { label: string; value: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard can be blocked (insecure origin, permissions); the text stays selectable.
    }
  };

  return (
    <Box>
      <Typography sx={{ fontSize: '0.76rem', fontWeight: 700, color: brand.inkSoft, mb: 0.75, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
        {label}
      </Typography>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          pl: 1.75,
          pr: 0.5,
          py: 0.5,
          borderRadius: '5px',
          border: `1px solid ${brand.line}`,
          backgroundColor: '#ffffff',
        }}
      >
        <Typography sx={{ flex: 1, minWidth: 0, fontSize: '0.92rem', fontWeight: 600, color: brand.ink, userSelect: 'all', overflowWrap: 'anywhere' }}>
          {value}
        </Typography>
        <Tooltip title={copied ? 'Copied' : 'Copy'}>
          <IconButton size="small" onClick={copy} aria-label={`Copy ${label.toLowerCase()}`}>
            {copied ? (
              <CheckOutlinedIcon sx={{ fontSize: 18, color: brand.greenInk }} />
            ) : (
              <ContentCopyOutlinedIcon sx={{ fontSize: 18 }} />
            )}
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  );
}
