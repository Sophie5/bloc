// Karma configuration
// Generated on Tue Apr 25 2017 11:25:10 GMT+0100 (BST)
var webpackConfig = require('./webpack.config.js');
module.exports = function(config) {
  config.set({
    preprocessors: {
      'test/**/*-test.js': ['inject-html']
    },
    injectHtml: {
        file: '<div id="test-content"><div>'
    },

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'chai-sinon'],


    // list of files / patterns to load in the browser
    files: [
      './public/build/bundle.js',
      'test/**/*-test.js'
    ],


    // list of files to exclude
    exclude: [
      'package.js',
      'src/**/package.js',
      'src/controllers/package.js',
      'test/testConfig.js'
    ],

    webpack: webpackConfig,

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
              'src/**/*.js': ['webpack'],
            'test/**/*-test.js': ['webpack']

    },



    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS', 'Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
