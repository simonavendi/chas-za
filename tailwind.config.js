/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6FDB45',
        'primary-dark': '#5bc235',
        navy: '#1E3354',
        'navy-2': '#2E3E5C',
        'text-dark': '#4A4A4A',
        'text-muted': '#D1D1D1',
        'text-gray': '#C7CBCF',
        'bg-light': '#F9F9F9',
        'bg-blue': '#F1F6FB',
        'bg-green-light': '#F1F9ED',
        star: '#F7C40E',
        danger: '#E15554',
      },
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
