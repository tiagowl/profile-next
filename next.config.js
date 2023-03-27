/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  "presets": ["next/babel"],
  swcMinify: false,
  webpack: function(config){
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    })
    return config
  }
}

module.exports = nextConfig
