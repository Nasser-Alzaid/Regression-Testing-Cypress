# Regression Testing with Cypress

This project contains Cypress end-to-end tests for the OrangeHRM demo application. It is designed to help with regression testing by automating common user flows such as login, employee management, and job title actions.

## What this project does

- Opens the OrangeHRM demo website
- Logs in with demo credentials
- Exercises employee creation and deletion steps
- Tests job title-related workflows
- Helps verify that the application still works after changes

## Prerequisites

Before running the tests, make sure you have:

- Node.js installed
- npm installed

## Installation

Run the following command in the project folder:

```bash
npm install
```

## Running the tests

To open the Cypress Test Runner:

```bash
npx cypress open
```

To run the tests in headless mode:

```bash
npx cypress run
```

## Project structure

- cypress/e2e/ - test specification files
- cypress/fixtures/ - sample test data
- cypress/support/ - custom commands and support setup
- cypress.config.js - Cypress configuration

## Notes

- These tests use the OrangeHRM demo site, so an internet connection is required.
- Some test files may use fixed selectors and wait times, which can be improved later for better maintainability.
