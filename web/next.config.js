/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

const env = {
  API_URL: (() => {
    return 'http://localhost:3333'
  })(),
}

module.exports = {
  nextConfig,
  env
}
