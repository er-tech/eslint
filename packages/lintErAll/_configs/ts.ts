import pluginImportX from 'eslint-plugin-import-x'
import pluginNode from 'eslint-plugin-n'
import pluginPromise from 'eslint-plugin-promise'
import pluginReact from 'eslint-plugin-react'
import pluginReactHooks from 'eslint-plugin-react-hooks'
import pluginReactRefresh from 'eslint-plugin-react-refresh'
import eslintPluginUnicorn from 'eslint-plugin-unicorn'
import globalsConfig from 'globals'
import pluginTypescript from 'typescript-eslint'
import { _rules } from '../_rules'
import { _files } from '../_files'
import { type ConfigWithExtends } from '@eslint/config-helpers'

const globalsJsTs = {
  ...globalsConfig.node,
  ...globalsConfig.jest,
  ...globalsConfig.vitest,
  ...globalsConfig.browser,
}

const standardExtends = [
  pluginImportX.configs['flat/recommended'] as any,
  pluginNode.configs['flat/recommended'],
  {
    name:    'promise/flat/recommended',
    plugins: { promise: pluginPromise },
    rules:   _rules.ts.standard,
  },
]
export const standard: ConfigWithExtends = {
  name:            'Standard Config',
  files:           _files.ts,
  languageOptions: {
    globals: globalsJsTs,
  },
  extends: standardExtends,
  rules:   _rules.ts.standard,
}

export const lintErAll: ConfigWithExtends = {
  name:            'LintErAll Config',
  files:           _files.ts,
  ignores:         _files.tsTest,
  languageOptions: {
    globals:       globalsJsTs,
    parserOptions: {
      project:             './tsconfig.json',
      allowDefaultProject: true,
      ecmaFeatures:        { jsx: true },
    },
  },
  settings: {
    react: {
      version: '19.2',
    },
  },
  extends: [
    ...standardExtends,
    ...pluginTypescript.configs.stylisticTypeChecked,
    ...pluginTypescript.configs.recommended,
    pluginReactHooks.configs.flat.recommended,
    eslintPluginUnicorn.configs.recommended,
    pluginReact.configs.flat.recommended,
    pluginReactHooks.configs.flat.recommended,
    pluginReactRefresh.configs.recommended,
  ],
  rules: _rules.ts.lintErAll,
}

export const lintErAllTest: ConfigWithExtends = {
  ...lintErAll,
  name:  'LintErAll Tests Config',
  files: _files.tsTest,
  rules: _rules.ts.lintErAllTest,

}
