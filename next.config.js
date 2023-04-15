/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["xsgames.co"]
  }
}

module.exports = nextConfig
