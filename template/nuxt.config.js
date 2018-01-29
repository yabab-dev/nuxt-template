/* eslint-disable */

require('dotenv').config();

const path = require('path');
const webpack = require('webpack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
// const WebpackMonitor = require('webpack-monitor');

const nameChunk = chunk => {
  if (chunk.name) return chunk.name;

  const basePath = `${path.resolve('.')}/app/`;
  const pathRegexp = new RegExp(basePath);

  for (const m of chunk._modules) {
    if (pathRegexp.test(m.context)) {
      return m.context.replace(basePath, '').split('/')[0];
    }
  }

  return null;
};

module.exports = {
  head: {
    titleTemplate: '%s - {{ name }}',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '{{ description }}' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  /**
   * Loading bar
   */
  loading: { color: '#3B8070' },

  /**
   * CSS files
   */
  css: ['~/assets/scss/index.scss'],

  build: {
    /**
     * Vendors
     */
    vendor: ['popmotion', 'vuex-class', 'nuxt-class-component', 'vue-property-decorator'],

    /**
     * Babel configuration
     */
    babel: {
      plugins: [
        'babel-plugin-transform-class-properties',
        'babel-plugin-transform-decorators-legacy',
      ],
    },

    extend(config, { isDev, isClient }) {
      /**
       * ESLint
       */
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        });
      }

      /**
       * Chunks names
       */
      config.plugins.push(new webpack.NamedChunksPlugin(nameChunk));

      /**
       * Bundles/chuncks analyzers
       */
      if (!isDev) {
        // config.plugins.push(
        //   new WebpackMonitor({ launch: true, taregt: path.resolve('./stats.json') }),
        // );
        config.plugins.push(new BundleAnalyzerPlugin());
      }
    },
  },

  plugins: ['~/app/menu'],

  modules: [
    '~/app/utils/typescript',
    '@nuxtjs/router',
    '@nuxtjs/dotenv',
    // '@nuxtjs/pwa',
    // '@nuxtjs/google-analytics',
    // '@nuxtjs/onesignal',
  ],

  // workbox: {
  //   runtimeCaching: [
  //     { urlPattern: 'https://fonts\\.(googleapis|gstatic)\\.com/.*', handler: 'cacheFirst' },
  //   ],
  // },

  // manifest: {
  //   name: '{{ name }}',
  //   short_name: '{{ name }}',
  //   lang: 'fr',
  //   background_color: '#3B8070',
  //   description: '{{ description }}',
  // },

  // oneSignal: {
  //   init: {
  //     appId: 'XXXXXXXXX',
  //     allowLocalhostAsSecureOrigin: true,
  //   },
  // },

  // 'google-analytics': {
  //   id: 'UA-XXXXXXXX-X',
  // },
};
