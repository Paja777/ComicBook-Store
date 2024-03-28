import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest'
  }
};

export default config;