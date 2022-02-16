/** @type {import('next').NextConfig} */
const withOptimizedImages = require('next-optimized-images');

module.exports = withOptimizedImages({
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