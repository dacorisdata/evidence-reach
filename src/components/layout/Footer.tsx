import Link from 'next/link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import { brand } from '@/theme/tokens';
import { site } from '@/content/site';
import { footerNav } from '@/content/nav';
import Wordmark from './Wordmark';

export default function Footer() {
  return (
    <Box component="footer" sx={{ backgroundColor: brand.footer }}>
      <Box
        sx={{
          maxWidth: 1240,
          mx: 'auto',
          px: { xs: 2.5, md: 4 },
          pt: { xs: 6, md: 9 },
          pb: { xs: 4, md: 5 },
          display: 'flex',
          flexWrap: 'wrap',
          gap: { xs: 5, md: 4 },
        }}
      >
        <Box sx={{ flex: '1 1 280px', minWidth: 0, maxWidth: 320 }}>
          <Wordmark onDark />
          <Typography sx={{ color: brand.footerSoft, fontSize: '0.9rem', lineHeight: 1.7, mt: 2.5, mb: 3 }}>
            {site.description}
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.25 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <LocationOnOutlinedIcon sx={{ fontSize: 17, color: brand.green }} />
              <Typography sx={{ color: brand.footerSoft, fontSize: '0.85rem' }}>{site.address}</Typography>
            </Box>
            <Box component="a" href={site.emailHref} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <EmailOutlinedIcon sx={{ fontSize: 17, color: brand.green }} />
              <Typography sx={{ color: brand.footerSoft, fontSize: '0.85rem' }}>{site.email}</Typography>
            </Box>
            <Box component="a" href={site.phoneHref} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <CallOutlinedIcon sx={{ fontSize: 17, color: brand.green }} />
              <Typography sx={{ color: brand.footerSoft, fontSize: '0.85rem' }}>{site.phone}</Typography>
            </Box>
          </Box>
        </Box>

        {footerNav.map((column) => (
          <Box key={column.title} sx={{ flex: '1 1 160px', minWidth: 0 }}>
            <Typography
              variant="overline"
              sx={{ color: 'rgba(255,255,255,0.4)', display: 'block', mb: 2 }}
            >
              {column.title}
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.25 }}>
              {column.links.map((link) => (
                <Box
                  key={link.label}
                  component={Link}
                  href={link.href}
                  sx={{
                    color: brand.footerSoft,
                    fontSize: '0.88rem',
                    textDecoration: 'none',
                    transition: 'color 140ms ease',
                    '&:hover': { color: brand.green },
                  }}
                >
                  {link.label}
                </Box>
              ))}
            </Box>
          </Box>
        ))}
      </Box>

      <Box sx={{ borderTop: `1px solid ${brand.footerLine}` }}>
        <Box
          sx={{
            maxWidth: 1240,
            mx: 'auto',
            px: { xs: 2.5, md: 4 },
            py: 2.5,
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 1.5,
          }}
        >
          <Typography sx={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.8rem' }}>
            &copy; {new Date().getFullYear()} {site.copyright}
          </Typography>
          <Typography sx={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.8rem' }}>
            {site.tagline}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
