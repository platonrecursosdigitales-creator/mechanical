/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mb-navy': '#1D2240',
        'mb-navy-dark': '#111426',
        'mb-navy-soft': '#252B50',
        'mb-red': '#E30E14',
        'mb-red-dark': '#B90B10',
        'mb-red-light': '#FF252B',
        'mb-white': '#FFFFFF',
        'mb-off-white': '#F5F5F2',
        'mb-gray': '#D9D9D9',
        'mb-muted': '#B8BBC9',
      },
      fontFamily: {
        hero: ['"Graduate"', 'serif'],
        heading: ['"Roboto Slab"', 'serif'],
        body: ['"Barlow"', 'sans-serif'],
        ui: ['"Barlow Condensed"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
