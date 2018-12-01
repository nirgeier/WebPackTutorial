// Karma configuration
// Generated on Sat Dec 01 2018 14:24:39 GMT+0200 (GMT+02:00)
var webpackConfig = require("./webpack.config.js");

const src = "./src/**/*.js";
const tests = "./test/index.js";

// Set the env variable for test coverage
process.env.BABEL_ENV = "karma";

module.exports = function (config) {

  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: __dirname,

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ["mocha"],

    // list of files / patterns to load in the browser
    files: [
      src,
      tests
    ],

    // list of files / patterns to exclude
    exclude: [],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      [src]: ["webpack", "sourcemap"],
      [tests]: ["webpack", "sourcemap"]
    },

    // test results reporter to use
    // possible values: "dots", "progress"
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ["mocha", "coverage"],

    // Print out the coverage report
    coverageReporter: {
      dir: "coverage",
      reporters: [{
          type: "lcov" // Generate the report html
        },
        {
          type: "text-summary" // Print out results to the terminal
        }
      ]
    },
    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ["Chrome"],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,

    client: {
      // log console output 
      captureConsole: true
    },

    plugins: [
      "karma-chrome-launcher",
      "karma-coverage",
      "karma-mocha-reporter",
      "karma-mocha",
      "karma-sourcemap-loader",
      "karma-webpack"
    ],

    // load the webpack configuration
    webpack: webpackConfig
  })
}