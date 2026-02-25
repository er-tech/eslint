import { Linter } from 'eslint'
export const yaml: Linter.RulesRecord = {
  indent:           ['error', 2],
  'eol-last':       ['error', 'never'],
  'spaced-comment': 'off',
}
