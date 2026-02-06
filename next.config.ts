import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required for static export
  },
  // For GitHub Pages with custom repository name
  basePath: '/Claude-Code-Experiment',
  assetPrefix: '/Claude-Code-Experiment',
};

export default nextConfig;
