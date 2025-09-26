import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "remote.val.build",
      },
    ],
  },
};

export default nextConfig;
