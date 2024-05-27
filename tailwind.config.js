/* eslint-disable no-undef */
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'pt-sans': "PT Sans",
      'pt-sans-caption': "PT Sans Caption",
    },
    extend: {
      colors: {
        nonActive: '#666666',
        active: '#1C2B78',
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()]
}
"PT Sans"

