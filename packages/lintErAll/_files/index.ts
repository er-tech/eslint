/**
 * This file contains file patterns for different types of files (e.g., TypeScript, JavaScript, tests) that can be used in ESLint configurations or scripts.
 * It serves as a centralized place to manage these patterns, making it easier to maintain and update them across the project.
 */
export const _files = {
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
