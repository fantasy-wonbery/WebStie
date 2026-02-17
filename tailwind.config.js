/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Avinect 集团品牌 - 深蓝+白
        avinect: {
          primary: '#0A1E3D',
          secondary: '#1E3A5F',
          accent: '#4A90D9',
          light: '#E3F2FD',
        },
        // 鲸品 JpMall - 航司系统品牌
        jpmall: {
          primary: '#0D1F3C',
          secondary: '#FF6F00',
          accent: '#FFB74D',
          light: '#FFF3E0',
        },
        // weflye - 旅客平台品牌
        weflye: {
          primary: '#0A1E3D',
          secondary: '#1565C0',
          accent: '#42A5F5',
          light: '#E3F2FD',
        },
        // STARRY SKY - 高端产品线
        starry: {
          primary: '#0A1E3D',
          gold: '#C5A55A',
          goldLight: '#D4B96E',
          dark: '#091828',
        },
        // Wonbery - 科技深蓝（保留）
        wonbery: {
          primary: '#0D1B2A',
          secondary: '#1B4965',
          accent: '#5FA8D3',
          light: '#CAE9FF',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', '"Noto Sans"', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'Consolas', '"Courier New"', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-up': 'slideUp 0.6s ease-out',
        'fade-in': 'fadeIn 0.8s ease-out',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient': 'gradient 8s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(197, 165, 90, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(197, 165, 90, 0.6)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
