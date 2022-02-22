/** @type {import('next').NextConfig} */
const withOptimizedImages = require('next-optimized-images');

module.exports = withOptimizedImages({
  async rewrites() {
    return [
      {
        source: '/api/:path',
        destination: 'http://localhost:3001/:path'
      }
    ]
  },
  reactStrictMode: false,
  images: {
    domains: ['openweathermap.org'],
    disableStaticImages: true,
  },
  mozjpeg: {
    quality: 100
  },
  optipng: {
    optimizationLevel: 1
  }
})