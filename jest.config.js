module.exports = {
  preset: 'vite-jest',
  testEnvironment: 'jsdom',
  // setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['@babel/preset-react'] }],
  },
};
