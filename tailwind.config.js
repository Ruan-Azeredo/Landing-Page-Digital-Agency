/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'black': {
        high: '#1F242D',
        medium: '#272D38',
        low: '#313846'
      },
      'gray': {
        high: '#B4AFAD',
        medium: '#DEDCDB',
        low: '#FFFFFF'
      },
      'red': {
        high: '#BA2E45',
        medium: '#D34F64',
        low: '#E28997'
      },
      'green': {
        high: '#238C6E',
        medium: '#2CAF8A',
        low: '#42D0A8'
      },
      'yellow': {
        high: '#BD7528',
        highMedium: '#D89246',
        medium: '#D8963F',
        mediumLow: '#E4B581',
        low: '#F3DEC2'
      },
      'blue': {
        high: '#5A87C2',
        medium: '#8EADD5',
        low: '#CFDCED'
      }
    },
    extend: {},
  },
  plugins: [],
}
