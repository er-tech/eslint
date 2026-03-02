import path from 'node:path'
import tseslint from 'typescript-eslint'
import { RuleTester } from '@typescript-eslint/rule-tester'
import { syntaxRule } from './syntax'
import { readFileSync } from 'node:fs'

RuleTester.afterAll = afterAll
RuleTester.it = it
RuleTester.itOnly = it.only
RuleTester.describe = describe

const valid = readFileSync(path.join(import.meta.dirname, '../../_jest/data/inquirer.txt'), 'utf8')
  .split('\n')

const ruleTester = new RuleTester({
  languageOptions: {
    parser:        tseslint.parser,
    parserOptions: {
      projectService: {
        allowDefaultProject: ['*.ts*'],
        defaultProject:      'tsconfig.json',
      },
      tsconfigRootDir: path.join(__dirname, '../..'),
    },
  },
})

// eslint-disable-next-line jest/require-hook
ruleTester.run('syntax', syntaxRule, {
  valid,
  invalid: [
    {
      code: `
          enum Values {}
          for (const a in Values) {}
      `,
      errors: [
        {
          column:    27,
          endColumn: 33,
          line:      3,
          endLine:   3,
          messageId: 'syntax',

        },
      ],
    },
  ],
})
