/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-red': {
          DEFAULT: '#c62828',
          soft: '#d63c3c',
          dark: '#b71c1c',
          deeper: '#9f1a1a',
        },
        'sand': '#f6f1eb',
      },
      fontFamily: {
        hero: ['"EurostileLTpro"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};