import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: '/rmapp-site',
  assetPrefix: '/rmapp-site/',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
