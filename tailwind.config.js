/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/src/assets/dark-furniture.jpg')",
        'backgroundOne': "url('/src/assets/01.png')",
        'product1': "url('/src/assets/symbioosa-lighting-llev.jpg')",
      }
    },
  },
  plugins: [],
}