/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.holopin.io',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
