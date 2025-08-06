require('./src/eslint/eslint.config.patch.cjs');
const path = require('path');
/* eslint-env node */
module.exports = {
  root: true, // prevent eslint look up the config file
  extends: ['./src/eslint/eslint.config.vue-ts.cjs'],
  ignorePatterns: ['algorithm/**', 'src/dev/**', 'src/**/*.bak.*', 'src/**/*.cp.*', 'src/**/__tests__/*'],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  settings: {
    // custom tailwindcss eslint settings, https://github.com/francoismassart/eslint-plugin-tailwindcss/issues/241
    tailwindcss: {
      // let plugin find by itself
      config: path.join(__dirname, './tailwind.config.js'),
    },
  },
};
