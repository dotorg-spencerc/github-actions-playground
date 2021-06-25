/**
 * This file holds all of the critical, must-have tests that have to be passing
 * when merging into dev.
 */
const cypress = require('cypress');
const path = require('path');

cypress.run({
  spec: [
    path.join(__dirname, './cypress/integration/App.spec.js'),
  ]
})
.then((results) => {
  if (results.failures) {
    console.error('Could not execute tests')
    console.error(results.message)
    process.exit(results.failures)
  }

  // print test results and exit
  // with the number of failed tests as exit code
  process.exit(results.totalFailed)
})
.catch((err) => {
  console.error('here', err.message)
  process.exit(1)
});

