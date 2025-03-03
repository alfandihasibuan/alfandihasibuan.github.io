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
      animation: {
        'gradient-x': 'gradient-x 5s ease infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
    },
  },
  plugins: [],
}