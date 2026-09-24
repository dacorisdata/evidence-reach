'use client';

import Link from 'next/link';
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import { brand } from '@/theme/tokens';
import type { FaqItem } from '@/content/faq';

type FaqListProps = {
  items: readonly FaqItem[];
};

export default function FaqList({ items }: FaqListProps) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, maxWidth: 860 }}>
      {items.map((item, index) => (
        <Accordion
          key={item.question}
          defaultExpanded={index === 0}
          disableGutters
          square
          sx={{
            boxShadow: 'none',
            border: `1px solid ${brand.line}`,
            borderRadius: '5px !important',
            backgroundColor: '#ffffff',
            '&::before': { display: 'none' },
            '&.Mui-expanded': { borderColor: brand.mintLine },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreOutlinedIcon sx={{ fontSize: 22, color: brand.ink }} />}
            aria-controls={`faq-${index}-content`}
            id={`faq-${index}-header`}
            sx={{ px: 3, py: 0.75 }}
          >
            <Typography variant="h4" sx={{ fontSize: '1.08rem' }}>
              {item.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ px: 3, pb: 3, pt: 0 }}>
            <Typography sx={{ fontSize: '1rem', lineHeight: 1.75, color: brand.inkSoft }}>{item.answer}</Typography>
            {item.related?.length ? (
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2.5, mt: 2 }}>
                {item.related.map((link) => (
                  <Box
                    key={link.href + link.label}
                    component={Link}
                    href={link.href}
                    sx={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 0.5,
                      textDecoration: 'none',
                      fontWeight: 700,
                      fontSize: '0.9rem',
                      color: brand.greenInk,
                    }}
                  >
                    {link.label}
                    <ArrowForwardOutlinedIcon sx={{ fontSize: 16 }} />
                  </Box>
                ))}
              </Box>
            ) : null}
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}
