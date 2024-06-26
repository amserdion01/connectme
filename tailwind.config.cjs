/** @type {import('tailwindcss').Config} */
const config = {
  mode: 'jit',
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/line-clamp'), require('@tailwindcss/typography')],
};

module.exports = config;
