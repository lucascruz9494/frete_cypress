const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://web.superfrete.com/#/calcular-correios",
    chromeWebSecurity: false,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 10000,
    requestTimeout: 10000,
    responseTimeout: 10000,
    viewportWidth: 1366,
    viewportHeight: 768,

    specPattern: "cypress/e2e/*.cy.js",

    retries: 3,

    setupNodeEvents(on, config) {},
  },
});
