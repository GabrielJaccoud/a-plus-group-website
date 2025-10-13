/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/a-plus-group-website',
  assetPrefix: '/a-plus-group-website',
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig

