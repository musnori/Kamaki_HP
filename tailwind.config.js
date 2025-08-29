/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f5fbff',
          100: '#e6f5ff',
          200: '#cfeaff',
          300: '#a6d9ff',
          400: '#6fc1ff',
          500: '#3aa6ff',
          600: '#1c86e6',
          700: '#1669b3',
          800: '#144f86',
          900: '#123f6b',
        },
      },
      boxShadow: {
        'soft': '0 8px 30px rgba(0,0,0,0.06)'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
