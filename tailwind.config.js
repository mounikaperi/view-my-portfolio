/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js.jsx}",
    "./pages/**/*.{js.jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        grey: {
          800: '#18141c',
          900: '#120f16'
        },
        yellow: {
          400: '#FEDE00'
        }
      },
      backgroundImage: {
        heropattern: "url(/herobgc.jpg)"
      }
    },
  },
  plugins: [],
}

