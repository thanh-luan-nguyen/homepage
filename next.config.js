/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['tailwindui.com', 'images.unsplash.com', 'res.cloudinary.com'],
  },
  images: {
    loader: 'akamai',
    path: '',
  },
}
