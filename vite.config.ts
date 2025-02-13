import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        "main": resolve(__dirname, "index.html"),
        "embedded1": resolve(__dirname, "embedded1/index.html"),
        "floating-layout-example": resolve(__dirname, "floating-layout-example/index.html"),
        "grid-layout-example": resolve(__dirname, "grid-layout-example/index.html"),
        "large-canvas-1": resolve(__dirname, "large-canvas-1/index.html")
      }
    }
  }
})
