/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/a-plus-website-github',
  assetPrefix: '/a-plus-website-github',
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig

