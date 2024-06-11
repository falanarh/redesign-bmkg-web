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
    fontSize: {
      '2xs': '0.4rem',
      xs: '0.6rem',
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    screens: {
      'xs': '520px',
      // => @media (min-width: 520px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1120px',
      // => @media (min-width: 1120px) { ... }

      'xl': '1281px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      'pt-sans': "PT Sans",
      'pt-sans-caption': "PT Sans Caption",
    },
    extend: {
      colors: {
        nonActive: '#666666',
        graytext:'#BDC3C7',
        active: '#1C2B78',
        tertiary :'#0032CB',
        fouthtiary :'#008BF9',
        warning : '#FEEBCB',
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()]
}
"PT Sans"

