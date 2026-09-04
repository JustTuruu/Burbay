import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Бүх зураг /public дотор байгаа тул гадаад домэйн шаардлагагүй.
    qualities: [70, 82, 90],
  },
};

export default nextConfig;
