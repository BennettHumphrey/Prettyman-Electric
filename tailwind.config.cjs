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
          'main': '#f7f7f7',
          'accent': '#8bc34a',
          'contact': '#8bc34a',
          'menu': '#7fad3b',
          'text': '#333645',
          'text-light': 'white',
          'dropdown': '#242D37',
          'line': 'black',
          'footer-bg': '#242D37',
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
            '40%': { color: '#ffaa06' },
            '100%': { color: '#8bc34a' },
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
