/* eslint-env node */
// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [], // content is required in child tailwind config
  theme: {
    extend: {
      screens: {
        // TL;DR: 1) mobile-first. 2) 0~425px(mobile/small) 425~768px(tablet/medium) 768~1440(labtop/big) 3 sizes.
        // mobile-L: 0~425    px
        // tablet:   425~768  px => @media (min-width: 425px) { ... }
        // labtop:   768~1440 px => @media (min-width: 768px) { ... }
        // 4K:       >1440    px => @media (min-width: 1440px) { ... }
        'myku-sm': '425px',
        // add@20240503 when styling auth
        'myku-smmd': '600px',
        'myku-md': '768px',
        'myku-mdlg': '850px',
        'myku-lg': '1024px',
        'myku-lgxl': '1200px',
        'myku-xl': '1440px',
      },
      fontFamily: {
        myku: ['Noto Sans TC', 'Microsoft JhengHei', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        'myku-transparent': 'transparent',
        'myku-prime': {
          dark: '#262c4d',
          darkm100: '#7E92FF', // same point, but lighten
          darkm200: '#B4C3FF', // same vertical line, but lighten
          darkm300: '#D8DCFF', // same vertical line, but lighten
          darkm400: '#E4E8FF', // same vertical line, but lighten
          light: '#7bc8bd',
          highlight: '#ecfdf5',
        },
        'myku-material': {
          red: '#ff0000',
          pink: '#ff7bac',
          blue: '#0071bc',
          green: '#00a99d',
          // add at 20240501
          yellow: '#d69431',
        },
        'myku-gray': {
          light: '#e6e6e6',
          base: '#666666',
          dark: '#808080',
        },
      },
    },
  },
  plugins: [],
};
// content is required in child tailwind config
