/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'patua-one': ["Patua One", "cursive"],
      },
      spacing: {
        'contact': '28.5rem',
        'yspace': '1.25rem'
      },
      backgroundImage: {
        'waves': "url('../public/waves_purple.svg')",
        'layer': "url('../public/waving.svg')",
      }
    },
  },
  plugins: [],
}
