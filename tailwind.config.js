/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      phone: '320px',
      tablet: '768px',
      laptop: '1024px',
      desktop: '1280px',
    },
    extend: {},
  },
  plugins: [],
};
