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
        'CTA-primary' : '#6B85F1',
        'CTA-secondary' : '#039E00',
        'CTA-tertiary' : '#9C9C9C',
        'CTA-additional' : '#F13737',
        'main-top' : '#6B85F1',
        'main-bottom' : '#6B85F1 opacity 75'
      },
      backgroundImage: {
        'landing' : "url('./assets/images/GradientBackground.svg')",
      }
    },
  },
  plugins: [],
}
