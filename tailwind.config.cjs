/** @type {import('tailwindcss').Config} */
module.exports = {
  important: '#app',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'login-bg': '#f6fafd',
      },
    },
  },
  plugins: [],
}
