exports.config = {
  
  allScriptsTimeout: 99999,

  // The address of a running selenium server.
  //seleniumAddress: 'http://localhost:4444/wd/hub',

  // The location of the selenium standalone server .jar file, relative
  // to the location of this config. If no other method of starting selenium
  // is found, this will default to
  // node_modules/protractor/selenium/selenium-server...
  seleniumServerJar: './node_modules/protractor/selenium/selenium-server-standalone-2.41.0.jar',
  
  // The port to start the selenium server on, or null if the server should
  // find its own unused port.
  seleniumPort: 4444,

  // If sauceUser and sauceKey are specified, seleniumServerJar will be ignored.
  // The tests will be run remotely using SauceLabs.
  //sauceUser: 'arvindr21',
  //sauceKey: '9ab3f0ac-219d-462e-ba7a-14d598856cea',
  
  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'safari'
  },

  baseUrl: 'http://localhost:9000/',

  framework: 'jasmine',

  // Spec patterns are relative to the current working directly when
  // protractor is called.
  specs: ['test/e2e/*.js'],

  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    isVerbose : true,
    includeStackTrace : true
  }
};
