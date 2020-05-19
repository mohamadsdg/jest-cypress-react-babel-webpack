module.exports = {
  testEnvironment: 'jest-environment-jsdom', // node | jsdom
  moduleNameMapper: {
    '\\.css$': require.resolve('./test/style-mock.js'),
  },
}
