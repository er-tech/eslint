import { defineConfig } from 'eslint/config'
import { lintErAll } from './eslint.linterall.mjs'
export default defineConfig([
  ...lintErAll.config.recommended,
])
