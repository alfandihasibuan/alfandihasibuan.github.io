/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "28px",
    },
    extend: {
      colors: {
        primary: "#6D9886",
        secondary: "#E1E1E1",
        base: "#393E46",
        black: "#101010",
      },
      fontFamily: {
        poppins: ["Poppins"],
      },
    },
  },
  plugins: [],
}