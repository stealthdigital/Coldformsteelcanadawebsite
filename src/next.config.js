/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        pathname: '/stealthdigital/Coldformsteelcanadawebsite/**',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**',
      },
    ],
    // Allow both optimized and unoptimized images
    unoptimized: false,
  },
  // Enable strict mode for better development experience
  reactStrictMode: true,
  // Disable powered by header
  poweredByHeader: false,
  // Optimize production builds
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Handle trailing slashes
  trailingSlash: false,
};

module.exports = nextConfig;
