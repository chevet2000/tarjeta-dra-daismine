import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Nota: sin "output: standalone" — Vercel gestiona el despliegue de Next.js por sí mismo.
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
