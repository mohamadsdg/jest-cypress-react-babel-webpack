module.exports = {
  ...require('./jest.common'),
  displayName: 'Client',
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  snapshotSerializers: ['jest-emotion'],
}
