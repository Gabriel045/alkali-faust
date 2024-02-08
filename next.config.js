const { withFaust, getWpHostname } = require('@faustwp/core');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

/**
 * @type {import('next').NextConfig}
 **/

const nextConfig = {}

analyzer = withBundleAnalyzer(nextConfig)


module.exports = withFaust({
  reactStrictMode: true,
  sassOptions: {
    includePaths: ['node_modules'],
  },
  images: {
    domains: ['wordpress-659833-4142894.cloudwaysapps.com',getWpHostname()],
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  experimental: {
    images: {
      domains: ['wordpress-659833-4142894.cloudwaysapps.com',getWpHostname()],
      allowFutureImage: true,
    }
  },
  
  ...analyzer    
});

