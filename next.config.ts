import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    return [
      // "Donor programmes" was split into Funders and NGOs and implementers.
      { source: '/solutions/donors', destination: '/solutions/funders', permanent: true },
      // "Get started" is a menu heading, not a page.
      { source: '/get-started', destination: '/get-started/packages', permanent: false },
    ];
  },
};

export default nextConfig;
