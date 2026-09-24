import Link from 'next/link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import { brand } from '@/theme/tokens';
import Reveal from '@/components/shared/Reveal';

export type MarketsTableRow = {
  clientType: string;
  useCase: string;
  href?: string;
};

type MarketsTableProps = {
  columns: { clientType: string; useCase: string };
  rows: readonly MarketsTableRow[];
};

export default function MarketsTable({ columns: marketsTableColumns, rows: marketsTable }: MarketsTableProps) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Box
        sx={{
          display: { xs: 'none', md: 'flex' },
          gap: 4,
          pb: 1.5,
          borderBottom: `2px solid ${brand.line}`,
        }}
      >
        <Typography
          sx={{
            flex: '0 0 300px',
            fontSize: '0.72rem',
            fontWeight: 700,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            color: brand.inkSoft,
          }}
        >
          {marketsTableColumns.clientType}
        </Typography>
        <Typography
          sx={{
            flex: '1 1 320px',
            fontSize: '0.72rem',
            fontWeight: 700,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            color: brand.inkSoft,
          }}
        >
          {marketsTableColumns.useCase}
        </Typography>
      </Box>
      {marketsTable.map((row, index) => (
        <Reveal key={row.clientType} delay={index * 50}>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: { xs: 0.75, md: 4 },
              py: 3,
              borderBottom: index === marketsTable.length - 1 ? 0 : `1px solid ${brand.line}`,
            }}
          >
            {row.href ? (
              <Box
                component={Link}
                href={row.href}
                sx={{
                  flex: { xs: '1 1 100%', md: '0 0 300px' },
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 0.6,
                  textDecoration: 'none',
                  '&:hover .row-label': { color: brand.greenInk },
                }}
              >
                <Typography
                  className="row-label"
                  sx={{ fontWeight: 700, fontSize: '1.02rem', color: brand.ink, transition: 'color 140ms ease' }}
                >
                  {row.clientType}
                </Typography>
                <ArrowForwardOutlinedIcon sx={{ fontSize: 16, color: brand.inkSoft, mt: '5px', flexShrink: 0 }} />
              </Box>
            ) : (
              <Typography
                sx={{
                  flex: { xs: '1 1 100%', md: '0 0 300px' },
                  fontWeight: 700,
                  fontSize: '1.02rem',
                  color: brand.ink,
                }}
              >
                {row.clientType}
              </Typography>
            )}
            <Typography variant="body2" sx={{ flex: '1 1 320px', minWidth: 0 }}>
              {row.useCase}
            </Typography>
          </Box>
        </Reveal>
      ))}
    </Box>
  );
}
