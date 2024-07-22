import type {Config} from 'jest'
import nextJest from 'next/jest'

const createJestConfig = nextJest({dir: './'})
const coverage = 90

const config: Config = {
  roots: ['<rootDir>/src'],
  preset: 'ts-jest',
  verbose: true,
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testEnvironment: 'jest-environment-jsdom',
  collectCoverageFrom: ['src/**/*.{js,ts,jsx,tsx}'],
  coverageThreshold: {
    global: {
      lines: coverage,
      statements: coverage,
      branches: coverage,
      functions: coverage
    }
  }
}

export default createJestConfig(config)
