import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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

export default nextConfig;
