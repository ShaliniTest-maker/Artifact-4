/**
 * Jest configuration for the Artifact-4 Express tutorial server.
 *
 * - testEnvironment 'node': these are server-side HTTP tests; no DOM/jsdom is needed.
 * - collectCoverageFrom ['app.js']: coverage is measured only on the application
 *   route module. The server bootstrap (server.js) binds a port and holds no
 *   business logic, so it is excluded; node_modules is excluded automatically.
 * - coverageThreshold: the application module is held to 100% across all four
 *   metrics so the small route surface stays fully covered as the app grows.
 */
module.exports = {
  testEnvironment: 'node',
  collectCoverageFrom: ['app.js'],
  coverageThreshold: {
    './app.js': {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100,
    },
  },
};
