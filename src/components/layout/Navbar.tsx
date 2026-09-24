'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import { brand } from '@/theme/tokens';
import { mainNav } from '@/content/nav';
import Wordmark from './Wordmark';

function isActive(pathname: string, href?: string) {
  if (!href) return false;
  return pathname === href;
}

export default function Navbar() {
  const pathname = usePathname();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearTimer = useCallback(() => {
    if (timer.current) {
      clearTimeout(timer.current);
      timer.current = null;
    }
  }, []);

  const openMenu = useCallback(
    (index: number) => {
      clearTimer();
      setOpenIndex(index);
    },
    [clearTimer],
  );

  const scheduleClose = useCallback(() => {
    clearTimer();
    timer.current = setTimeout(() => setOpenIndex(null), 140);
  }, [clearTimer]);

  useEffect(() => {
    setOpenIndex(null);
    setDrawerOpen(false);
  }, [pathname]);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setOpenIndex(null);
        setDrawerOpen(false);
      }
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => () => clearTimer(), [clearTimer]);

  const active = openIndex !== null ? mainNav[openIndex] : null;

  return (
    <Box
      component="header"
      sx={{
        position: 'sticky',
        top: 0,
        zIndex: 1200,
        backgroundColor: '#ffffff',
        borderBottom: `1px solid ${brand.line}`,
      }}
      onMouseLeave={scheduleClose}
    >
      <Box
        sx={{
          maxWidth: 1240,
          mx: 'auto',
          px: { xs: 2.5, md: 4 },
          height: 72,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 2,
        }}
      >
        <Wordmark />

        <Box
          component="nav"
          aria-label="Main"
          sx={{
            display: { xs: 'none', md: 'flex' },
            alignItems: 'center',
            gap: 0.5,
            height: '100%',
          }}
        >
          {mainNav.map((item, index) => {
            const sectionActive =
              item.children?.some((child) => isActive(pathname, child.href)) ?? false;
            const isOpen = openIndex === index;
            return (
              <Box
                key={item.label}
                onMouseEnter={() => openMenu(index)}
                onFocus={() => openMenu(index)}
                sx={{ height: '100%', display: 'flex', alignItems: 'center' }}
              >
                <Box
                  component="button"
                  type="button"
                  aria-expanded={isOpen}
                  aria-haspopup="true"
                  onClick={() => (isOpen ? setOpenIndex(null) : openMenu(index))}
                  sx={{
                    border: 0,
                    background: 'none',
                    cursor: 'pointer',
                    font: 'inherit',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.35,
                    px: 1.5,
                    py: 1,
                    color: brand.ink,
                    fontSize: '0.94rem',
                    fontWeight: sectionActive || isOpen ? 700 : 500,
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      left: 12,
                      right: 12,
                      bottom: -2,
                      height: 2,
                      borderRadius: 2,
                      backgroundColor: sectionActive ? brand.green : 'transparent',
                    },
                    '&:hover': { color: brand.greenInk },
                  }}
                >
                  {item.label}
                  <KeyboardArrowDownOutlinedIcon
                    sx={{
                      fontSize: 17,
                      transition: 'transform 160ms ease',
                      transform: isOpen ? 'rotate(180deg)' : 'none',
                    }}
                  />
                </Box>
              </Box>
            );
          })}
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.25 }}>
          <Button
            component={Link}
            href="/contact"
            variant="contained"
            color="primary"
            sx={{ display: { xs: 'none', sm: 'inline-flex' } }}
          >
            Request a demo
          </Button>
          <IconButton
            aria-label="Open menu"
            onClick={() => setDrawerOpen(true)}
            sx={{ display: { md: 'none' }, color: brand.ink }}
          >
            <MenuOutlinedIcon />
          </IconButton>
        </Box>
      </Box>

      {active?.children ? (
        <Box
          onMouseEnter={() => openIndex !== null && openMenu(openIndex)}
          sx={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: '100%',
            display: { xs: 'none', md: 'block' },
            backgroundColor: '#ffffff',
            borderTop: `1px solid ${brand.line}`,
            borderBottom: `1px solid ${brand.line}`,
            boxShadow: '0 22px 44px rgba(13, 15, 34, 0.10)',
            animation: 'megaIn 160ms ease-out',
            '@keyframes megaIn': {
              from: { opacity: 0, transform: 'translateY(-6px)' },
              to: { opacity: 1, transform: 'translateY(0)' },
            },
          }}
        >
          <Box
            sx={{
              maxWidth: 1240,
              mx: 'auto',
              px: { xs: 2.5, md: 4 },
              py: 3.5,
              display: 'flex',
              gap: 4,
              alignItems: 'stretch',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 1,
                flex: '1 1 auto',
                alignContent: 'flex-start',
              }}
            >
              {active.children.map((child) => (
                <Box
                  key={child.href}
                  component={Link}
                  href={child.href}
                  sx={{
                    flex: '1 1 240px',
                    maxWidth: 320,
                    textDecoration: 'none',
                    p: 1.75,
                    borderRadius: '5px',
                    border: '1px solid transparent',
                    transition: 'background-color 140ms ease, border-color 140ms ease',
                    '&:hover': {
                      backgroundColor: brand.mintWash,
                      borderColor: brand.mintLine,
                    },
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.6, mb: 0.5 }}>
                    <Typography
                      sx={{
                        fontSize: '0.95rem',
                        fontWeight: 700,
                        color: isActive(pathname, child.href) ? brand.greenInk : brand.ink,
                      }}
                    >
                      {child.label}
                    </Typography>
                    <ArrowForwardOutlinedIcon sx={{ fontSize: 15, color: brand.inkSoft }} />
                  </Box>
                  <Typography sx={{ fontSize: '0.85rem', color: brand.inkSoft, lineHeight: 1.55 }}>
                    {child.blurb}
                  </Typography>
                </Box>
              ))}
            </Box>

            {active.featured ? (
              <Box
                component={Link}
                href={active.featured.href}
                sx={{
                  flex: '0 0 300px',
                  textDecoration: 'none',
                  backgroundColor: brand.mintWash,
                  border: `1px solid ${brand.mintLine}`,
                  borderRadius: '5px',
                  p: 2.5,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <Typography variant="overline" sx={{ color: brand.greenInk }}>
                  {active.featured.eyebrow}
                </Typography>
                <Typography sx={{ fontSize: '1.02rem', fontWeight: 700, color: brand.ink, mb: 0.75 }}>
                  {active.featured.title}
                </Typography>
                <Typography sx={{ fontSize: '0.86rem', color: brand.inkSoft, lineHeight: 1.6, mb: 1.25 }}>
                  {active.featured.body}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  <Typography sx={{ fontSize: '0.86rem', fontWeight: 700, color: brand.greenInk }}>
                    {active.featured.cta}
                  </Typography>
                  <ArrowForwardOutlinedIcon sx={{ fontSize: 16, color: brand.greenInk }} />
                </Box>
              </Box>
            ) : null}
          </Box>
        </Box>
      ) : null}

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        slotProps={{ paper: { sx: { width: '100%', maxWidth: 380 } } }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            px: 2.5,
            height: 72,
            borderBottom: `1px solid ${brand.line}`,
          }}
        >
          <Wordmark />
          <IconButton aria-label="Close menu" onClick={() => setDrawerOpen(false)}>
            <CloseOutlinedIcon />
          </IconButton>
        </Box>

        <Box sx={{ px: 1.5, py: 1.5, display: 'flex', flexDirection: 'column', gap: 0.5 }}>
          {mainNav.map((item) => (
            <Accordion
              key={item.label}
              disableGutters
              square
              sx={{
                boxShadow: 'none',
                '&::before': { display: 'none' },
                borderBottom: `1px solid ${brand.line}`,
              }}
            >
              <AccordionSummary expandIcon={<ExpandMoreOutlinedIcon sx={{ fontSize: 20 }} />}>
                <Typography sx={{ fontWeight: 700, color: brand.ink }}>{item.label}</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ pt: 0, display: 'flex', flexDirection: 'column', gap: 1.25 }}>
                {item.children?.map((child) => (
                  <Box
                    key={child.href}
                    component={Link}
                    href={child.href}
                    onClick={() => setDrawerOpen(false)}
                    sx={{ textDecoration: 'none', py: 0.5 }}
                  >
                    <Typography
                      sx={{
                        fontSize: '0.95rem',
                        fontWeight: 600,
                        color: isActive(pathname, child.href) ? brand.greenInk : brand.ink,
                      }}
                    >
                      {child.label}
                    </Typography>
                    <Typography sx={{ fontSize: '0.82rem', color: brand.inkSoft }}>
                      {child.blurb}
                    </Typography>
                  </Box>
                ))}
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>

        <Box sx={{ px: 2.5, pb: 3, display: 'flex', flexDirection: 'column', gap: 1.25 }}>
          <Button component={Link} href="/contact" variant="contained" color="primary" fullWidth>
            Request a demo
          </Button>
        </Box>
      </Drawer>
    </Box>
  );
}
