module.exports = {
  ...require('./jest.common'),
  displayName: 'dom',
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  snapshotSerializers: ['jest-emotion'],
  coverageThreshold: {
    global: {
      branches: 12,
      functions: 15,
      lines: 20,
      statements: 50,
    },
    './src/shared/utils.js': {
      branches: 80,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
}
