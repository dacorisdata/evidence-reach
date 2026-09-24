import type { Metadata } from 'next';
import Box from '@mui/material/Box';
import ThemeRegistry from '@/components/ThemeRegistry';
import TopBar from '@/components/layout/TopBar';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import '@/theme/fonts';
import { site } from '@/content/site';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} - evidence into reach`,
    template: `%s | ${site.shortName}`,
  },
  description: site.description,
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: site.name,
    description: site.description,
    url: site.url,
    siteName: site.name,
    type: 'website',
  },
  robots: { index: true, follow: true },
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: site.name,
  url: site.url,
  description: site.description,
  parentOrganization: { '@type': 'Organization', name: 'DACORIS Group' },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Strathmore University',
    addressLocality: 'Nairobi',
    addressCountry: 'KE',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: site.phone,
    email: site.email,
    contactType: 'sales',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <ThemeRegistry>
          <Box
            component="a"
            href="#main"
            sx={{
              position: 'absolute',
              left: -9999,
              top: 8,
              zIndex: 2000,
              backgroundColor: '#ffffff',
              px: 2,
              py: 1,
              borderRadius: 2,
              fontWeight: 700,
              '&:focus': { left: 8 },
            }}
          >
            Skip to content
          </Box>
          <TopBar />
          <Navbar />
          <Box component="main" id="main">
            {children}
          </Box>
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}
