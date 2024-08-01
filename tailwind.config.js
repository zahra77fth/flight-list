/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: '#fff',
        'greyish-brown': '#464646',
        blue: '#1773dc',
        red: '#ff1d23',
        'pumpkin-orange': '#ff7913',
        'details-gray': '#8d8d8d',
        black: '#161616',
        Gray30: '#c6c6c6',
      },
      fontFamily: {
        raiMediaBlack: ['raiMediaBlack']
      },
      screens: {
        'desktop': '992px',
      },
    },
  },
  plugins: [],
};
