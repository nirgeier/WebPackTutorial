/**
 * The project webpack configuration file
 */
const path = require("path");

const config = {
  //mode: "production",
  mode: "development",
  entry: "./src/Calculator.js",
  output: {
    // the default output folder is `dist`
    // We can supply and absolute path instead
    filename: "[name].min.js"
  },
  optimization: {
    usedExports: true
  }
};

module.exports = config;