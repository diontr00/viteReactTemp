/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    screens: {
      phone: '320px',
      tablet: '768px',
      laptop: '1024px',
      desktop: '1280px',
    },
    extend: {
      colors: {
        primary: 'var(--primary)',
        darkbg: 'var(--bg-dark)',
        lightbg: 'var(--bg-light)',
      },
    },
  },
  plugins: [],
};
