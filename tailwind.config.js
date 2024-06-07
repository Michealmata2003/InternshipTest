/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    screens: {
      'xl': {'max':'1280px'},
      'lg': {'max':'1024px'},
      'md': {'max':'768px'},
      'sm': {'max' :'550px'},
      'mde': {'min' :'768px'},
    },
    extend: {
      backgroundImage: {
        'profile_bg': "url('././assets/profile_background.webp')",
      },
      colors: {
        design1: '#183087',
        design2: '#4A4DE6',
        design3: '#F1F1F1',
        design4: '#ECD348',
        design5: '#F5F5F5',
        design6: '#E1F5FD',
        design7: '#FF9365',
        design8: '#FFA000',
        design9: '#EA4C89',
        design10: '#9698F1',
        white: '#ffffff',
        black: '#000000',
      }
    },
  },
  plugins: [],
}

