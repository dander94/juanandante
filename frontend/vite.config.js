import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        manifest: true,
        outDir: 'static/dist',
        rollupOptions: {
            input: 'main.js'
        }
    }
});