// tailwind.config.js
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html",
  ],
  darkMode: 'class', // Enable dark mode with class strategy
  theme: {
    extend: {
      colors: {
        // Primary brand colors
        primary: {
          50: colors.blue[50],
          100: colors.blue[100],
          200: colors.blue[200],
          300: colors.blue[300],
          400: colors.blue[400],
          500: colors.blue[600], // Main brand color
          600: colors.blue[700],
          700: colors.blue[800],
          800: colors.blue[900],
          900: colors.blue[950],
        },
        // Background colors
        background: {
          light: colors.white,
          dark: colors.gray[900],
        },
        // Surface colors (cards, dropdowns, etc)
        surface: {
          light: colors.white,
          dark: colors.gray[800],
        },
        // Text colors
        text: {
          primary: {
            light: colors.gray[900],
            dark: colors.gray[100],
          },
          secondary: {
            light: colors.gray[600],
            dark: colors.gray[400],
          },
          disabled: {
            light: colors.gray[400],
            dark: colors.gray[600],
          },
        },
        // Border colors
        border: {
          light: colors.gray[200],
          dark: colors.gray[700],
        },
        // Status colors
        status: {
          success: colors.green[500],
          error: colors.red[500],
          warning: colors.yellow[500],
          info: colors.blue[500],
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}