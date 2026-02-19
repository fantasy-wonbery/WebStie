import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig(({ command, mode }) => ({
  // 生产环境部署到 avinect.com 时用 '/wonbery/'，GitHub Pages 用 '/WebStie/wonbery/'
  base: mode === 'production' ? '/wonbery/' : (command === 'build' ? '/WebStie/wonbery/' : '/'),
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
}))
