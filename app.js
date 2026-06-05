/**
 * app.js — Express application module for the Artifact-4 tutorial server.
 *
 * This module constructs and configures the Express `app` instance, registers
 * the HTTP route table, and exports the app WITHOUT calling `app.listen()`.
 *
 * Why export the app instead of starting a server here?
 *   Separating application definition (this file) from server startup
 *   (`server.js`) is the canonical Express testability pattern. It lets the
 *   test suite import the fully-wired `app` and drive it in-process with
 *   Supertest — no network port is bound, so the tests are hermetic,
 *   parallel-safe, and free of "port in use" / open-handle issues. The
 *   production entry point (`server.js`) requires this module and is solely
 *   responsible for binding a port via `app.listen()`.
 *
 * Route table:
 *   GET /              -> 200, body "Hello world"
 *   GET /good-evening  -> 200, body "Good evening"
 *   (any other route)  -> 404, handled by Express's built-in not-found behavior
 */

'use strict';

const express = require('express');

// Create the Express application instance. The returned `app` is itself a
// request-handler function, which is exactly what Supertest accepts when the
// test suite calls `request(app)`.
const app = express();

/**
 * GET / — the original tutorial endpoint.
 *
 * Responds with HTTP 200 and the exact plain-text body "Hello world".
 * `res.send(<string>)` applies a 200 status by default and sets the
 * `Content-Type` to `text/html; charset=utf-8`.
 */
app.get('/', (req, res) => {
  res.send('Hello world');
});

/**
 * GET /good-evening — the endpoint added alongside the Express integration.
 *
 * Responds with HTTP 200 and the exact plain-text body "Good evening".
 */
app.get('/good-evening', (req, res) => {
  res.send('Good evening');
});

// Export the configured app so both the production bootstrap (`server.js`) and
// the test suite (`tests/app.test.js`) consume a single source of truth for the
// route table. Intentionally NO `app.listen()` here — see the module header.
module.exports = app;
