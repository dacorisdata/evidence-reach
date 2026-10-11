'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import EventOutlinedIcon from '@mui/icons-material/EventOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { accent, brand } from '@/theme/tokens';
import { site } from '@/content/site';
import {
  careersEmpty,
  formatDeadline,
  getOpportunityTypes,
  isOpen,
  opportunities,
  type Opportunity,
} from '@/content/careers';
import OpportunityStatus from './OpportunityStatus';
import DownloadButton from './DownloadButton';
import { useNow } from './useOpenStatus';

const ALL = 'all';
type StatusFilter = 'open' | 'closed' | typeof ALL;

function MetaItem({ icon: Icon, children }: { icon: typeof PlaceOutlinedIcon; children: React.ReactNode }) {
  return (
    <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.6, color: brand.inkSoft }}>
      <Icon sx={{ fontSize: 16, color: brand.greenInk }} />
      <Typography sx={{ fontSize: '0.84rem', fontWeight: 500 }}>{children}</Typography>
    </Box>
  );
}

function TypeBadge({ type }: { type: Opportunity['type'] }) {
  const institutional = type === 'Institutional partnership';
  const tone = institutional ? accent.indigo : accent.teal;
  const Icon = institutional ? ApartmentOutlinedIcon : PersonOutlineOutlinedIcon;
  return (
    <Box
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 0.6,
        px: 1.1,
        py: 0.35,
        borderRadius: '4px',
        backgroundColor: tone.wash,
        color: tone.main,
      }}
    >
      <Icon sx={{ fontSize: 14 }} />
      <Typography sx={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.02em' }}>{type}</Typography>
    </Box>
  );
}

function OpportunityRow({ item, open }: { item: Opportunity; open: boolean }) {
  const href = `/careers/${item.slug}`;
  return (
    <Box
      component="article"
      sx={{
        position: 'relative',
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: 'minmax(0, 1fr) auto' },
        gap: { xs: 2.5, md: 4 },
        alignItems: 'center',
        p: { xs: 3, md: 3.5 },
        borderRadius: '5px',
        border: `1px solid ${brand.line}`,
        backgroundColor: '#ffffff',
        opacity: open ? 1 : 0.78,
        transition: 'border-color 180ms ease, box-shadow 180ms ease',
        '&::before': {
          content: '""',
          position: 'absolute',
          left: -1,
          top: 20,
          bottom: 20,
          width: 3,
          borderRadius: 3,
          backgroundColor: open ? brand.green : brand.line,
        },
        '&:hover': {
          borderColor: brand.mintLine,
          boxShadow: '0 16px 32px rgba(13, 15, 34, 0.07)',
        },
      }}
    >
      <Box sx={{ minWidth: 0 }}>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 1, mb: 1.5 }}>
          <TypeBadge type={item.type} />
          <OpportunityStatus deadline={item.deadline} showCountdown />
        </Box>
        <Typography
          component={Link}
          href={href}
          sx={{
            display: 'inline-block',
            fontWeight: 700,
            fontSize: { xs: '1.2rem', md: '1.35rem' },
            lineHeight: 1.3,
            color: brand.ink,
            textDecoration: 'none',
            mb: 1,
            '&:hover': { color: brand.greenInk },
          }}
        >
          {item.title}
        </Typography>
        <Typography variant="body2" sx={{ mb: 2, maxWidth: 680 }}>
          {item.summary}
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: { xs: 1.5, md: 3 } }}>
          <MetaItem icon={PlaceOutlinedIcon}>{item.location}</MetaItem>
          <MetaItem icon={WorkOutlineOutlinedIcon}>{item.workMode}</MetaItem>
          <MetaItem icon={EventOutlinedIcon}>
            {open ? 'Apply by' : 'Closed'} {formatDeadline(item.deadline)}
          </MetaItem>
        </Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'row', md: 'column' },
          flexWrap: 'wrap',
          gap: 1.25,
          minWidth: { md: 200 },
        }}
      >
        <Button
          component={Link}
          href={href}
          variant="contained"
          color="primary"
          endIcon={<ArrowForwardOutlinedIcon />}
          sx={{ flex: { xs: '1 1 160px', md: 'none' } }}
        >
          View details
        </Button>
        <DownloadButton document={item.document} sx={{ flex: { xs: '1 1 160px', md: 'none' } }} />
      </Box>
    </Box>
  );
}

export default function CareersListing() {
  const now = useNow();
  const types = getOpportunityTypes();
  const [type, setType] = useState<string>(ALL);
  const [status, setStatus] = useState<StatusFilter>(ALL);
  const [query, setQuery] = useState('');

  const rows = useMemo(() => {
    const q = query.trim().toLowerCase();
    return opportunities
      .map((item) => ({ item, open: isOpen(item.deadline, now) }))
      .filter(({ item, open }) => {
        if (type !== ALL && item.type !== type) return false;
        if (status === 'open' && !open) return false;
        if (status === 'closed' && open) return false;
        if (q && !`${item.title} ${item.summary} ${item.department}`.toLowerCase().includes(q)) return false;
        return true;
      })
      .sort((a, b) => {
        if (a.open !== b.open) return a.open ? -1 : 1;
        const byDeadline = new Date(a.item.deadline).getTime() - new Date(b.item.deadline).getTime();
        return a.open ? byDeadline : -byDeadline;
      });
  }, [now, type, status, query]);

  const openCount = opportunities.filter((item) => isOpen(item.deadline, now)).length;
  const filtersActive = type !== ALL || status !== ALL || query.trim().length > 0;

  const clearFilters = () => {
    setType(ALL);
    setStatus(ALL);
    setQuery('');
  };

  if (opportunities.length === 0) {
    return (
      <Box sx={{ maxWidth: 720, p: { xs: 3, md: 5 }, borderRadius: '5px', border: `1px solid ${brand.line}`, backgroundColor: brand.surface }}>
        <Typography variant="h3" sx={{ mb: 1.5 }}>
          {careersEmpty.title}
        </Typography>
        <Typography variant="body2" sx={{ mb: 3 }}>
          {careersEmpty.body}
        </Typography>
        <Button component="a" href={site.emailHref} variant="contained" color="primary">
          Email {site.email}
        </Button>
      </Box>
    );
  }

  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: { xs: 'stretch', md: 'center' },
          justifyContent: 'space-between',
          gap: 2,
          mb: 3,
          p: { xs: 2, md: 2.25 },
          borderRadius: '5px',
          border: `1px solid ${brand.line}`,
          backgroundColor: brand.surface,
        }}
      >
        <TextField
          size="small"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search opportunities"
          sx={{ flex: '1 1 240px', maxWidth: { md: 320 }, backgroundColor: '#ffffff' }}
          slotProps={{
            htmlInput: { 'aria-label': 'Search opportunities' },
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <SearchOutlinedIcon sx={{ fontSize: 18 }} />
                </InputAdornment>
              ),
            },
          }}
        />

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, alignItems: 'center' }}>
          <ToggleButtonGroup
            size="small"
            exclusive
            value={type}
            onChange={(_, value) => value && setType(value)}
            aria-label="Opportunity type"
            sx={{ backgroundColor: '#ffffff', flexWrap: 'wrap' }}
          >
            <ToggleButton value={ALL} sx={{ textTransform: 'none', px: 1.75 }}>
              All types
            </ToggleButton>
            {types.map((option) => (
              <ToggleButton key={option} value={option} sx={{ textTransform: 'none', px: 1.75 }}>
                {option === 'Institutional partnership' ? 'Institutions' : 'Individuals'}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>

          <ToggleButtonGroup
            size="small"
            exclusive
            value={status}
            onChange={(_, value) => value && setStatus(value)}
            aria-label="Status"
            sx={{ backgroundColor: '#ffffff' }}
          >
            <ToggleButton value={ALL} sx={{ textTransform: 'none', px: 1.75 }}>
              Any status
            </ToggleButton>
            <ToggleButton value="open" sx={{ textTransform: 'none', px: 1.75 }}>
              Open
            </ToggleButton>
            <ToggleButton value="closed" sx={{ textTransform: 'none', px: 1.75 }}>
              Closed
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 2, mb: 2 }}>
        <Typography sx={{ fontSize: '0.9rem', color: brand.inkSoft }}>
          <Box component="span" sx={{ fontWeight: 700, color: brand.ink }}>
            {openCount}
          </Box>{' '}
          open {openCount === 1 ? 'opportunity' : 'opportunities'}
          {rows.length !== opportunities.length ? ` · showing ${rows.length} of ${opportunities.length}` : ''}
        </Typography>
        {filtersActive ? (
          <Button size="small" onClick={clearFilters} sx={{ minWidth: 0 }}>
            Clear filters
          </Button>
        ) : null}
      </Box>

      {rows.length === 0 ? (
        <Box sx={{ p: { xs: 3, md: 4 }, borderRadius: '5px', border: `1px solid ${brand.line}`, backgroundColor: brand.surface }}>
          <Typography variant="h4" sx={{ mb: 1 }}>
            No opportunities match these filters.
          </Typography>
          <Typography variant="body2" sx={{ mb: 2.5 }}>
            Try clearing a filter, or check back soon for new roles.
          </Typography>
          <Button variant="outlined" onClick={clearFilters}>
            Clear filters
          </Button>
        </Box>
      ) : (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {rows.map(({ item, open }) => (
            <OpportunityRow key={item.slug} item={item} open={open} />
          ))}
        </Box>
      )}
    </Box>
  );
}
