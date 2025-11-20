import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    // Ignore ESLint errors during production builds (allows deploys even if lint fails)
    ignoreDuringBuilds: true,
  },
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

export default nextConfig;
