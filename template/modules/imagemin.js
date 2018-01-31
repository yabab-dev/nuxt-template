const ImageminPlugin = require('imagemin-webpack-plugin').default;

module.exports = async function() {
  this.extendBuild(config => {
    // Add Imagemin plugin
    if (!process.isDev) {
      config.plugins.push(new ImageminPlugin());
    }
  });
};
