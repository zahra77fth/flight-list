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
        'primary-gray': '#464646',
        blue: '#1773dc',
        red: '#ff1d23',
        orange: '#ff7913',
        'secondary-gray': '#8d8d8d',
        black: '#161616',
        gray: '#c6c6c6',
      },
      fontFamily: {},
      screens: {
        'desktop': '992px',
      },
    },
  },
  plugins: [],
};
