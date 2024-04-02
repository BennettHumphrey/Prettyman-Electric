/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
    theme: {
      screens: {
        xs: '480px',
        sm: '550px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },

      // TODO: Pull colors from Sanity

      extend: {
        colors: {
          'main': 'grey',
          'accent': 'yellow',
          'contact': 'red',
          'menu': 'blue',
          'text': 'green',
          'text-light': 'pink',
          'dropdown': '#242D37',
          'line': 'black',
          'footer-bg': 'purple',
          'footer-text': 'grey',
        },
        height: {
          'screen-width': '100vw'
        },
        keyframes: {
        'checkmark': {
          '0%': {},
          '50%': { transform: 'scale(1.3)' },
          '100%': { transform: 'scale(1)' },
          },
          'phone': {
            '0%': { transform: 'scale(1)' },
            '25%': { transform: 'rotate(-3deg) translateY(1px)' },
            '50%': { transform: 'rotate(3deg) translateY(-1px)' },
            '75%': { transform: 'rotate(3deg) translateY(-1px)' },
            '100%': { transform: 'rotate(-3deg) translateY(1px)' },
          },
          'shield': {
            '0%': {},
            '50%': { transform: 'scale(1.2)' },
            '100%': { transform: 'scale(1)' },
          },
        },
    },
    animation: {
      'checkmark-animation': 'checkmark 1.4s infinite',
      'phone-animation': 'phone 0.5s infinite',
      'shield-animation': 'shield 1.5s infinite',
    },
},
  plugins: [],
}
