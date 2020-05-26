const path = require('path')

module.exports = {
  testEnvironment: 'jest-environment-jsdom', // node | jsdom
  moduleDirectories: [
    'node_modules',
    path.join(__dirname, 'src'),
    'shared',
    path.join(__dirname, 'test'),
  ],
  moduleNameMapper: {
    '\\module\\.css': 'identity-obj-proxy',
    '\\.css$': require.resolve('./test/style-mock.js'),
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  snapshotSerializers: ['jest-emotion'],
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
}
