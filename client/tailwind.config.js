/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'footer-texture': "url('/img/footer-texture.png')",
        'wood':"url('./src/assets/Wood.svg')"
      }
    },
  },
  plugins: [],
}

