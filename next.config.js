/* eslint-disable no-undef */
module.exports = {
  reactStrictMode: true,
  webpack5: false,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: ['@svgr/webpack']
    });

    return config;
  },
};
