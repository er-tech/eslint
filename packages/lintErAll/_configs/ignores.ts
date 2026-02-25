import { type ConfigWithExtends } from '@eslint/config-helpers'

export const ignores: ConfigWithExtends = {
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
