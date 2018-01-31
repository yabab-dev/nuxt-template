module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: ['eslint:recommended', 'plugin:vue/recommended', 'prettier'],
  plugins: ['vue', 'prettier', 'jest'],
  rules: {
    'prettier/prettier': 'error',
    'class-methods-use-this': 0,
    'import/prefer-default-export': false,
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: {
          resolve: {
            alias: {
              '~': __dirname,
            },
          },
        },
      },
    },
  },
};
