import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol:"https",
        hostname:"techtimize-app-720869613f134d34bdacf758feb5bedc-production.s3.ap-south-1.amazonaws.com",
      }
    ] 
    },
};

export default nextConfig;
