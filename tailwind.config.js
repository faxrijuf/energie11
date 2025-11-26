/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-red': '#c62828',
        'sand': '#f6f1eb',
      },
      fontFamily: {
        hero: ['"EurostileLTpro"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};