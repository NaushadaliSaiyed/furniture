/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/src/assets/ms_115_3.jpg')",
        'backgroundOne': "url('/src/assets/01.png')",
      }
    },
  },
  plugins: [],
}