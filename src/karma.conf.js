// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html
var path=require('path');
module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-htmlfile-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser,
    },
    coverageIstanbulReporter: {
      // dir:path.join(__dirname, 'target/coverage'),
      dir:'../target/coverage',
      reports: ['html', 'lcovonly'],
      fixWebpackSourcePaths: true
    },
    reporters: ['progress', 'html'],
    htmlReporter: {
      outputFile:  '../target/test-report/index.html',
      pageTitle: 'Unit Tests Report',
      subPageTitle: 'This is the Unit test report',
      groupSuites: true,
      useCompactStyle: true,
      useLegacyStyle: true
    },
    // customLaunchers: {
    //   ChromeHeadless: {
    //     base: 'Chrome',
    //     flags: [
    //       '--headless',
    //       '--disable-gpu',
    //       // Without a remote debugging port, Google Chrome exits immediately.
    //       '--remote-debugging-port=9222',
    //     ],
    //   }
    // },
    port: 9999,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['ChromeHeadless'],
    singleRun: false
  });
};
// browsers: ['ChromeHeadless'],
// customLaunchers: {
//   ChromeHeadless: {
//     base: 'Chrome',
//     flags: [
//       '--headless',
//       '--disable-gpu',
//       // Without a remote debugging port, Google Chrome exits immediately.
//       '--remote-debugging-port=9222',
//     ],
//   }
// },

// browsers: ['ChromeNoSandbox'],
// customLaunchers: {
//   ChromeNoSandbox: {
//     base: 'Chrome',
//     flags: ['--no-sandbox']
//   }
// },