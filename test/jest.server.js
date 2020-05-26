const path = require('path')

module.exports = {
  ...require('./jest.common'),
  displayName: 'Server',
  coverageDirectory: path.join(__dirname, '../coverage/server'),
  testEnvironment: 'jest-environment-node',
  testMatch: ['**/__server__tests__/**/*.[jt]s?(x)'],
}
