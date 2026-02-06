import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required for static export
  },
  // For GitHub Pages with custom repository name
  // basePath: '/photography-website',
  // assetPrefix: '/photography-website',
};

export default nextConfig;
