/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#222222',
        },
        airbnb: {
          gray: {
            light: '#767676',
            dark: '#484848',
          },
          accent: '#FF5A5F',
          green: '#00A699',
          orange: '#FC642D',
        },
      },
      fontFamily: {
        text: ['Nunito', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
