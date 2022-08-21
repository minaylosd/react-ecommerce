/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    colors: {
      transparent: 'transparent',
      'grey': '#cfcfcf',
      'itemgrey': '#e7e7e7',
      'black': '#000000',
      'white': '#ffffff',
      'bgwh': '#e5e5e5',
      'blue': '#3366ff',
    },

    extend: {},

    screens: {
      'tablet': '786px',
      // => @media (min-width: 768px) { ... }

      'desktop': '1200px',
      // => @media (min-width: 1200px) { ... }

      'hd': '1640px',
      // => @media (min-width: 1640px) { ... }
    },
  },

  plugins: [],
}
