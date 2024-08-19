/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  reactStrictMode: false,
  sassOptions: {
    includePaths: [path.join(__dirname, "css")],
  },
  trailingSlash: true,
  devIndicators: {
    buildActivity: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
 
  async rewrites() {
    return [
      {
        source: '/homepage/novotech/',
        destination: '/homepage',
      },
      {
        source: '/contact',
        destination: '/contact-us',
      },
      {
        source: '/our-services/:service',
        destination: '/services/:service',
      },
    ];
  },
};

module.exports = nextConfig;
