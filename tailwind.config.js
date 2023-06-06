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
        lblue: 'hsl(180, 66%, 49%)',
        darkViolet: 'hsl(257, 27%, 26%)',
        red: 'hsl(0, 87%, 67%)',
        gray : {
          100: 'hsl(0, 0%, 75%)',
          200: 'hsl(257, 7%, 63%)',
          300: 'hsl(255, 11%, 22%)',
          400: 'hsl(260, 8%, 14%)',
        }
      }
    },
  },
  plugins: [],
}
