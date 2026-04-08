import path from "node:path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  typedRoutes: false,
  outputFileTracingRoot: path.resolve(process.cwd()),
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": process.cwd()
    };

    return config;
  }
};

export default nextConfig;
