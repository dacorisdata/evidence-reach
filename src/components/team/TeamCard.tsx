import Image from 'next/image';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { brand } from '@/theme/tokens';
import type { ImageRef } from '@/content/types';

type TeamCardProps = {
  name: string;
  role: string;
  bio: string;
  image: ImageRef;
};

export default function TeamCard({ name, role, bio, image }: TeamCardProps) {
  return (
    <Box
      sx={{
        flex: '1 1 300px',
        minWidth: 0,
        maxWidth: 380,
        position: 'relative',
        borderRadius: 4,
        overflow: 'hidden',
        aspectRatio: '3 / 4',
        cursor: 'default',
        '&:hover .team-bio, &:focus-within .team-bio': {
          transform: 'translateY(0)',
        },
        '&:hover .team-photo': {
          transform: 'scale(1.04)',
        },
      }}
    >
      <Box className="team-photo" sx={{ position: 'absolute', inset: 0, transition: 'transform 420ms ease' }}>
        <Image src={image.src} alt={image.alt} fill sizes="(max-width: 900px) 100vw, 360px" style={{ objectFit: 'cover' }} />
      </Box>

      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(13,15,34,0) 40%, rgba(13,15,34,0.92) 100%)',
        }}
      />

      <Box
        className="team-bio"
        sx={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          p: 2.5,
          transform: { xs: 'translateY(0)', md: 'translateY(calc(100% - 84px))' },
          transition: 'transform 260ms ease',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 1 }}>
          <Box>
            <Typography sx={{ fontWeight: 800, fontSize: '1.05rem', color: '#ffffff' }}>{name}</Typography>
            <Typography sx={{ fontSize: '0.85rem', fontWeight: 600, color: brand.green }}>{role}</Typography>
          </Box>
          <Box
            aria-hidden
            sx={{
              flexShrink: 0,
              width: 32,
              height: 32,
              borderRadius: '50%',
              border: '1px solid rgba(255,255,255,0.35)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <LinkedInIcon sx={{ fontSize: 17, color: 'rgba(255,255,255,0.85)' }} />
          </Box>
        </Box>
        <Typography sx={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.82)', lineHeight: 1.6, mt: 1.25 }}>
          {bio}
        </Typography>
      </Box>
    </Box>
  );
}
