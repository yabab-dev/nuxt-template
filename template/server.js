require('@babel/polyfill');

const { Nuxt, Builder } = require('nuxt');
const config = require('./nuxt.config.js');

const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || '3000';

const nuxt = new Nuxt(config);
if (nuxt.options.dev) {
  new Builder(nuxt).build();
}

(async () => {
  await nuxt.listen(port, host);
})();
