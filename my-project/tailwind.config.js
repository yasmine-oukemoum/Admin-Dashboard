/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        poppins:['Poppins', 'sans-serif']
      },
      colors: {
        primary: '#00E4AB',
        secondary: '#5079D8',
        light: '#F5F6F6',
        dark: '#333333',
        dark2: '#999999',
        lala:'#4a4a4a',
        lala2:'#003142',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
    },
  },
  plugins: [],
}