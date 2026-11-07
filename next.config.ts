import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["127.0.0.1"],
  cacheComponents: true,
  partialPrefetching: true,
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [85],
    deviceSizes: [320, 390, 432, 540, 640, 780, 920, 960, 1280, 1600, 1920, 2000],
    imageSizes: [96, 144, 192, 288, 384, 432, 520, 640, 780, 920],
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
