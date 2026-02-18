/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#0A1E3D',
          light: '#132D54',
        },
        accent: {
          DEFAULT: '#42A5F5',
          dark: '#1565C0',
        },
        surface: '#0D2444',
        gold: '#C5A55A',
      },
    },
  },
  plugins: [],
}
