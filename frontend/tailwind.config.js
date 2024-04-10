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
        darkBg: "#050505",
        lightBg: "#262626",
      }
    },
  },
  plugins: [],
}

