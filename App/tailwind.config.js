/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/*/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily : {
        'Montserrat' : ['Montserrat', 'sans-serif'],
        'Questrial' : ['Questrial', 'sans-serif'],
      },
      colors : {
        'primary' : 'background: linear-gradient(180.11deg, #3D63FF 0.1%, #6B85F1 14.21%)'
      }
    },
  },
  plugins: [],
}
