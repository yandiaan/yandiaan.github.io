/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        doff: "#111111",
      },
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        wiggle: {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "25%": {
            transform: "translateX(10px)",
          },
          "50%": {
            transform: "translateY(10px)",
          },
          "75%": {
            transform: "translateX(-10px)",
          },
        },
        "spin-slow": {
          "0%": {
            transform: "rotate(0deg)",
          },
          "50%": {
            transform: "rotate(180deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        glowing: {
          "0%,100%": {
            boxShadow: "none",
          },
          "50%": {
            boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
          },
        },
      },
      animation: {
        wiggle: "wiggle 3s ease-in-out infinite",
        "spin-slow": "spin-slow 5s linear infinite",
        "glow-shadow": "glowing 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
