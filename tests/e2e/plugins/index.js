// tests/e2e/plugins/index.js

module.exports = (on, config) => {
  // Custom webpack configuration (uncomment and modify if needed)
  // on('file:preprocessor', require('@cypress/webpack-preprocessor')(/* webpackOptions */));

  // Update the Cypress configuration
  return {
    ...config,
    fixturesFolder: 'tests/e2e/fixtures',
    integrationFolder: 'tests/e2e/specs',
    screenshotsFolder: 'tests/e2e/screenshots',
    videosFolder: 'tests/e2e/videos',
    supportFile: 'tests/e2e/support/index.js',
  };
};
