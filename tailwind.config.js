module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      screens: {
        'tablet': '800px',
        'laptop': '1200px',
      },
      colors: {
        'primary': '#5948de',
        'secondary': '#311550',
        'light': '#fff',
        'dark': '#000',
        'button': '#69be5f',
        'card': '#552964',
        'highlight': '#80FF00',
        'purple': '#CC2DE1',
      },
      fontSize: {
        '1.2': '1.2rem',
        '1.4': '1.4rem',
        '1.5': '1.5rem',
        '1.7': '1.75rem',
        '2': '2rem',
      },
      fontFamily: {
        verdana: ['Verdana', 'sans-serif'], // Fuente personalizada
      },
      boxShadow: {
        custom: '1px 1px 10px #80FF00',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },

  },
  plugins: [
  ],}

