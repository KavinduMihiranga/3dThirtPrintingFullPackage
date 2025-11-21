const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
     baseUrl: 'http://localhost:5173',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'cypress/support/e2e.js',
    video: false,
    screenshotOnRunFailure: true,
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 10000,
    requestTimeout: 10000,
    responseTimeout: 10000,
    
    // Reporter configuration - UPDATED
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: true,
    json: true,
    timestamp: 'mmddyyyy_HHMMss',
    screenshots: true,           // ADD THIS
    embeddedScreenshots: true,   // ADD THIS
    inlineAssets: true,          // ADD THIS - embeds screenshots in HTML
    saveJson: true,
    saveHtml: true,
    reportFilename: '[status]_[datetime]-[name]-report',
    charts: true
  },
  
  // Screenshots and videos
  screenshotOnRunFailure: true,
  video: true,
  videosFolder: 'cypress/videos',
  screenshotsFolder: 'cypress/screenshots',
  
  // ADD: Retries for flaky tests (optional)
  retries: {
    runMode: 1,
    openMode: 0
  },
    env: {
      apiUrl: 'http://localhost:5000/api',
      adminToken: 'mock-admin-token-for-testing'
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
       return config;
    },
    // Retry failed tests
    retries: {
      runMode: 2,
      openMode: 0
    }
  },
  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
  },
});
