import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import { brand } from '@/theme/tokens';
import { site } from '@/content/site';

export default function TopBar() {
  return (
    <Box
      sx={{
        display: { xs: 'none', md: 'block' },
        backgroundColor: brand.footer,
      }}
    >
      <Box
        sx={{
          maxWidth: 1240,
          mx: 'auto',
          px: 4,
          height: 38,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
          <Box component="a" href={site.emailHref} sx={{ display: 'flex', alignItems: 'center', gap: 0.7 }}>
            <EmailOutlinedIcon sx={{ fontSize: 15, color: 'rgba(255,255,255,0.6)' }} />
            <Typography sx={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.72)' }}>
              {site.email}
            </Typography>
          </Box>
          <Box component="a" href={site.phoneHref} sx={{ display: 'flex', alignItems: 'center', gap: 0.7 }}>
            <CallOutlinedIcon sx={{ fontSize: 15, color: 'rgba(255,255,255,0.6)' }} />
            <Typography sx={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.72)' }}>
              {site.phone}
            </Typography>
          </Box>
        </Box>
        <Box component="a" href={site.websiteHref} sx={{ display: 'flex', alignItems: 'center', gap: 0.7 }}>
          <PublicOutlinedIcon sx={{ fontSize: 15, color: 'rgba(255,255,255,0.6)' }} />
          <Typography sx={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.72)' }}>
            {site.parent}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
