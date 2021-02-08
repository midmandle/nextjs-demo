module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.test.json',
    }
  },
  setupFilesAfterEnv: ["<rootDir>/jest-setup.ts"]
};
