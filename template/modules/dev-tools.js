/* eslint-disable */

const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const Jarvis = require('webpack-jarvis');

module.exports = async function() {
  this.extendBuild(config => {
    // Only in production
    if (!process.isDev) {
      // Bundle Analyzer
      config.plugins.push(new BundleAnalyzerPlugin());

      // Only in dev
    } else {
      // Jarvis
      // config.plugins.push(new Jarvis({ port: 3001 }));

      // Add tota11y
      if (config.entry.vendor) {
        config.entry.vendor.push('tota11y/build/tota11y.min');
      }
    }
  });
};
