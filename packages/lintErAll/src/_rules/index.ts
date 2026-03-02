import { LintErAllRules } from '../_types'
import { json, jsonC5 } from './json'
import { markdown } from './markdown'
import { lintErAll, lintErAllTest, standard } from './ts'
import { yaml } from './yaml'

/**
 * This file is used to export all the rules in a single object, so that they can be easily imported in the configs.
 */
export const _rules: LintErAllRules = {
  /**
   * TypeScript and JavaScript rules
   */
  ts: {
    /**
     * Standard JavaScript rules - https://standardjs.com
     */
    standard,
    /**
     * LintErAll opinionated rules
     */
    lintErAll,
    /**
     * LintErAll opinionated rules for test files, which are more lenient to allow for common testing patterns that may not be ideal in production code, but are often necessary in tests (e.g., using require for dynamic imports, allowing empty functions for mocks, etc.). These rules are applied to test files (e.g., *.test.ts, *.spec.ts) to provide a more flexible linting experience while still maintaining code quality.
     */
    lintErAllTest,
  },
  /** JSON, JSONC and JSON5 rules */
  json: {
    /**
     * LintErAll opinionated JSON rules
     */
    json,
    /**
     * LintErAll opinionated JSONC amd JSON5 rules
     */
    jsonC5,
  },
  /**
   * LintErAll opinionated YAML rules
   */
  yaml,
  /**
   * LintErAll opinionated Markdown rules
   */
  markdown,
}
