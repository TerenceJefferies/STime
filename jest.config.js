module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
        '^.+\\.(js)$': './node_modules/babel-jest',
    },
};