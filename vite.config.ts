import { defineConfig } from 'vite'
import vike from 'vike/plugin'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import mdx from '@mdx-js/rollup'

export default defineConfig({
  plugins: [
    mdx(),
    vike(),
    react(),
    tailwindcss(),
  ],
})
