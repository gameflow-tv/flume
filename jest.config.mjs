const config = {
  preset: 'ts-jest',
  moduleDirectories: ['<rootDir>/node_modules', '<rootDir>/src', 'node_modules'],
  testMatch: ['**/?(*.)+(spec|test).(js|ts)?(x)'],
  extensionsToTreatAsEsm: ['.ts'],
  globals: {
    'ts-jest': {
      useESM: true,
    },
  },
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
}

export default config
