module.exports = {
  ...require('./test/jest.common'),
  collectCoverageFrom: ['**/src/**/*.js'],
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
  projects: [
    './test/jest.lint.js',
    './test/jest.client.js',
    './test/jest.server.js',
  ],
}
