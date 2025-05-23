/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cms-webserver-statics.s3.amazonaws.com'],

    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
      },
      // Add other domains if needed
    ],
  },
};
export default nextConfig;
