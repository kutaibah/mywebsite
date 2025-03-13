import { withContentlayer } from "next-contentlayer";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  // experimental appDir is no longer needed in Next.js 15 as it's the default
  experimental: {
    mdxRs: true,
  },
};

export default withContentlayer(nextConfig);
