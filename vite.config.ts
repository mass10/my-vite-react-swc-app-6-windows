import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
// import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        "main": "index.html",
        "element-rect": "element-rect/index.html",
        "embedded1": "embedded1/index.html",
        "floating-layout-example": "floating-layout-example/index.html",
        "grid-layout-example": "grid-layout-example/index.html",
        "iframe1": "iframe1/index.html",
        "iframe2": "iframe2/index.html",
        "iframe3": "iframe3/index.html",
        "popup": "popup/index.html",
        "large-canvas-1": "large-canvas-1/index.html",
        "scale-or-zoom": "scale-or-zoom/index.html",
        "zoom2": "zoom2/index.html",
        "yoko-scroll-table": "yoko-scroll-table/index.html",
        "font-awesome": "font-awesome/index.html",
        "canvas-1": "canvas-1/index.html",
        "shadow-dom-1": "shadow-dom-1/index.html",
        "shadow-dom-2": "shadow-dom-2/index.html",
        "custom-elements": "custom-elements/index.html",
        "document-fragment": "document-fragment/index.html",
        "images0": "images0/index.html",
        "images1": "images1/index.html",
        "images2": "images2/index.html",
      }
    }
  }
})
