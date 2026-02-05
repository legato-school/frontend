import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // SSR enabled for Amplify deployment
  output: "standalone",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
};

export default nextConfig;
