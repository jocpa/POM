const { defineConfig } = require("cypress");

module.exports = defineConfig({
  screenshotOnRunFailure: true, //add
  reporter: 'cypress-mochawesome-reporter', //add
  reporterOptions: { //add
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    reportPageTitle: "Orange Test",
    embeddedScreenshots: true,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on); //ad
    },
  },
});
