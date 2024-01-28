/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        black: '#1e1e1e',
        white: '#e7e7d8',
        eagle: '#afac95',
        carrot: '#ea4125',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Basement', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
