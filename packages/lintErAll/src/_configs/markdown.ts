import { _rules } from '../_rules'
import { _files } from '../_files'
import pluginMarkdown from '@eslint/markdown'
import { type ConfigWithExtends } from '@eslint/config-helpers'
export const markdown: ConfigWithExtends = {
  name:    'Markdown Config',
  files:   _files.markdown,
  extends: [
    pluginMarkdown.configs.recommended,
  ],
  language: 'markdown/commonmark',
  rules:    _rules.markdown,
}
