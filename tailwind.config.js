/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        garamond: ['"EB Garamond"', "serif"],
        imperial: ['"Imperial Script"', "cursive"],
        inter: ["Inter", "sans-serif"],
        martel: ['"Martel Sans"', "sans-serif"],
      },
    },
  },
  plugins: [],
};