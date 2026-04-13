/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        trayec: {
          green: '#15803d',
          'green-dark': '#14532d',
          'green-light': '#dcfce7',
          orange: '#f59e0b',
          'orange-dark': '#d97706',
          'gray-text': '#334155',
          'gray-bg': '#f8fafc',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
