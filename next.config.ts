import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
        port: '',
        pathname: '/**',
        search: '',
      },
    ],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.node/,
      use: 'node-loader'
    })
 
    return config
  },
  experimental: {
    serverComponentsExternalPackages: ['remark-prism']
  }
};

export default nextConfig;
