/**
 * The project webpack configuration file
 */
const path = require("path");

const config = {
  mode: "production",
  entry: "./src/Calculator.js",
  output: {
    // the default output folder is `dist`
    // We can supply and absolute path instead
    filename: "[name].min.js"
  },
  module: {
    // This part is for our test coverage
    rules: [{
      // test: /\.js$/,
      include: path.join(__dirname, 'src'),
      exclude: path.join(__dirname, 'node_modules'),
      loader: 'babel-loader'
    }]
  }
};

module.exports = config;