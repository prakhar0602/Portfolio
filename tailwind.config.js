/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  screens:{
    sm:"640px",
    md:"768px",
    lg:"960px",
    xl:"1200px",
  },
  theme: {
    extend: {
      primary:'#1c1c22',
      accent:{
        DEFAULT:'00ff99',
        hover:''
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

