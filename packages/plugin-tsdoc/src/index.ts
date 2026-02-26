import { TSESLint } from '@typescript-eslint/utils'
import { syntaxRule } from './rules/syntax/syntax.js'

const plugin = {
  meta: {
    name:      '@er/eslint-plugin-tsdoc',
    version:   '1.0.0',
    namespace: 'tsdoc',
  },
  rules: {
    syntax: syntaxRule,
  },
  configs: {},
} satisfies TSESLint.Linter.Plugin

// Provide a recommended Flat Config [5]
const recommendedConfig: TSESLint.Linter.ConfigType = {
  name:    'tsdoc/recommended',
  plugins: {
    tsdoc: plugin,
  },
  rules: {
    'tsdoc/syntax': 'error',
  },
}

export default {
  ...plugin,
  configs: {
    recommended: recommendedConfig,
  },
}
