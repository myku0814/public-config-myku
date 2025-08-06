/* eslint-env node */
// /** @type {import('tailwindcss').Config} */
module.exports = {
  // content is required in child tailwind config
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],

  presets: [require('./src/tailwind/tailwind.config.cjs')],
};
