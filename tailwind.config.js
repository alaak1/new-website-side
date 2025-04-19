/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-gray': '#1F1F1F',
        'brand-gray-light': '#2A2A2A',
        'brand-gray-dark': '#151515',
        'brand-white': '#F5F5F5',
        'brand-cyan': '#00D1FF',
        'brand-blue': '#0066FF',
        'brand-red': '#FF2D55',
        'brand-bg':    '#1F1F1F',
        'brand-input': '#2A2A2A',

      }
    },
},
plugins: [],
}
