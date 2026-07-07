const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,
video:true,
reporter: 'cypress-mochawesome-reporter', 
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    testIsolation:false
  },
});
