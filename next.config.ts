import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Lets client components start from the same clock the static pages were built with
  // (avoids hydration mismatches for time-based UI such as careers deadlines).
  env: {
    NEXT_PUBLIC_BUILD_TIME: new Date().toISOString(),
  },
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
