const plugin = require('tailwindcss/plugin')
/** 
 * @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js,img,jpg,jpeg,png}", "./public/images/**/*.{png,jpg,jpeg,gif,svg}"],
  theme: {
    extend: {
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '10px 10px 10px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },
    },

  
    fontFamily: {
      'Cormorant' : ['cormorant'],
      'Caveat' : ['Caveat'],
      'Mate+SC' : ['Mate SC'],
      'Nanum+Myeongjo' :['NanumMyeongjo'],
      'Dhurjati' : ['Dhurjati'],
      
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],
}


