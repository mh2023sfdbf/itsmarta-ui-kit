import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Enable static exports for maximum performance
  // Remove this line if you need server-side features
  output: 'export',
  
  // Image optimization
  images: {
    unoptimized: true, // Required for static export
  },
  
  // Trailing slash for better compatibility
  trailingSlash: true,
};

export default nextConfig;
