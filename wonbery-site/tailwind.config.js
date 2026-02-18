/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Open Sans', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#2ea3f2',
          dark: '#1a8ad8',
          light: '#5bb8f5',
          50: '#eef7fe',
          100: '#d4ecfd',
          200: '#a9d9fb',
        },
        dark: {
          DEFAULT: '#1a1a2e',
          light: '#16213e',
          lighter: '#0f3460',
        },
      },
    },
  },
  plugins: [],
}
