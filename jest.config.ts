import { Config } from 'jest';
// import nextJest from 'next/jest';

const jestConfig: Config = {
  testEnvironment: 'jsdom',
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  preset: 'ts-jest',
  moduleDirectories: ['node_modules', 'src'],
};

module.exports = jestConfig;
