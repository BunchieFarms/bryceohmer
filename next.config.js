/** @type {import('next').NextConfig} */
const withOptimizedImages = require('next-optimized-images');

module.exports = withOptimizedImages({
  reactStrictMode: false,
  images: {
    disableStaticImages: true,
  },
})