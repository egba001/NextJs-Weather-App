/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        lblue: '#2acfcf',
        darkViolet: '#3b3054',
        red: '#f46262',
        gray : {
          100: '#bfbfbf',
          200: '#9e9aa7',
          300: '#35323e',
          400: '#232127',
        }
      }
    },
  },
  plugins: [],
}
