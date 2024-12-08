/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        container: "1440px",
      },
      animation: {
        spin: 'spin 2s linear infinite', 
        zoom: 'zoom 2s infinite',
      },
      keyframes: {
        zoom: {
          '0%, 100%': { transform: 'scale(1)' }, // Start and end at original size
          '50%': { transform: 'scale(1.5)' },   // Scale up at the midpoint
        },
      },
    },
  },
  plugins: [],
};
