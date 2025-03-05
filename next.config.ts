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
  serverExternalPackages: ['remark-prism']
};

const withMDX = createMDX({
  options: {
    rehypePlugins: [rehypeHighlight],
  },
});

export default withMDX(nextConfig);
