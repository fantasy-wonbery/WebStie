import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig(({ command }) => ({
  // 默认 GitHub Pages 用 '/WebStie/wonbery/'，服务器部署时通过脚本临时修改
  base: command === 'build' ? '/WebStie/wonbery/' : '/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
}))
