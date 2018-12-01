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

## Step03 - Test the code
- In this step we will add some test code to our application. 
- We wish to use karma as our testing framework and instanbul for our test coverage.
- To make it more interesting **karma** and **instanbul** does not work well with es6 code so to overcome this issue we
are using **babel** which will convert the es6 code to es5 and it will be testable
- In order to be able to compile and test copy the following files 
  - [babel.config.js](./babel.config.js)
  - [karma.conf.js](./karma.conf.js)
  - [test/index.js](test/index.js)
  - [webpack.config.js](webpack.config.js)
  - [package.json](package.json)
- To make it more interesting as explained above we will convert our code to ES6 code

- [`src/CalculatorAdd.js`](src/CalculatorAdd.js)
    ```js
    export default function () {
      return Array.prototype.slice.call(arguments)
        .reduce((sum, number) => sum + number);
    }
    ```

- [`src/CalculatorDivide.js`](src/CalculatorDivide.js)
  ```js
  export default function () {
    return Array.prototype.slice.call(arguments)
      .reduce((sum, number) => sum / number);
  }
  ```

- [`src/CalculatorMultiply.js`](src/CalculatorMultiply.js)
  ```js
  export default function () {
    return Array.prototype.slice.call(arguments)
      .reduce((sum, number) => sum */* number);
  }
  ```

- [`src/CalculatorSubstract.js`](src/CalculatorSubstract.js)
  ```js
  export default function () {
    return Array.prototype.slice.call(arguments)
      .reduce((sum, number) => sum - number);
  }
  ```

- [`src/Calculator.js`](src/Calculator.js)
   ```js
    import add from './CalculatorAdd';
    import sub from './CalculatorSubstract';
    import div from './CalculatorDivide';
    import mul from './CalculatorMultiply';

    export default {
      add: add,
      sub: sub,
      div: div,
      mul: mul
    };
    ```
- Lets install the dependencies for this step
  ```
  # run npm i to install all the requirements
  npm i 
  ```
- Run the tests  
  ```
  # execute the tests
  npm run test
  ```
- This should be the output
  ```
  START:
  Version: webpack 4.27.1
  Time: 11248ms
  Built at: 2018-12-10 01:08:41
                          Asset      Size               Chunks             Chunk Names
                    main.min.js  6.22 KiB     0, 1, 2, 3, 4, 5  [emitted]  main
          src\Calculator.min.js  6.22 KiB     1, 0, 2, 3, 4, 5  [emitted]  src\Calculator
        src\CalculatorAdd.min.js  2.07 KiB                    2  [emitted]  src\CalculatorAdd
    src\CalculatorDivide.min.js  2.07 KiB                    3  [emitted]  src\CalculatorDivide
  src\CalculatorMultiply.min.js  2.08 KiB                    4  [emitted]  src\CalculatorMultiply
  src\CalculatorSubstract.min.js  2.08 KiB                    5  [emitted]  src\CalculatorSubstract
              test\index.min.js  74.9 KiB  6, 0, 1, 2, 3, 4, 5  [emitted]  test\index
  Entrypoint main = main.min.js
  Entrypoint src\Calculator = src\Calculator.min.js
  Entrypoint src\CalculatorSubstract = src\CalculatorSubstract.min.js
  Entrypoint src\CalculatorMultiply = src\CalculatorMultiply.min.js
  Entrypoint src\CalculatorDivide = src\CalculatorDivide.min.js
  Entrypoint src\CalculatorAdd = src\CalculatorAdd.min.js
  Entrypoint test\index = test\index.min.js
  [0] ./src/Calculator.js 2.12 KiB {0} {1} {6} [built]
  [1] ./src/CalculatorAdd.js 2.63 KiB {0} {1} {2} {6} [built]
  [2] ./src/CalculatorSubstract.js 2.64 KiB {0} {1} {5} {6} [built]
  [3] ./src/CalculatorDivide.js 2.63 KiB {0} {1} {3} {6} [built]
  [4] ./src/CalculatorMultiply.js 2.63 KiB {0} {1} {4} {6} [built]
  ...
  [built]
  10 12 2018 01:08:41.437:INFO [karma-server]: Karma v3.1.3 server started at http://0.0.0.0:9876/
  10 12 2018 01:08:41.440:INFO [launcher]: Launching browsers Chrome with concurrency unlimited
  10 12 2018 01:08:41.445:INFO [launcher]: Starting browser Chrome
  10 12 2018 01:08:43.123:INFO [Chrome 71.0.3578 (Windows 10.0.0)]: 

    Test Calculator
      Test add
        √ Add 2 Numbers
        √ Add 2 Strings
      Test Substract
        √ Substract 2 Numbers
        √ Substract 2 Strings
      Test Multiply
        √ Multiply 2 Numbers
        √ Multiply 2 Strings
      Test Divide
        √ Divide 2 Numbers
        √ Divide 2 Strings

  Finished in 0.012 secs / 0.001 secs @ 01:08:43 GMT+0200 (GMT+02:00)

  SUMMARY:
  √ 8 tests completed

  ============== Coverage summary ==============
  Statements   : 100% ( 8/8 )
  Branches     : 100% ( 0/0 )
  Functions    : 100% ( 8/8 )
  Lines        : 100% ( 8/8 )
  ==============================================
  ```