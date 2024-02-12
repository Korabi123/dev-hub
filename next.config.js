const { withHydrationOverlay } = require('@builder.io/react-hydration-overlay/next')

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com'
      },
      {
        protocol: 'https',
        hostname: "res.cloudinary.com"
      }
    ] 
  },
  reactStrictMode: false,
}

module.exports = withHydrationOverlay({
  appRootSelector: "main",
})(nextConfig)
