# run-pilot

A tiny public fixture for the Gateweave runner pilot (WEB-84). Pilot issues ask for small
changes here, and a runner works them in Docker Cloud or on a local machine, then opens a
pull request.

- `npm test` runs the tests.
- `npm run check:slow` is a check that waits on purpose (90 seconds, or `SLOW_CHECK_SECONDS`),
  so a run can be interrupted between its checks.

There is nothing to install: the project has no dependencies.
