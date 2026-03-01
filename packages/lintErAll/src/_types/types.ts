import { type ConfigWithExtendsArray, type ConfigWithExtends } from '@eslint/config-helpers'
import { ConfigObject, RulesConfig } from '@eslint/core'

export type SimpleExtendsElement = string | ConfigObject
export type InfiniteArray<T> = T | InfiniteArray<T>[]

export type ExtendsElement = SimpleExtendsElement | InfiniteArray<ConfigObject>

export type LintErAllConfigs = {
  recommended: ConfigWithExtendsArray,
  ignores: ConfigWithExtends,
  ts: {
    standard: ConfigWithExtends,
    lintErAll: ConfigWithExtends,
    lintErAllTest: ConfigWithExtends,
  },
  json: {
    lintErAll: ConfigWithExtendsArray,
    json: ConfigWithExtends,
    jsonc: ConfigWithExtends,
    json5: ConfigWithExtends,
  },
  yaml: ConfigWithExtends,
  markdown: ConfigWithExtends,
}

export type LintErAllRules = {
  ts: {
    standard: RulesConfig,
    lintErAll: RulesConfig,
    lintErAllTest: RulesConfig,
  },
  json: {
    json: RulesConfig,
    jsonC5: RulesConfig,
  },
  yaml: RulesConfig,
  markdown: RulesConfig,
}
export type LintErAllFiles = {
  ts: string[],
  tsTest: string[],
  json: {
    json: string[],
    jsonc: string[],
    json5: string[],
  },
  yaml: string[],
  markdown: string[],
}
export type LintErAll = {
  configs: LintErAllConfigs,
  files: LintErAllFiles,
  rules: LintErAllRules,
}

export type CallableObject = LintErAll & {
  (argument: any): any; // call signature
  configs: LintErAllConfigs,
  files: LintErAllFiles,
  rules: LintErAllRules,
}
