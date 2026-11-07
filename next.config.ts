import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["127.0.0.1"],
  cacheComponents: true,
  partialPrefetching: true,
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [85],
    deviceSizes: [
      640, 768, 780, 840, 922, 960, 1080, 1120, 1170, 1200, 1280, 1398, 1399,
      1400, 1600, 1680, 1920, 2000,
    ],
    imageSizes: [96, 144, 192, 240, 288, 320, 342, 360, 390, 432, 480, 492, 540, 560],
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
