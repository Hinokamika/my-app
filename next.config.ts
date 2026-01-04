import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverComponentsExternalPackages: ["pg", "@prisma/client"],
  },
};

export default nextConfig;
