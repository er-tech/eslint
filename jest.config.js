module.exports = {
  roots: [
    '<rootDir>/src',
  ],
  testMatch: [
    '**/__tests__/**/*.+(ts|tsx|js)',
    '**/?(*.)+(spec|test).+(ts|tsx|js)',
  ],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
  ],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  moduleNameMapper: {
    '^@T':         '<rootDir>/src/_types',
    '^@C/(.*)$':   '<rootDir>/src/_controllers/$1',
    '^@M/(.*)$':   '<rootDir>/src/_models/$1',
    '^@H/(.*)$':   '<rootDir>/src/_helpers/$1',
    '^@J/(.*)$':   '<rootDir>rc/_jest/$1',
    '^@App/(.*)$': '<rootDir>/src/$1',
  },
  setupFiles: [
    '<rootDir>/src/_jest/init.ts',
  ],
  setupFilesAfterEnv: [
    '<rootDir>/src/_jest/afterEnv.ts',
  ],
  coverageDirectory:   'coverage',
  collectCoverage:     true,
  collectCoverageFrom: [
    '**/*.{ts,js}',
    'src/helpers/.ts',
  ],
  clearMocks:        true,
  coverageReporters: [
    'text',
    'cobertura',
    'html',
    'lcov',
  ],
  reporters: [
    'default',
    [
      'jest-junit',
      {
        outputDirectory:     'coverage',
        outputName:          'test-results.xml',
        usePathForSuiteName: 'true',
      },
    ],
  ],
}
