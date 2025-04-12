import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL("https://ui.aceternity.com/linear.webp")],
  },
};

export default nextConfig;
