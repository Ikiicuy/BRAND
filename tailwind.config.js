/** @type {import('tailwindcss').Config} */
export default {
  darkMode:"class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "head":["Lexend Giga", "sans-serif"],
        "body":["Poppins","sans-serif"]
      }
    },
  },
  plugins: [],
}