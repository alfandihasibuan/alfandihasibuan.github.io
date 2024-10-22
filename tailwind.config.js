/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "28px",
    },
    extend: {
      screens: {
        "2xl": "1320px",
      },
      colors: {
        primary: "#6D9886",
        base: "#393E46",
        secondary: "#F7F7F7",
      },
      fontFamily: {
        poppins: ["Poppins"],
      },
    },
  },
  plugins: [],
};
