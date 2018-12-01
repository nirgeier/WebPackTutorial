/**
 * The project webpack configuration file
 */
const config = {
  mode: 'production',
  entry: './src/Calculator.js',
  output: {
    // the default output folder is `dist`
    // We can supply and absolute path instead
    filename: 'bundle.js'
  }
};

module.exports = config;