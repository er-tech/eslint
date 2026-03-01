import pluginJson from '@eslint/json'
import pluginJsonc from 'eslint-plugin-jsonc'
import pluginMarkdown from '@eslint/markdown'
import pluginImportX from 'eslint-plugin-import-x'
import pluginNode from 'eslint-plugin-n'
import pluginPromise from 'eslint-plugin-promise'
import pluginReact from 'eslint-plugin-react'
import pluginReactHooks from 'eslint-plugin-react-hooks'
import pluginReactRefresh from 'eslint-plugin-react-refresh'
import eslintPluginUnicorn from 'eslint-plugin-unicorn'
import globalsConfig from 'globals'
import pluginTypescript from 'typescript-eslint'
import { configs } from 'eslint-plugin-yml'

const ignores = {
  name:    'Global Ignores',
  ignores: [
    '.azurite/**',
    'coverage/**',
    'dist-dev/**',
    'dist-prd/**',
    'dist-preprod/**',
    'dist-prod/**',
    'dist-uat/**',
    'dist/**',
    'doc/**',
    'lib/**',
    '**/node_modules/**',
    'node_modules/**',
    '.nx/**',
    'tmp/*',
    // The file can be too big and is auto-generated, we don't want to waste resource on it
    'package-lock.json',
  ],
}

const javaScriptStandardImport = {
  'import-x/export':                   'error',
  'import-x/first':                    'error',
  'import-x/no-absolute-path':         ['error', { esmodule: true, commonjs: true, amd: false }],
  'import-x/no-duplicates':            'error',
  'import-x/no-named-default':         'error',
  'import-x/no-webpack-loader-syntax': 'error',
}
const javaScriptStandardN = {
  'n/handle-callback-err':   ['error', '^(err|error)$'],
  'n/no-callback-literal':   'error',
  'n/no-deprecated-api':     'error',
  'n/no-exports-assign':     'error',
  'n/no-new-require':        'error',
  'n/no-path-concat':        'error',
  'n/process-exit-as-throw': 'error',
}
const rulesJavaScriptStandardPromise = {
  'promise/param-names': 'error',
}
/**
 * Standard JavaScript rules - https://standardjs.com
 */
const standard$1 = {
  'no-var':                'warn',
  'object-shorthand':      ['warn', 'properties'],
  'accessor-pairs':        ['error', { setWithoutGet: true, enforceForClassMembers: true }],
  'array-bracket-spacing': ['error', 'never'],
  'array-callback-return': ['error', {
    allowImplicit: false,
    checkForEach:  false,
  }],
  'arrow-spacing': ['error', { before: true, after: true }],
  'block-spacing': ['error', 'always'],
  'brace-style':   ['error', '1tbs', { allowSingleLine: true }],
  camelcase:       ['error', {
    allow:         ['^UNSAFE_'],
    properties:    'never',
    ignoreGlobals: true,
  }],
  'comma-dangle': ['error', {
    arrays:    'never',
    objects:   'never',
    imports:   'never',
    exports:   'never',
    functions: 'never',
  }],
  'comma-spacing':             ['error', { before: false, after: true }],
  'comma-style':               ['error', 'last'],
  'computed-property-spacing': ['error', 'never', { enforceForClassMembers: true }],
  'constructor-super':         'error',
  curly:                       ['error', 'multi-line'],
  'default-case-last':         'error',
  'dot-location':              ['error', 'property'],
  'dot-notation':              ['error', { allowKeywords: true }],
  'eol-last':                  'error',
  eqeqeq:                      ['error', 'always', { null: 'ignore' }],
  'func-call-spacing':         ['error', 'never'],
  'generator-star-spacing':    ['error', { before: true, after: true }],
  indent:                      ['error', 2, {
    SwitchCase:             1,
    VariableDeclarator:     1,
    outerIIFEBody:          1,
    MemberExpression:       1,
    FunctionDeclaration:    { parameters: 1, body: 1 },
    FunctionExpression:     { parameters: 1, body: 1 },
    CallExpression:         { arguments: 1 },
    ArrayExpression:        1,
    ObjectExpression:       1,
    ImportDeclaration:      1,
    flatTernaryExpressions: false,
    ignoreComments:         false,
    ignoredNodes:           [
      'TemplateLiteral *',
      'JSXElement',
      'JSXElement > *',
      'JSXAttribute',
      'JSXIdentifier',
      'JSXNamespacedName',
      'JSXMemberExpression',
      'JSXSpreadAttribute',
      'JSXExpressionContainer',
      'JSXOpeningElement',
      'JSXClosingElement',
      'JSXFragment',
      'JSXOpeningFragment',
      'JSXClosingFragment',
      'JSXText',
      'JSXEmptyExpression',
      'JSXSpreadChild',
    ],
    offsetTernaryExpressions: true,
  }],
  'key-spacing':                   ['error', { beforeColon: false, afterColon: true }],
  'keyword-spacing':               ['error', { before: true, after: true }],
  'lines-between-class-members':   ['error', 'always', { exceptAfterSingleLine: true }],
  'multiline-ternary':             ['error', 'always-multiline'],
  'new-cap':                       ['error', { newIsCap: true, capIsNew: false, properties: true }],
  'new-parens':                    'error',
  'no-array-constructor':          'error',
  'no-async-promise-executor':     'error',
  'no-caller':                     'error',
  'no-case-declarations':          'error',
  'no-class-assign':               'error',
  'no-compare-neg-zero':           'error',
  'no-cond-assign':                'error',
  'no-const-assign':               'error',
  'no-constant-condition':         ['error', { checkLoops: false }],
  'no-control-regex':              'error',
  'no-debugger':                   'error',
  'no-delete-var':                 'error',
  'no-dupe-args':                  'error',
  'no-dupe-class-members':         'error',
  'no-dupe-keys':                  'error',
  'no-duplicate-case':             'error',
  'no-useless-backreference':      'error',
  'no-empty':                      ['error', { allowEmptyCatch: true }],
  'no-empty-character-class':      'error',
  'no-empty-pattern':              'error',
  'no-eval':                       'error',
  'no-ex-assign':                  'error',
  'no-extend-native':              'error',
  'no-extra-bind':                 'error',
  'no-extra-boolean-cast':         'error',
  'no-extra-parens':               ['error', 'functions'],
  'no-fallthrough':                'error',
  'no-floating-decimal':           'error',
  'no-func-assign':                'error',
  'no-global-assign':              'error',
  'no-implied-eval':               'error',
  'no-import-assign':              'error',
  'no-invalid-regexp':             'error',
  'no-irregular-whitespace':       'error',
  'no-iterator':                   'error',
  'no-labels':                     ['error', { allowLoop: false, allowSwitch: false }],
  'no-lone-blocks':                'error',
  'no-loss-of-precision':          'error',
  'no-misleading-character-class': 'error',
  'no-prototype-builtins':         'error',
  'no-useless-catch':              'error',
  'no-mixed-operators':            ['error', {
    groups: [
      ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
      ['&&', '||'],
      ['in', 'instanceof'],
    ],
    allowSamePrecedence: true,
  }],
  'no-mixed-spaces-and-tabs':     'error',
  'no-multi-spaces':              'error',
  'no-multi-str':                 'error',
  'no-multiple-empty-lines':      ['error', { max: 1, maxBOF: 0, maxEOF: 0 }],
  'no-new':                       'error',
  'no-new-func':                  'error',
  'no-new-object':                'error',
  'no-new-symbol':                'error',
  'no-new-wrappers':              'error',
  'no-obj-calls':                 'error',
  'no-octal':                     'error',
  'no-octal-escape':              'error',
  'no-proto':                     'error',
  'no-redeclare':                 ['error', { builtinGlobals: false }],
  'no-regex-spaces':              'error',
  'no-return-assign':             ['error', 'except-parens'],
  'no-self-assign':               ['error', { props: true }],
  'no-self-compare':              'error',
  'no-sequences':                 'error',
  'no-shadow-restricted-names':   'error',
  'no-sparse-arrays':             'error',
  'no-tabs':                      'error',
  'no-template-curly-in-string':  'error',
  'no-this-before-super':         'error',
  'no-throw-literal':             'error',
  'no-trailing-spaces':           'error',
  'no-undef':                     'error',
  'no-undef-init':                'error',
  'no-unexpected-multiline':      'error',
  'no-unmodified-loop-condition': 'error',
  'no-unneeded-ternary':          ['error', { defaultAssignment: false }],
  'no-unreachable':               'error',
  'no-unreachable-loop':          'error',
  'no-unsafe-finally':            'error',
  'no-unsafe-negation':           'error',
  'no-unused-expressions':        ['error', {
    allowShortCircuit:    true,
    allowTernary:         true,
    allowTaggedTemplates: true,
  }],
  'no-unused-vars': ['error', {
    args:               'none',
    caughtErrors:       'none',
    ignoreRestSiblings: true,
    vars:               'all',
  }],
  'no-use-before-define':          ['error', { functions: false, classes: false, variables: false }],
  'no-useless-call':               'error',
  'no-useless-computed-key':       'error',
  'no-useless-constructor':        'error',
  'no-useless-escape':             'error',
  'no-useless-rename':             'error',
  'no-useless-return':             'error',
  'no-void':                       'error',
  'no-whitespace-before-property': 'error',
  'no-with':                       'error',
  'object-curly-newline':          ['error', { multiline: true, consistent: true }],
  'object-curly-spacing':          ['error', 'always'],
  'object-property-newline':       ['error', { allowMultiplePropertiesPerLine: true }],
  'one-var':                       ['error', { initialized: 'never' }],
  'operator-linebreak':            ['error', 'after', { overrides: { '?': 'before', ':': 'before', '|>': 'before' } }],
  'padded-blocks':                 ['error', { blocks: 'never', switches: 'never', classes: 'never' }],
  'prefer-const':                  ['error', { destructuring: 'all' }],
  'prefer-promise-reject-errors':  'error',
  'prefer-regex-literals':         ['error', { disallowRedundantWrapping: true }],
  'quote-props':                   ['error', 'as-needed'],
  quotes:                          ['error', 'single', { avoidEscape: true, allowTemplateLiterals: false }],
  'rest-spread-spacing':           ['error', 'never'],
  semi:                            ['error', 'never'],
  'semi-spacing':                  ['error', { before: false, after: true }],
  'space-before-blocks':           ['error', 'always'],
  'space-before-function-paren':   ['error', 'always'],
  'space-in-parens':               ['error', 'never'],
  'space-infix-ops':               'error',
  'space-unary-ops':               ['error', { words: true, nonwords: false }],
  'spaced-comment':                ['error', 'always', {
    line:  { markers: ['*package', '!', '/', ',', '='] },
    block: { balanced: true, markers: ['*package', '!', ',', ':', '::', 'flow-include'], exceptions: ['*'] },
  }],
  'symbol-description':     'error',
  'template-curly-spacing': ['error', 'never'],
  'template-tag-spacing':   ['error', 'never'],
  'unicode-bom':            ['error', 'never'],
  'use-isnan':              ['error', {
    enforceForSwitchCase: true,
    enforceForIndexOf:    true,
  }],
  'valid-typeof':       ['error', { requireStringLiterals: true }],
  'wrap-iife':          ['error', 'any', { functionPrototypeMethods: true }],
  'yield-star-spacing': ['error', 'both'],
  yoda:                 ['error', 'never'],
  ...javaScriptStandardImport,
  ...javaScriptStandardN,
  ...rulesJavaScriptStandardPromise,
}
const lintErAll$2 = {
  ...standard$1,
  'no-unused-vars':          'off',
  'no-dupe-class-members':   'off',
  'no-var':                  'error',
  'prefer-const':            'error',
  'no-extra-boolean-cast':   'off',
  'no-throw-literal':        'off',
  'object-curly-spacing':    ['error', 'always'],
  'no-useless-escape':       'off',
  'space-before-blocks':     'error',
  'import/no-unresolved':    'off',
  'n/no-missing-import':     'off',
  'n/no-extraneous-import':  'off',
  'n/no-unpublished-import': 'off',
  'import-x/no-unresolved':  'off',
  semi:                      ['error', 'never'],
  'generator-star-spacing':  ['error', {
    before:    false,
    after:     true,
    anonymous: 'neither',
    method:    { before: true, after: true },
  }],
  'comma-dangle': [
    'error',
    {
      arrays:    'always-multiline',
      objects:   'always-multiline',
      imports:   'always-multiline',
      exports:   'always-multiline',
      functions: 'always-multiline',
    },
  ],
  'key-spacing': [
    'error',
    {
      align: {
        beforeColon: false,
        afterColon:  true,
        on:          'value',
      },
    },
  ],
  // https://eslint.org/docs/latest/rules/no-unused-expressions#rule-details
  'no-unused-expressions': [
    'error',
    {
      allowShortCircuit: true,
      allowTernary:      true,
      enforceForJSX:     true,
      ignoreDirectives:  true,
    },
  ],
  '@typescript-eslint/no-unused-expressions': [
    'error',
    {
      allowShortCircuit: true,
      allowTernary:      true,
      enforceForJSX:     true,
      ignoreDirectives:  true,
    },
  ],
  'newline-before-return':                             'error',
  '@typescript-eslint/indent':                         'off',
  '@typescript-eslint/no-floating-promises':           'error',
  '@typescript-eslint/explicit-module-boundary-types': 'off',
  '@typescript-eslint/no-explicit-any':                'off',
  '@typescript-eslint/no-non-null-assertion':          'off',
  '@typescript-eslint/consistent-type-definitions':    'off',
  '@typescript-eslint/prefer-regexp-exec':             'off',
  '@typescript-eslint/no-require-imports':             'error',
  '@typescript-eslint/no-unused-vars':                 [
    'error',
    {
      argsIgnorePattern:         '^_',
      varsIgnorePattern:         '^_',
      caughtErrorsIgnorePattern: '^_',
    },
  ],
  'react-in-jsx-scope':                   'off',
  'react/jsx-uses-react':                 'error',
  'react/jsx-uses-vars':                  'error',
  'react-refresh/only-export-components': [
    'warn',
    { allowConstantExport: true },
  ],
  'unicorn/prefer-top-level-await': 'off',
  'unicorn/prefer-module':          'off',
  'unicorn/prevent-abbreviations':  [
    'error',
    {
      ignore: [
        /doc/i,
        /dev/i,
        /pro?d/i,
      ],
    },
  ],
  'unicorn/filename-case': [
    'error',
    {
      cases: {
        camelCase:  true,
        pascalCase: true,
      },
    },
  ],
  'n/no-unsupported-features/node-builtins': ['error', {
    version: '>=22.16.0',
    ignores: [],
  }],
}
const lintErAllTest$1 = {
  ...lintErAll$2,
  'import/first':                          'off',
  '@typescript-eslint/no-require-imports': 'off',
  '@typescript-eslint/no-empty-function':  'off',
}

const json$1 = {
  'eol-last':                ['error', 'never'],
  'no-multiple-empty-lines': [
    'error',
    { max: 1, maxEOF: 0 },
  ],
  'json/no-duplicate-keys':    'error',
  'json/no-empty-keys':        'error',
  'json/no-unnormalized-keys': 'error',
  'json/no-unsafe-values':     'error',
  'json/no-sort-keys':         'off',
  'json/top-level-interop':    'error',
  'jsonc/key-name-casing':     ['error',
    {
      camelCase:            true,
      PascalCase:           true,
      SCREAMING_SNAKE_CASE: false,
      'kebab-case':         true,
      snake_case:           false,
      ignores:              [
        '^@?.+$',
      ],
    },
  ],
  'jsonc/no-bigint-literals':                'error',
  'jsonc/no-binary-expression':              'error',
  'jsonc/no-binary-numeric-literals':        'error',
  'jsonc/no-comments':                       'error',
  'jsonc/no-escape-sequence-in-identifier':  'error',
  'jsonc/no-hexadecimal-numeric-literals':   'error',
  'jsonc/no-infinity':                       'error',
  'jsonc/no-nan':                            'error',
  'jsonc/no-number-props':                   'error',
  'jsonc/no-numeric-separators':             'error',
  'jsonc/no-octal-numeric-literals':         'error',
  'jsonc/no-parenthesized':                  'error',
  'jsonc/no-plus-sign':                      'error',
  'jsonc/no-regexp-literals':                'error',
  'jsonc/no-template-literals':              'error',
  'jsonc/no-undefined-value':                'error',
  'jsonc/no-unicode-codepoint-escapes':      'error',
  'jsonc/sort-array-values':                 'off',
  'jsonc/sort-keys':                         'off',
  'jsonc/valid-json-number':                 'error',
  'jsonc/vue-custom-block/no-parsing-error': 'error',
  'jsonc/array-bracket-newline':             'off',
  'jsonc/array-bracket-spacing':             'error',
  'jsonc/array-element-newline':             [
    'error',
    {
      ArrayExpression: 'consistent',
      ArrayPattern:    { minItems: 1 },
    },
  ],
  'jsonc/comma-dangle':            ['error', 'never'],
  'jsonc/comma-style':             'error',
  'jsonc/indent':                  ['error', 2],
  'jsonc/key-spacing':             'error',
  'jsonc/no-dupe-keys':            'off',
  'jsonc/no-floating-decimal':     'error',
  'jsonc/no-irregular-whitespace': 'error',
  'jsonc/no-multi-str':            'error',
  'jsonc/no-octal-escape':         'error',
  'jsonc/no-octal':                'error',
  'jsonc/no-sparse-arrays':        'error',
  'jsonc/no-useless-escape':       'error',
  'jsonc/object-curly-newline':    'error',
  'jsonc/object-curly-spacing':    'error',
  'jsonc/object-property-newline': 'error',
  'jsonc/quote-props':             'error',
  'jsonc/quotes':                  'error',
  'jsonc/space-unary-ops':         'error',
}
const jsonC5 = {
  ...json$1,
  'jsonc/no-comments':  'off',
  'jsonc/comma-dangle': ['error', 'always'],
  'comma-dangle':       'off',
}

const yaml$1 = {
  indent:           ['error', 2],
  'eol-last':       ['error', 'never'],
  'spaced-comment': 'off',
}

const markdown$1 = {}

/**
 * This file is used to export all the rules in a single object, so that they can be easily imported in the configs.
 */
const _rules = {
  /**
     * TypeScript and JavaScript rules
     */
  ts: {
    /**
         * Standard JavaScript rules - https://standardjs.com
         */
    standard:      standard$1,
    /**
         * LintErAll opinionated rules
         */
    lintErAll:     lintErAll$2,
    /**
         * LintErAll opinionated rules for test files, which are more lenient to allow for common testing patterns that may not be ideal in production code, but are often necessary in tests (e.g., using require for dynamic imports, allowing empty functions for mocks, etc.). These rules are applied to test files (e.g., *.test.ts, *.spec.ts) to provide a more flexible linting experience while still maintaining code quality.
         */
    lintErAllTest: lintErAllTest$1,
  },
  /** JSON, JSONC and JSON5 rules */
  json: {
    /**
         * LintErAll opinionated JSON rules
         */
    json: json$1,
    /**
         * LintErAll opinionated JSONC amd JSON5 rules
         */
    jsonC5,
  },
  /**
     * LintErAll opinionated YAML rules
     */
  yaml:     yaml$1,
  /**
     * LintErAll opinionated Markdown rules
     */
  markdown: markdown$1,
}

/**
 * This file contains file patterns for different types of files (e.g., TypeScript, JavaScript, tests) that can be used in ESLint configurations or scripts.
 * It serves as a centralized place to manage these patterns, making it easier to maintain and update them across the project.
 */
const _files = {
  /** TypeScript and Javascript files */
  ts: [
    '**/*.{ts,mts,cts}',
    '**/*.{tsx,mtsx,ctsx}',
    '**/*.{js,mjs,cjs}',
    '**/*.{jsx,mjsx,cjsx}',
  ],
  /** TypeScript and JavaScript test files */
  tsTest: [
    '**/*.{test,spec}.{ts,mts,cts}',
    '**/*.{test,spec}.{tsx,mtsx,ctsx}',
    '**/*.{test,spec}.{js,mjs,cjs}',
    '**/*.{test,spec}.{jsx,mjsx,cjsx}',
  ],
  /** JSON, JSONC and JSON5 files */
  json: {
    /** JSON files */
    json: [
      '**/*.json',
    ],
    /** JSONC files */
    jsonc: [
      '**/*.jsonc',
    ],
    /** JSON5 and VSCode config files */
    json5: [
      '**/*.json5',
      '*.code-workspace',
      './.vscode/*.json',
    ],
  },
  /** YAML files */
  yaml: [
    '**/*.yaml',
    '**/*.yml',
  ],
  /** MARKDOWN files */
  markdown: [
    '**/*.md',
  ],
}

const jsonExtends = [
  pluginJson.configs.recommended,
  pluginJsonc.configs['flat/recommended-with-json'],
]
const json = {
  name:     'JSON Config',
  files:    _files.json.json,
  extends:  jsonExtends,
  language: 'json/json',
  rules:    _rules.json.json,
}
const jsonc = {
  name:     'JSONC Config',
  files:    _files.json.jsonc,
  extends:  jsonExtends,
  language: 'json/jsonc',
  rules:    _rules.json.jsonC5,
}
const json5 = {
  name:     'JSON5 Config',
  files:    _files.json.json5,
  extends:  jsonExtends,
  language: 'json/json5',
  rules:    _rules.json.jsonC5,
}

const markdown = {
  name:    'Markdown Config',
  files:   _files.markdown,
  extends: [
    pluginMarkdown.configs.recommended,
  ],
  language: 'markdown/commonmark',
  rules:    _rules.markdown,
}

const globalsJsTs = {
  ...globalsConfig.node,
  ...globalsConfig.jest,
  ...globalsConfig.vitest,
  ...globalsConfig.browser,
}
const standardExtends = [
  pluginImportX.configs['flat/recommended'],
  pluginNode.configs['flat/recommended'],
  {
    name:    'promise/flat/recommended',
    plugins: { promise: pluginPromise },
    rules:   _rules.ts.standard,
  },
]
const standard = {
  name:            'Standard Config',
  files:           _files.ts,
  languageOptions: {
    globals: globalsJsTs,
  },
  extends: standardExtends,
  rules:   _rules.ts.standard,
}
const lintErAll$1 = {
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
const lintErAllTest = {
  ...lintErAll$1,
  name:  'LintErAll Tests Config',
  files: _files.tsTest,
  rules: _rules.ts.lintErAllTest,
}

const yaml = {
  name:    'YAML Config',
  files:   _files.yaml,
  extends: [
    configs['flat/recommended'],
  ],
  language: 'yml/yaml',
  rules:    _rules.yaml,
}

/**
 * All configs. This is the main export of the configs module, and includes all the individual configs for different file types and purposes. Each config is designed to be used with ESLint's flat config system, and can be extended or customized as needed. The configs are organized by file type (e.g., ts for TypeScript, json for JSON files) and by purpose (e.g., standard for standard style guide, lintErAll for more opinionated rules). The global ignores config is applied to all configs to ensure that certain files are always ignored regardless of the specific config being used.
 */
const _config = {
  recommended: [
    ignores,
    json,
    json5,
    jsonc,
    lintErAll$1,
    lintErAllTest,
    yaml,
    markdown,
  ],
  /**
     * Global ignores, applied to all configs. This is useful for ignoring files that are not relevant to linting, such as build artifacts, dependencies, and other generated files.
     */
  ignores,
  /**
     * JavaScript and TypeScript configs. These configs are applied to JavaScript and TypeScript files, and include rules for both languages.
     */
  ts: {
    /**
         * Standard config - https://standardjs.com
         * The standard config is based on the popular StandardJS style guide, which is a widely used set of rules for JavaScript and TypeScript development.
         */
    standard,
    /**
         * LintErAll opinionated config. This config is more opinionated than the standard config, and includes additional rules that are not part of the standard style guide. These rules are designed to enforce best practices and improve code quality, but may be more strict than some developers prefer. It's recommended to use this config for new projects or when you want to enforce a higher level of code quality, but it may require some adjustments to existing codebases to comply with the stricter rules.
         */
    lintErAll: lintErAll$1,
    /**
         * LintErAll opinionated config for test files. This config is more lenient than the main LintErAll config, and includes rules that are specifically designed for test files. These rules allow for common testing patterns that may not be ideal in production code, but are often necessary in tests (e.g., using require for dynamic imports, allowing empty functions for mocks, etc.). This config is applied to test files (e.g., *.test.ts, *.spec.ts) to provide a more flexible linting experience while still maintaining code quality in test code.
         */
    lintErAllTest,
  },
  /**
     * JSON configs. These configs are applied to JSON files, and include rules for JSON syntax and best practices. The JSON config is for standard JSON files, the JSONC config is for JSON files with comments (JSONC), and the JSON5 config is for JSON files with more relaxed syntax (JSON5). Each config includes rules that are specific to the syntax and features of the respective JSON format, while also sharing common rules for general JSON best practices.
     */
  json: {
    /**
         * All JSON configurations for JSON, JSONC and JSON5
         */
    lintErAll: [
      json,
      jsonc,
      json5,
    ],
    /**
         * Standard JSON config
         */
    json,
    /**
         * JSONC config.
         */
    jsonc,
    /**
         * JSON5 and VSCode config files
         */
    json5,
  },
  /**
     * YAML config. This config is applied to YAML files, and includes rules for YAML syntax and best practices. The YAML config is designed to enforce consistent formatting and structure in YAML files, while also providing rules for common YAML pitfalls and best practices.
     */
  yaml,
  /**
     * Markdown config. This config is applied to Markdown files, and includes rules for md syntax and best practices.
     */
  markdown,
}

/**
 * LintErAll is a comprehensive collection of ESLint configurations, file patterns, and rules designed to provide a standardized linting setup for various types of projects. It includes configurations for JavaScript, TypeScript, React, JSON, and YAML, along with specific rules to enforce code quality and consistency across different file types.
 */
const lintErAllObject = {
  /**
    * All LintErAll configs for each file type and purpose. This includes configs for TypeScript, JSON, YAML and global ignores. Each config is designed to be used with __ESLint's flat config__ system, and can be extended or customized as needed.
     */
  config: _config,
  /**
     * File patterns for different types of files (e.g., TypeScript, JavaScript, tests) that can be used in ESLint configurations or scripts.
    */
  files:  _files,
  /**
     * All LintErAll rules separated by type
     */
  rules:  _rules,
}
function callLintErAll (_configs) {
  // return configs and set rules
  //
}
// Factory that creates the callable object
function createLintErAll () {
  // Make the function callable
  const function_ = callLintErAll.bind('')
  // Attach properties (like Axios does)
  function_.config = _config
  function_.files = _files
  function_.rules = _rules

  return function_
}
/**
 * All LintErAll configs for each file type and purpose. This includes configs for TypeScript, JSON, YAML and global ignores. Each config is designed to be used with __ESLint's flat config__ system, and can be extended or customized as needed.
 */
/**

 */
/**

/**
 * The main LintErAll export. It can be invoked as a function to merge ESLint
 * configs, and also accessed as an object containing predefined configs,
 * file patterns, and rule sets.
 * A callable function that merges user ESLint configs with LintErAll rules,
 * while also exposing configuration objects (`configs`, `files`, `rules`)
 * as properties — similar to how Axios exposes both axios() and axios.get().
 *
 * @callback LintErAllFunction
 * @param {object} configs - User-provided ESLint configuration to merge.
 * @returns {object} The merged ESLint configuration including LintErAll rules.
 *
 * @type {LintErAll}
*  @typedef {LintErAllFunction & {
 *   configs: object,
 *   files: object,
 *   rules: object
 * }} LintErAll
 */
const lintErAll = createLintErAll()

export { callLintErAll, lintErAll, lintErAllObject }
