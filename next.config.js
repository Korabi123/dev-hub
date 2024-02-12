const withMDX = require('@next/mdx')()

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com", "img.clerk.com", "res.cloudinary.com"] 
  },
  reactStrictMode: false,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
}

module.exports = withMDX(nextConfig)
