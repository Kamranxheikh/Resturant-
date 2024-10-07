// /** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'great-vibes': ['"Great Vibes"', 'cursive'],
        'montserrat': ['"Montserrat"', 'sans-serif'],
        'customSerif': ['Times New Roman', 'serif'],
         'serif': ['Merriweather', 'serif'],
         'sans' : ['Open Sans', 'sans-serif'],


        'fede-ro': ['"Fede Ro"', 'sans-serif'],
        'custom:': ['Arial', 'Verdana', 'sans-serif'],
      },
    },
  },
  variants: {},
  plugins: [],

    
  }
  
  // theme: {
  //   extend: {},
  // },
  // plugins: [],

