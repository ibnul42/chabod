/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#800020',
        hover: '#460515'
      },
      boxShadow: {
        custom: '2px 3px 4px rgba(0,0,0,0.35)'
      }
    },
  },
  plugins: [],
}