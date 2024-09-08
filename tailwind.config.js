/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'navy-blue': '#0f1b61',
        'ligtish-blue': '#F4F9FC',
        'cyan-green': '#73bbc5',
        'my-blue': '#6B62FF',

        ...defaultTheme.colors,
      },
    },
  },
  plugins: [],
};
