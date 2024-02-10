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
      screens: {
        xs: "480px",
        ss: "620px",
        sm: "768px",
        cd: "890px",
        md: "1060px",
        lg: "1200px",
        xl: "1700px",
      },
    },
  },
  plugins: [],
}

