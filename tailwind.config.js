/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xxs': '320px',
        'xm': '500px' 
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
