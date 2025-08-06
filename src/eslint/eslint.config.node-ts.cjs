/* eslint-env node */
module.exports = {
  root: true, // prevent eslint look up the config file
  ignorePatterns: ['**/*.d.ts', 'node_modules/', 'dist/', 'build/', 'coverage/'],
  parser: '@typescript-eslint/parser', // tell the eslint the project is a typescript project
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

  plugins: [
    // preset rules
    '@typescript-eslint',
    'prettier',
  ],
  extends: [
    // rules configuration
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],

  overrides: [
    {
      files: ['**/*.cjs', '**/*.config.js'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],

  settings: {},

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
  },
};
