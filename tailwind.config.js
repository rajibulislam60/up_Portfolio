/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center:true,
        screens:{
          sm:"359px",
          md:"768px",
          lg:"960px",
          xl:"1119px",
          "2xl":"1440px"
        }
      },
      animation: {
        spin: 'spin 2s linear infinite', 
        zoom: 'zoom 2s infinite',
      },
      keyframes: {
        zoom: {
          '0%, 100%': { transform: 'scale(1)' }, 
          '50%': { transform: 'scale(1.5)' },   
        },
      },
    },
  },
  plugins: [],
};
