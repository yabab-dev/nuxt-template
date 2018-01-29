module.exports = async function() {
  // Extend build
  this.extendBuild(config => {
    // Add TS extension
    config.resolve.extensions.push('.ts');

    // Add TypeScript loader
    config.module.rules.push({
      test: /\.ts$/,
      loader: 'ts-loader',
      exclude: /node_modules|vue\/src/,
      options: {
        appendTsSuffixTo: [/\.vue$/],
      },
    });

    // Add TypeScript loader for vue files
    for (var rule of config.module.rules) {
      if (rule.loader === 'vue-loader') {
        rule.options.esModule = true;
        rule.options.loaders.ts = {
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
          },
        };
      }
    }
  });
};
