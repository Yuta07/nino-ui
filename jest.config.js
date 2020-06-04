module.exports = {
  roots: ['<rootDir>/src'],
  verbose: true,
  preset: 'ts-jest',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'css'],
  // snapshotSerializers: ['enzyme-to-json/serializer'],
  testPathIgnorePatterns: ['/node_modules/', '/lib/'],
  testMatch: ['**/?(*.)+(spec|test).+(ts|tsx|js)'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  setupFilesAfterEnv: ['<rootDir>/src/setupEnzyme.ts'],
};
