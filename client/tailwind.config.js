/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'booking': "url('./src/assets/Booking.svg')",
        'wood':"url('./src/assets/Wood.svg')"
      },
      borderColor:{
        'Black':"#000"
      },
    },
  },
  plugins: [],
}

