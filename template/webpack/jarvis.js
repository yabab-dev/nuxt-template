const Jarvis = require('webpack-jarvis');

module.exports = async function() {
  this.extendBuild(config => {
    config.plugins.push(new Jarvis({ port: 3001 }));
  });
};
