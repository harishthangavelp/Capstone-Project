import { defineConfig } from 'vite'
import { nodePolyfills } from 'vite-plugin-node-polyfills'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [
      nodePolyfills(),
      react()
    ],
    server:{
        port: 5173
    }
  })