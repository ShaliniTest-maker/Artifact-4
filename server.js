/**
 * server.js — Production entry point for the Artifact-4 tutorial server.
 *
 * This is the ONLY place that binds a network port. It imports the fully
 * configured Express application from `app.js` (the single source of truth for
 * the route table) and starts an HTTP listener via `app.listen()`.
 *
 * Keeping `app.listen()` isolated here — separate from the application
 * definition — is what allows the test suite to import `app.js` and exercise
 * the routes in-process with Supertest without ever binding a port. As a
 * result, this file is intentionally NOT imported by any test.
 *
 * Referenced by `package.json` as both `main` and the `start` script
 * (`node server.js`).
 */

'use strict';

const app = require('./app');

// Resolve the listening port from the environment, falling back to 3000 for
// local development. `PORT` is the conventional variable honored by most
// Node.js hosting platforms.
const PORT = process.env.PORT || 3000;

// Start the HTTP server. Binding the port here (and only here) keeps the
// exported `app` side-effect free, which is what makes it safe to import from
// the test suite.
const server = app.listen(PORT, () => {
  console.log(`Artifact-4 server listening on http://localhost:${PORT}`);
});

// Export the live server handle so a process supervisor or future graceful-
// shutdown logic can reference it. This export is incidental to running the
// process and is not consumed by the test suite.
module.exports = server;
