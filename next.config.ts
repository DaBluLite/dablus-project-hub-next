import type { NextConfig } from "next";
import createMDX from "@next/mdx";
import rehypeHighlight from "rehype-highlight";

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
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  serverExternalPackages: ['remark-prism'],
  async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT,OPTIONS" },
          { key: "Access-Control-Allow-Headers", value: "Accept, Accept-Version, Content-Length, Content-Type, Authorization" },
        ]
      }
    ]
  }
};

const withMDX = createMDX({
  options: {
    rehypePlugins: [rehypeHighlight],
  },
});

export default withMDX(nextConfig);
