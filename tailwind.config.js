/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        jam: {
          900: '#1a0b2e',
          800: '#2d1b4e',
          700: '#432c7a',
          500: '#764ba2',
          400: '#9f7aea',
          100: '#e9d8fd',
        },
        neon: {
          pink: '#ff0080',
          blue: '#00f0ff',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}