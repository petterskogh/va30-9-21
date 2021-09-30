module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}','./components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        xlentyellow: {
          light: 'rgb(255, 206, 122)',
          DEFAULT: 'rgb(255, 170, 25)',
          dark: 'rgb(168, 113, 19)',
        }
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'Arial', 'sans-serif']
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
