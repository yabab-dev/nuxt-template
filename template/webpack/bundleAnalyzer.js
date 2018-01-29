const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = async function() {
  this.extendBuild(config => {
    // Add bundle analyzer plugin
    if (!process.isDev) {
      config.plugins.push(new BundleAnalyzerPlugin());
    }
  });
};
