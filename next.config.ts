import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pipingproject.s3.ap-south-1.amazonaws.com',
        pathname: '/**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/product',
        destination: '/product/stainless-steel-wire-mesh-1888.html',
        permanent: true,
      },
      {
        source: '/product/',
        destination: '/product/stainless-steel-wire-mesh-1888.html',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
