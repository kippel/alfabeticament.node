import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    DATABASE_URI: process.env.DATABASE_URI,    
  },
};

export default nextConfig;
