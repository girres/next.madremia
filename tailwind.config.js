/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

const customColors = {
  'mm-black': '#2B0F0E',
  'mm-beige': '#F7F6E7',
  'mm-orange': '#F96714'
};

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: Object.assign(colors, customColors),
    },
  },
  daisyui: {
    themes: false,
  },
  plugins: [require('daisyui')],
};
