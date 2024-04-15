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
        primaryHover: "#F0B61F",
        font: "#CCCCCC",
        darkBg: "#050505",
        lightBg: "#262626",
      }
    },
  },
  plugins: [],
}

