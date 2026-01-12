import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Image optimization
  images: {
    unoptimized: true,
  },
  
  // Trailing slash for better compatibility
  trailingSlash: true,
};

export default nextConfig;
