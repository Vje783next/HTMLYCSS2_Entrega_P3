/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      letterSpacing: {
        'extra-wide': '0.125em', // Equivalente a 2px
      },
      fontFamily: {
        verdana: ['Verdana', 'sans-serif'], // Fuente personalizada
      },
    },
  },
  plugins: [],
}

