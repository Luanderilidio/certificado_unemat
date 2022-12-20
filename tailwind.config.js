/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        anton: ["Anton", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        atala: ["Atala", "sans-serif"],
        bungee: ["Bungee", "sans-serif"],
        MrDafoe: ["Mr Dafoe", "sans-serif"],
        Tinos: ["Tinos", "sans-serif"],
      },
    },
  },
  plugins: [],
};
