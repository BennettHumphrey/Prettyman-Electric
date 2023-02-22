/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
    theme: {
      screens: {
        xsm: '480px',
        sm: '550px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      extend: {
        colors: {
          'main': '	#f2f2f2',
          'accent': '#606c94',
          'contact': 'red',
          'menu': '#123196',
          'text': '#333333',
          'text-light': '#f7f7f7',
          'dropdown': '#242D37',
          'line': 'black',
          'footer-bg': '#242D37',
          'footer-text': 'grey',
        },
        height: {
          'screen-width': '100vw'
        }
    },
},
  plugins: [],
}
