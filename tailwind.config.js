/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/Components/**/*.{js,jsx,ts,tsx}', './src/Navigation/**/*.{js,jsx,ts,tsx}', "./src/Components/TodoItem/**/*.{js,jsx,ts,tsx}", "./**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
