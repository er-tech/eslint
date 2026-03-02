import { defineConfig } from 'eslint/config'
import { lintErAll } from './dist/linterall/index.js'
export default defineConfig([
  ...lintErAll.configs.recommended,
])
