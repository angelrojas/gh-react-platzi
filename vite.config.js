import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://angelrojas.github.io/gh-react-platzi/',
  plugins: [react()]
})
