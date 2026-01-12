import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Image optimization
  images: {
    unoptimized: true,
  },
  
  // Trailing slash for better compatibility
  trailingSlash: true,

  // Disable ESLint during builds (lint locally instead)
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
