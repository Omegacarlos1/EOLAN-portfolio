module.exports = {
  clearMocks: true,
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.d.ts',
    '!src/main.tsx',
  ],
  coverageDirectory: 'coverage',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  moduleNameMapper: {
    '\\.(css)$': '<rootDir>/src/test/styleMock.ts',
  },
  roots: ['<rootDir>/src'],
  setupFilesAfterEnv: ['<rootDir>/src/test/setup.ts'],
  testEnvironment: 'jsdom',
  testMatch: ['**/*.test.{ts,tsx}'],
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest',
  },
};
