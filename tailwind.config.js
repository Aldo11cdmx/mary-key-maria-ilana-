/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fdf2f5',
          100: '#fce7ee',
          200: '#f9d0dc',
          300: '#f4a9bf',
          400: '#ec7ba0',
          500: '#dd4f83',
          600: '#c93368',
          700: '#a82454',
          800: '#8a2148',
          900: '#771e40'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif']
      },
      boxShadow: {
        glass: '0 8px 32px rgba(200, 50, 110, 0.12)'
      }
    }
  },
  plugins: []
}
