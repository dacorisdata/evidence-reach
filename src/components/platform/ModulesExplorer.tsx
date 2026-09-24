'use client';

import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { brand } from '@/theme/tokens';
import { moduleCategories } from '@/content/platform';

type CategoryKey = (typeof moduleCategories)[number]['key'];

export default function ModulesExplorer() {
  const [activeKey, setActiveKey] = useState<CategoryKey>(moduleCategories[0].key);
  const active = moduleCategories.find((category) => category.key === activeKey) ?? moduleCategories[0];

  return (
    <Box>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: { xs: 4, md: 5 } }}>
        {moduleCategories.map((category) => {
          const isActive = category.key === activeKey;
          return (
            <Box
              key={category.key}
              component="button"
              type="button"
              onClick={() => setActiveKey(category.key)}
              sx={{
                border: `1px solid ${isActive ? brand.green : brand.line}`,
                borderRadius: 999,
                px: 2,
                py: 0.9,
                cursor: 'pointer',
                font: 'inherit',
                fontSize: '0.85rem',
                fontWeight: 700,
                backgroundColor: isActive ? brand.mintWash : 'transparent',
                color: isActive ? brand.greenInk : brand.inkSoft,
                transition: 'border-color 160ms ease, color 160ms ease, background-color 160ms ease',
                '&:hover': { borderColor: brand.mintLine, color: brand.greenInk },
              }}
            >
              {category.label}
            </Box>
          );
        })}
      </Box>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: { xs: 4, md: 6 }, alignItems: 'flex-start' }}>
        <Box sx={{ flex: '1 1 340px', minWidth: 0 }}>
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              aspectRatio: '4 / 3',
              borderRadius: 4,
              overflow: 'hidden',
              border: `1px solid ${brand.line}`,
            }}
          >
            <Image
              key={active.image.src}
              src={active.image.src}
              alt={active.image.alt}
              fill
              sizes="(max-width: 900px) 100vw, 420px"
              style={{ objectFit: 'cover' }}
            />
            <Box
              sx={{
                position: 'absolute',
                left: 16,
                bottom: 16,
                px: 1.5,
                py: 0.75,
                borderRadius: 999,
                backgroundColor: 'rgba(13,15,34,0.72)',
                backdropFilter: 'blur(4px)',
              }}
            >
              <Typography sx={{ fontSize: '0.8rem', fontWeight: 700, color: '#ffffff' }}>
                {active.label}
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box sx={{ flex: '1 1 420px', minWidth: 0, display: 'flex', flexDirection: 'column' }}>
          {active.modules.map((module, index) => (
            <Box
              key={module.title}
              sx={{
                py: 2.25,
                pt: index === 0 ? 0 : 2.25,
                borderBottom: index === active.modules.length - 1 ? 0 : `1px solid ${brand.line}`,
              }}
            >
              <Typography sx={{ fontWeight: 700, fontSize: '1rem', color: brand.ink, mb: 0.5 }}>
                {module.title}
              </Typography>
              <Typography variant="body2">{module.body}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
