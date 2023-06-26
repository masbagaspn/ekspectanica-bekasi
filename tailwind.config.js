/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        monstserrat: ["Montserrat", "sans-serif"],
        daysone: ["Days One", "sans-serif"],
      },
      colors: {
        turqoise: "#159898",
        orange: "#fe7223",
        cream: "#e4bf92",
        lightblue: "#7eaea0",
      },
      gridTemplateRows: {
        12: "repeat(12, minmax(0, 1fr))",
      },
      dropShadow: {
        white: "0 4px 3px rgb(255 255 255 / 0.2)",
      },
    },
  },
  plugins: [],
};
