/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Disable Next.js development indicators
  devIndicators: {
    position: 'bottom-right',
  },
  // Disable development overlays
  experimental: {
    optimizeCss: true,
  },
}

export default nextConfig
