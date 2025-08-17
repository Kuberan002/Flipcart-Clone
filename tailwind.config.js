/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}", // This is an example, adjust path to your files
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#1da1f2',
      }
    },
  },
  plugins: [],
}