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
        "element-rect": resolve(__dirname, "element-rect/index.html"),
        "embedded1": resolve(__dirname, "embedded1/index.html"),
        "floating-layout-example": resolve(__dirname, "floating-layout-example/index.html"),
        "grid-layout-example": resolve(__dirname, "grid-layout-example/index.html"),
        "iframe1": resolve(__dirname, "iframe1/index.html"),
        "popup": resolve(__dirname, "popup/index.html"),
        "large-canvas-1": resolve(__dirname, "large-canvas-1/index.html"),
        "scale-or-zoom": resolve(__dirname, "scale-or-zoom/index.html"),
        "zoom2": resolve(__dirname, "zoom2/index.html"),
        "yoko-scroll-table": resolve(__dirname, "yoko-scroll-table/index.html"),
        "font-awesome": resolve(__dirname, "font-awesome/index.html"),
        "canvas-1": resolve(__dirname, "canvas-1/index.html"),
        "custom-elements": resolve(__dirname, "custom-elements/index.html"),
      }
    }
  }
})
