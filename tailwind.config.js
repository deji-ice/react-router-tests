/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      aeonik_light: ["Aeonik-light", "sans-serif"],
      aeonik_regular: ["Aeonik-regular", "sans-serif"],
      aeonik_bold: ["Aeonik-bold", "sans-serif"],
    },
  },
  plugins: [],
};
