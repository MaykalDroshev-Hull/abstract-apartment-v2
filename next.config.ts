import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        pathname: '/**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/apartments',
        permanent: false,
      },
      {
        source: '/about',
        destination: '/apartments/about',
        permanent: true,
      },
      {
        source: '/contact',
        destination: '/apartments/contact',
        permanent: true,
      },
      {
        source: '/details',
        destination: '/apartments/details',
        permanent: true,
      },
      {
        source: '/faq',
        destination: '/apartments/faq',
        permanent: true,
      },
      {
        source: '/floor-plan',
        destination: '/apartments/floor-plan',
        permanent: true,
      },
      {
        source: '/gallery',
        destination: '/apartments/gallery',
        permanent: true,
      },
      {
        source: '/getting-here',
        destination: '/apartments/getting-here',
        permanent: true,
      },
      {
        source: '/guide',
        destination: '/apartments/guide',
        permanent: true,
      },
      {
        source: '/rates',
        destination: '/apartments/rates',
        permanent: true,
      },
      {
        source: '/reserve',
        destination: '/apartments/reserve',
        permanent: true,
      },
      {
        source: '/reviews',
        destination: '/apartments/reviews',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
