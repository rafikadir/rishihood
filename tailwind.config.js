/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'red' : "#DB541B",
      "white" : "#ffffff",
      "black" : "#0F2137",
      "darkBlue" : "#00447B"
    },
    extend: {
      fontFamily: {
        garamond: ['"Garamond"', "sans-serif"],
        inter: ['"inter"', "sans-serif"],
      },
    },
  },
  plugins: [],
}