/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'namya.ir',
      },
      {
        protocol: 'https',
        hostname: 'namya3-posts.s3.ir-thr-at1.arvanstorage.ir',
      },
      {
        protocol: 'https',
        hostname: 'namya3-businesses.s3.ir-thr-at1.arvanstorage.ir',
      },
    ],
  },
};

export default nextConfig;
