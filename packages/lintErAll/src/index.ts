import { _configs } from './_configs'
import { _files } from './_files'
import { CallableObject, LintErAll } from './_types'
import { _rules } from './_rules'

/**
 * LintErAll is a comprehensive collection of ESLint configurations, file patterns, and rules designed to provide a standardized linting setup for various types of projects. It includes configurations for JavaScript, TypeScript, React, JSON, and YAML, along with specific rules to enforce code quality and consistency across different file types.
 */
export const lintErAllObject: LintErAll = {
  /**
  * All LintErAll configs for each file type and purpose. This includes configs for TypeScript, JSON, YAML and global ignores. Each config is designed to be used with __ESLint's flat config__ system, and can be extended or customized as needed.
   */
  configs: _configs,
  /**
   * File patterns for different types of files (e.g., TypeScript, JavaScript, tests) that can be used in ESLint configurations or scripts.
  */
  files:   _files,
  /**
   * All LintErAll rules separated by type
   */
  rules:   _rules,
}

export function callLintErAll (_configs: any) {
  // return configs and set rules

  //
}

// Factory that creates the callable object
function createLintErAll () {
  // Make the function callable
  const function_: CallableObject = callLintErAll.bind('') as any

  // Attach properties (like Axios does)
  function_.configs = _configs
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

export const lintErAll = createLintErAll()
