const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    //baseUrl: "automationpractice.com",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
