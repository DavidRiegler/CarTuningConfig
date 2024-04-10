/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#EFE81E",
        font: "#CCCCCC",
        darkBg: "#050505",
        lightBg: "#262626",
      }
    },
  },
  plugins: [],
}

