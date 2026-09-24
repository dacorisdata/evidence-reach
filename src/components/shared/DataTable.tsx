import type { ReactNode } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { brand } from '@/theme/tokens';
import Reveal from './Reveal';

export type DataTableColumn = {
  key: string;
  label: string;
  /** CSS flex shorthand used from the md breakpoint up. Defaults to an equal share. */
  flex?: string;
};

export type DataTableRow = Record<string, ReactNode>;

type DataTableProps = {
  columns: DataTableColumn[];
  rows: DataTableRow[];
};

const headStyle = {
  fontSize: '0.72rem',
  fontWeight: 700,
  letterSpacing: '0.06em',
  textTransform: 'uppercase',
  color: brand.inkSoft,
} as const;

export default function DataTable({ columns, rows }: DataTableProps) {
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
        {columns.map((column) => (
          <Typography key={column.key} sx={{ ...headStyle, flex: column.flex ?? '1 1 0', minWidth: 0 }}>
            {column.label}
          </Typography>
        ))}
      </Box>

      {rows.map((row, rowIndex) => (
        <Reveal key={rowIndex} delay={Math.min(rowIndex, 6) * 40}>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: { xs: 1.5, md: 4 },
              py: 3,
              borderBottom: rowIndex === rows.length - 1 ? 0 : `1px solid ${brand.line}`,
            }}
          >
            {columns.map((column, columnIndex) => {
              const value = row[column.key];
              return (
                <Box
                  key={column.key}
                  sx={{ flex: { xs: '1 1 100%', md: column.flex ?? '1 1 0' }, minWidth: 0 }}
                >
                  <Typography sx={{ ...headStyle, display: { xs: 'block', md: 'none' }, mb: 0.5 }}>
                    {column.label}
                  </Typography>
                  {typeof value === 'string' ? (
                    <Typography
                      variant="body2"
                      sx={
                        columnIndex === 0
                          ? { fontWeight: 700, fontSize: '1.02rem', color: brand.ink }
                          : undefined
                      }
                    >
                      {value}
                    </Typography>
                  ) : (
                    value
                  )}
                </Box>
              );
            })}
          </Box>
        </Reveal>
      ))}
    </Box>
  );
}
