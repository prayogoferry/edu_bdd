const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
await preprocessor.addCucumberPreprocessorPlugin(on, config);
on("file:preprocessor", browserify.default(config));
return config;
}
module.exports = defineConfig({
  video: false,
  defaultCommandTimeout:5000,
  pageLoadTimeout : 20000,
  e2e: {
    specPattern: "**/*.feature",
    supportFile: false,
    setupNodeEvents

  },
});
