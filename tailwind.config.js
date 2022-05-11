const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      lato : ['Lato', 'sans-seif'],
    },
    colors : {
      ...defaultTheme.colors,
      "special-gray": '#F5F0F0',
      "red-light": '#FF7F7F', 
      "red-dark": '#BE1F35',
      
    },
    extend: {
      backgroundColor: ['active', 'hover', 'focus']
    },
  },
  plugins: [],
}
