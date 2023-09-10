/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        manrope: "Manrope",
      },
      colors: {
        "nier-yellow": "#dad4bb",
        "nier-brown": "#b4af9a",
        "nier-red": "#cd664d",
        "nier-dark-brown": "#57544a",
        "dark-text": "#3F3D36"

      }
    },
  },
  plugins: [],
};
