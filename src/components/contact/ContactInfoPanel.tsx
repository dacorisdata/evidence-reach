import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import { brand } from '@/theme/tokens';
import { site } from '@/content/site';
import { contactInfoCopy, whatToExpect } from '@/content/contact';

export default function ContactInfoPanel() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
      <Box>
        <Typography variant="overline" sx={{ color: brand.greenInk, display: 'block', mb: 2 }}>
          {contactInfoCopy.eyebrow}
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.75 }}>
          <Box
            component="a"
            href={site.phoneHref}
            sx={{ display: 'flex', alignItems: 'center', gap: 1.25, textDecoration: 'none' }}
          >
            <CallOutlinedIcon sx={{ fontSize: 19, color: brand.green }} />
            <Typography sx={{ color: brand.ink, fontWeight: 600 }}>{site.phone}</Typography>
          </Box>
          <Box
            component="a"
            href={site.emailHref}
            sx={{ display: 'flex', alignItems: 'center', gap: 1.25, textDecoration: 'none' }}
          >
            <EmailOutlinedIcon sx={{ fontSize: 19, color: brand.green }} />
            <Typography sx={{ color: brand.ink, fontWeight: 600 }}>{site.email}</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.25 }}>
            <LocationOnOutlinedIcon sx={{ fontSize: 19, color: brand.green }} />
            <Typography sx={{ color: brand.ink, fontWeight: 600 }}>{site.address}</Typography>
          </Box>
          <Box
            component="a"
            href={site.websiteHref}
            sx={{ display: 'flex', alignItems: 'center', gap: 1.25, textDecoration: 'none' }}
          >
            <PublicOutlinedIcon sx={{ fontSize: 19, color: brand.green }} />
            <Typography sx={{ color: brand.ink, fontWeight: 600 }}>{site.website}</Typography>
          </Box>
        </Box>
      </Box>

      <Box sx={{ p: 3, borderRadius: '5px', backgroundColor: brand.surface, border: `1px solid ${brand.line}` }}>
        <Typography variant="overline" sx={{ color: brand.greenInk, display: 'block', mb: 1 }}>
          {whatToExpect.eyebrow}
        </Typography>
        <Typography variant="body2">{whatToExpect.body}</Typography>
      </Box>
    </Box>
  );
}
