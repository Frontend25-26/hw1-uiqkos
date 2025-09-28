import { defineConfig } from 'vite'

import { REPO_NAME } from './config'

export default defineConfig({
    root: './src',
    base: `/${REPO_NAME}/`,
    server: {
      open: true,
      port: 3030,
    },
    build: {
      outDir: './dist'
    },
    test: {
      dir: './tests/unit',
      environment: 'jsdom',
      setupFiles: './tests/setup.js'
    }
})
