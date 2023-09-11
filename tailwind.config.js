/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";

module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
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
        "dark-text": "#3F3D36",
      },
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
        xl: '0 32px 64px var(--tw-shadow-color)',
        nier: '7px 5px 0 #bab5a1',
      },
      boxShadow: {
        overdrive: '0 10px 420px 150px rgb(0 0 0 / 0.25)',
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
  ],
};
