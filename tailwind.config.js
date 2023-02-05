const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Noto Serif', ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [],
};
