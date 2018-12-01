# WebPackTutorial

This tutorial will guide you through the process of learning WebPack

## Step01 - Create project skeleton

### Prerequirments

- [NodeJs](https://nodejs.org/en/download/)

Once [NodeJs](https://nodejs.org/en/download/) is installed we need to create a node project

```js
mkdir web-pack 
cd web-pack
git init
npm init -y
```
### install the webpack
```
npm i webpack
```
- WebPack configuration is stored inside [`webpack.config.js`](./)
- Create the above file with the following code
```js
// Define our tasks
const config = {

};

// export the config object
module.exports = config;
```

## Step02 - Configuring **webpack.config**
- In this tutorial we will be creating a basic calculator as our project code.
- Each math operation will be defined inside its own file

### Create the src code
- Create the following files
 - [`src/CalculatorAdd.js`](src/CalculatorAdd.js)
    ```js
    module.exports = function () {
      return Array.prototype.slice.call(arguments)
        .reduce((sum, number) => sum + number, 0);
      };
    ```

  - [`src/CalculatorDivide.js`](src/CalculatorDivide.js)
    ```js
    module.exports = function () {
      return Array.prototype.slice.call(arguments)
        .reduce((sum, number) => sum / number, 1);
      };
    ```

  - [`src/CalculatorMultiply.js`](src/CalculatorMultiply.js)
    ```js
    module.exports = function () {
      return Array.prototype.slice.call(arguments)
        .reduce((sum, number) => sum * number, 1);
      };
    ```

 - [`src/CalculatorSubstract.js`](src/CalculatorSubstract.js)
    ```js
    module.exports = function () {
      return Array.prototype.slice.call(arguments)
        .reduce((sum, number) => sum - number, 0);
      };
    ```

- [`src/Calculator.js`](src/Calculator.js)
   ```js
    /**
     * This is our sample application code.
     */
    let Calculator = {};

    // Add the required "modules"
    Calculator.add = require('./CalculatorAdd');
    Calculator.min = require('./CalculatorSubstract');
    Calculator.div = require('./CalculatorDivide');
    Calculator.mul = require('./CalculatorMultiply');

    // Export the Calculator
    module.exports = Calculator;
    ```

### Adding entry point to the configuration
- Now we need to add the entry point to the webpack configuration file.
   - Webpack will start from **entry point**in order to build a bundle in: [`webpack.config.js`](./)
   - We will also add the output file. 
```js
/**
 * The project webpack configuration file
 */
const config = {
  // The output format production/development/none
  mode: 'production',
  entry: './src/Calculator.js',
  output: {
    filename: 'bundle.js'
  }
};

module.exports = config;
```
- Add the build task inside the [`package.json`](./package.json)
```js
"scripts": {
    ...
    "build": "webpack"
  },
```
- run the new task with and install the missing npm(s)
```
$ npm run build

> webpack  

One CLI for webpack must be installed. These are recommended choices, delivered as separate packages:
 - webpack-cli (https://github.com/webpack/webpack-cli)
   The original webpack full-featured CLI.
We will use "npm" to install the CLI via "npm install -D".
Do you want to install 'webpack-cli' (yes/no): y
Installing 'webpack-cli' (running 'npm install -D webpack-cli')...
```
- Once the cli is installed lets test it again:
```
$ npm run build

> webpack

Hash: 57ada15f687dd54b6614
Version: webpack 4.26.1
Time: 107ms
Built at: 2018-12-01 13:27:33
    Asset      Size  Chunks             Chunk Names
bundle.js  1.38 KiB       0  [emitted]  main
Entrypoint main = bundle.js
[0] ./src/Calculator.js 360 bytes {0} [built]
[1] ./src/CalculatorAdd.js 166 bytes {0} [built]
[2] ./src/CalculatorSubstract.js 172 bytes {0} [built]
[3] ./src/CalculatorDivide.js 169 bytes {0} [built]
[4] ./src/CalculatorMultiply.js 171 bytes {0} [built]
```
