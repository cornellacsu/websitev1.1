/** @type {import('tailwindcss').Config} */
module.exports = {
  // Tell Tailwind which files to scan for class names
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {}, // You can add custom colors, fonts, spacing here later
  },
  plugins: [], // Add Tailwind plugins here if needed
};