/* eslint-env node */
module.exports = {
  root: true, // prevent eslint look up the config file
  ignorePatterns: ['**/*.d.ts', 'node_modules/', 'dist/', 'build/', 'coverage/'],
  parserOptions: {
    ecmaVersion: 'latest', // allows the use of modern ECMAScript features
    sourceType: 'module', // allows for the use of imports
    ecmaFeatures: {
      jsx: true,
    },
  },

  // enable global variables of corresponding env
  env: {
    browser: true,
    node: true,
  },

  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier',
    'plugin:tailwindcss/recommended',
  ],
  overrides: [
    {
      files: ['cypress/e2e/**/*.{cy,spec}.{js,ts,jsx,tsx}', 'cypress/support/**/*.{js,ts,jsx,tsx}'],
      extends: ['plugin:cypress/recommended'],
    },
  ],

  settings: {
    // custom tailwindcss eslint settings, https://github.com/francoismassart/eslint-plugin-tailwindcss/issues/241
    tailwindcss: {
      // let plugin find by itself
      // config: path.join(__dirname, './tailwind.config.js'),
    },
  },

  // can have unused var or param if the naming style is _xxx, https://stackoverflow.com/questions/64052318/how-to-disable-warn-about-some-unused-params-but-keep-typescript-eslint-no-un
  rules: {
    // note you must disable the base rule
    // as it can report incorrect errors
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn', // or "error"
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],
    // https://stackoverflow.com/questions/66773897/react-using-typescript-dont-use-as-a-type
    '@typescript-eslint/ban-types': [
      'error',
      {
        extendDefaults: true,
        types: {
          '{}': false,
        },
      },
    ],
    'vue/no-unused-vars': [
      'warn',
      {
        ignorePattern: '^_',
      },
    ],
    'tailwindcss/classnames-order': 'off',
    'tailwindcss/no-custom-classname': 'off',
  },
};
