'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Pagination from '@mui/material/Pagination';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';
import { brand } from '@/theme/tokens';
import {
  formatNewsDate,
  getNewsAuthors,
  getNewsDates,
  newsEmpty,
  newsItems,
  type NewsItem,
} from '@/content/news';

const ALL = 'all';
const PAGE_SIZE = 6;

function matchesFilters(item: NewsItem, author: string, date: string, titleQuery: string) {
  if (author !== ALL && item.author !== author) return false;
  if (date !== ALL && item.date !== date) return false;
  if (titleQuery.trim()) {
    const query = titleQuery.trim().toLowerCase();
    if (!item.title.toLowerCase().includes(query)) return false;
  }
  return true;
}

function NewsCard({ item }: { item: NewsItem }) {
  return (
    <Box
      component={Link}
      href={item.href}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        borderRadius: 3,
        border: `1px solid ${brand.line}`,
        backgroundColor: brand.surface,
        overflow: 'hidden',
        textDecoration: 'none',
        color: 'inherit',
        transition: 'border-color 180ms ease, transform 180ms ease, box-shadow 180ms ease',
        '&:hover': {
          borderColor: brand.mintLine,
          transform: 'translateY(-3px)',
          boxShadow: '0 16px 32px rgba(13, 15, 34, 0.08)',
        },
      }}
    >
      <Box sx={{ position: 'relative', aspectRatio: '16 / 9', backgroundColor: brand.line }}>
        <Image
          src={item.image.src}
          alt={item.image.alt}
          fill
          sizes="(max-width: 900px) 100vw, 420px"
          style={{ objectFit: 'cover' }}
        />
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, p: 3 }}>
        <Typography sx={{ fontSize: '0.8rem', fontWeight: 700, color: brand.greenInk, mb: 0.5 }}>
          {formatNewsDate(item.date)}
        </Typography>
        <Typography sx={{ fontSize: '0.78rem', fontWeight: 600, color: brand.inkSoft, mb: 1 }}>
          {item.author}
        </Typography>
        <Typography sx={{ fontWeight: 700, fontSize: '1.12rem', color: brand.greenInk, mb: 1.25, lineHeight: 1.35 }}>
          {item.title}
        </Typography>
        <Typography variant="body2" sx={{ flex: 1, mb: 2 }}>
          {item.summary}
        </Typography>
        <Typography
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 0.5,
            fontSize: '0.88rem',
            fontWeight: 600,
            color: brand.greenInk,
          }}
        >
          Read more
          <ArrowForwardOutlinedIcon sx={{ fontSize: 16 }} />
        </Typography>
      </Box>
    </Box>
  );
}

export default function NewsListing() {
  const authors = getNewsAuthors();
  const dates = getNewsDates();

  const [author, setAuthor] = useState(ALL);
  const [date, setDate] = useState(ALL);
  const [titleQuery, setTitleQuery] = useState('');
  const [page, setPage] = useState(1);

  const filteredItems = useMemo(
    () => newsItems.filter((item) => matchesFilters(item, author, date, titleQuery)),
    [author, date, titleQuery],
  );

  const pageCount = Math.max(1, Math.ceil(filteredItems.length / PAGE_SIZE));

  const paginatedItems = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return filteredItems.slice(start, start + PAGE_SIZE);
  }, [filteredItems, page]);

  useEffect(() => {
    setPage(1);
  }, [author, date, titleQuery]);

  useEffect(() => {
    if (page > pageCount) setPage(pageCount);
  }, [page, pageCount]);

  const filtersActive = author !== ALL || date !== ALL || titleQuery.trim().length > 0;

  const clearFilters = () => {
    setAuthor(ALL);
    setDate(ALL);
    setTitleQuery('');
    setPage(1);
  };

  const filterPanel = (
    <Box
      sx={{
        p: 2.5,
        borderRadius: 3,
        border: `1px solid ${brand.line}`,
        backgroundColor: brand.surface,
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 1, mb: 2.5 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
          <FilterListOutlinedIcon sx={{ fontSize: 18, color: brand.greenInk }} />
          <Typography sx={{ fontWeight: 700, fontSize: '0.95rem', color: brand.ink }}>Filter</Typography>
        </Box>
        {filtersActive ? (
          <Button size="small" onClick={clearFilters} sx={{ minWidth: 0, px: 1, fontSize: '0.78rem' }}>
            Clear
          </Button>
        ) : null}
      </Box>

      <TextField
        fullWidth
        size="small"
        label="Title"
        value={titleQuery}
        onChange={(event) => setTitleQuery(event.target.value)}
        placeholder="Search by title"
        sx={{ mb: 2 }}
      />

      <FormControl fullWidth size="small" sx={{ mb: 2 }}>
        <InputLabel id="news-author-label">Author</InputLabel>
        <Select
          labelId="news-author-label"
          label="Author"
          value={author}
          onChange={(event) => setAuthor(event.target.value)}
        >
          <MenuItem value={ALL}>All authors</MenuItem>
          {authors.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl fullWidth size="small">
        <InputLabel id="news-date-label">Date</InputLabel>
        <Select labelId="news-date-label" label="Date" value={date} onChange={(event) => setDate(event.target.value)}>
          <MenuItem value={ALL}>All dates</MenuItem>
          {dates.map((option) => (
            <MenuItem key={option} value={option}>
              {formatNewsDate(option)}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );

  if (newsItems.length === 0) {
    return (
      <Box
        sx={{
          maxWidth: 720,
          p: { xs: 3, md: 5 },
          borderRadius: 4,
          border: `1px solid ${brand.line}`,
          backgroundColor: brand.surface,
        }}
      >
        <Typography variant="h3" sx={{ mb: 1.5 }}>
          {newsEmpty.title}
        </Typography>
        <Typography variant="body2" sx={{ mb: 3 }}>
          {newsEmpty.body}
        </Typography>
        <Button component={Link} href="/contact" variant="contained" color="primary">
          Get in touch
        </Button>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', lg: '280px minmax(0, 1fr)' },
        gap: { xs: 3, lg: 4 },
        alignItems: 'start',
      }}
    >
      <Box
        sx={{
          order: { xs: 1, lg: 1 },
          position: { lg: 'sticky' },
          top: { lg: 96 },
        }}
      >
        {filterPanel}
      </Box>

      <Box sx={{ order: { xs: 2, lg: 2 }, minWidth: 0 }}>
        {filteredItems.length === 0 ? (
          <Box
            sx={{
              p: { xs: 3, md: 4 },
              borderRadius: 3,
              border: `1px solid ${brand.line}`,
              backgroundColor: brand.surface,
            }}
          >
            <Typography variant="h4" sx={{ mb: 1 }}>
              No articles match these filters.
            </Typography>
            <Typography variant="body2" sx={{ mb: 2.5 }}>
              Try clearing one or more filters to see published updates.
            </Typography>
            <Button variant="outlined" onClick={clearFilters}>
              Clear filters
            </Button>
          </Box>
        ) : (
          <>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
                gap: 2.5,
              }}
            >
              {paginatedItems.map((item) => (
                <NewsCard key={item.href} item={item} />
              ))}
            </Box>

            {pageCount > 1 ? (
              <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                <Pagination
                  count={pageCount}
                  page={page}
                  onChange={(_, value) => {
                    setPage(value);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  color="primary"
                  shape="rounded"
                  size="medium"
                />
              </Box>
            ) : null}

            <Typography
              sx={{
                mt: pageCount > 1 ? 1.5 : 3,
                textAlign: 'center',
                fontSize: '0.82rem',
                color: brand.inkSoft,
              }}
            >
              Showing {(page - 1) * PAGE_SIZE + 1}–{Math.min(page * PAGE_SIZE, filteredItems.length)} of{' '}
              {filteredItems.length} {filteredItems.length === 1 ? 'article' : 'articles'}
            </Typography>
          </>
        )}
      </Box>
    </Box>
  );
}
