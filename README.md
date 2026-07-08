# Regression Testing with Cypress

This repository contains Cypress end-to-end tests for the OrangeHRM demo application. It is intended to validate core HR workflows and to catch regressions early by automating frequent user actions.

## Project overview

The test suite covers the following types of functionality:

- Logging in to the OrangeHRM demo application
- Viewing and editing the user profile
- Adding and deleting employees
- Managing job titles
- Verifying navigation and logout behavior

These tests help ensure that changes to the application or test environment do not break existing workflows.

## Prerequisites

Before running the tests, install the required tools:

- Node.js
- npm

You can verify installation with:

```bash
node --version
npm --version
```

## Installation

Install the project dependencies from the repository root:

```bash
npm install
```

## Running tests

Open the Cypress Test Runner for interactive test execution:

```bash
npx cypress open
```

Run the full test suite in headless mode:

```bash
npx cypress run
```

Run a specific test file with the `--spec` option:

```bash
npx cypress run --spec "cypress/e2e/AddDeleteEmployee.cy.js"
```

Run multiple test files together:

```bash
npx cypress run --spec "cypress/e2e/AddDeleteEmployee.cy.js,cypress/e2e/AddDeleteJobTitle.cy.js,cypress/e2e/EditProfile.cy.js"
```

## Repository structure

- `cypress/e2e/` - Cypress test specifications
- `cypress/fixtures/` - test data and sample JSON fixtures
- `cypress/support/` - custom commands and Cypress support setup
- `cypress.config.js` - Cypress configuration file
- `package.json` - project dependencies and scripts

## Test details

Each spec file targets a specific workflow or group of related actions. For example:

- `AddDeleteEmployee.cy.js` tests employee creation and deletion flows
- `AddDeleteJobTitle.cy.js` tests job title management
- `EditProfile.cy.js` tests profile editing functionality
- `Logout.cy.js` tests the logout flow

## Notes and recommendations

- The tests use the publicly available OrangeHRM demo site, so an internet connection is required.
- Some selectors and wait strategies may be improved to make the suite more reliable and maintainable.
- Keep Cypress and browser dependencies up to date to avoid compatibility issues.
