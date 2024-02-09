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
    },
    polyfills: true,
  },
  
  compress: {
    brotli: true,
  },

  webpack: (config,{isServer}) => {
    if(!isServer) {
      config.optimization = {
        usedExports: true,
        sideEffects: true,
        innerGraph: true,

        minimize: true,
        minimizer: [
          new TerserPlugin({
            terserOptions: {
              ecma: 6,
              warnings: true,
              compress: {},
              mangle: true,
              output: {
                comments: false,
              },
            },
          }),
        ],
      };
    }

    return config;
  },
  
  ...analyzer    
});

