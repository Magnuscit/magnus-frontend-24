/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
        pathname: '/Magnuscit/events-data-25/master/events/**/assets/**',
      },
    ],
  },
};

export default nextConfig;
