# Artifact-4

## Testing

This project uses [Jest](https://jestjs.io/) as the test runner and assertion library, and [Supertest](https://github.com/ladjs/supertest) for HTTP-level assertions. Supertest drives the exported Express `app` in-process, so **no network port is bound** while testing — the suite is hermetic and parallel-safe.

### Prerequisites

- Node.js 22 LTS (or any actively supported LTS release).
- Install dependencies once with `npm install` (installs the `jest` and `supertest` dev-dependencies).

### Running the tests

```bash
# Run the full test suite
npm test

# Run the suite and produce a coverage report
npm run test:coverage

# Run a single test file
npx jest tests/app.test.js

# Run only tests whose name matches a string
npx jest -t "Good evening"
```

### What the suite covers

`tests/app.test.js` verifies the HTTP contract of the server:

| Request | Expected status | Expected body |
| --- | --- | --- |
| `GET /` | `200` | `Hello world` |
| `GET /good-evening` | `200` | `Good evening` |
| `GET` on an unknown route | `404` | _(Express default not-found)_ |

Coverage is collected from the application route module (`app.js`) and held to a 100% threshold for statements, branches, functions, and lines. The server bootstrap (`server.js`) binds a port and contains no business logic, so it is excluded from coverage.
