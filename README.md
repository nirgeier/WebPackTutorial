# WebPackTutorial - Tree Shaking

Tree shaking means to remove unused code. In this demo we will see how it can be done

### Step 01 - Clone the repository (with the tree-shaking) branch

```sh
    git clone --branch=tree-shaking <url>

    // Once cloned install the node packages
    npm i
```

### Step 02 - Updating the code

- In the [`webpack.config.js`](webpack.config.js):

  ```js
  // Set the mode to development mode 
  mode: "development"
  ```        

- In the [`src/Calculator.js`] mark the last 2 operators
  ```js
  // Add the required "modules"
  import add from './CalculatorAdd';
  import sub from './CalculatorSubstract';
  import div from './CalculatorDivide';
  import mul from './CalculatorMultiply';

  export default {
    add: add,
    sub: sub,
    //div: div,
    //mul: mul
  };
  ```
- Now we will execute the webpack without optimization
  ```sh
  npm run-script build
  or:
  npx webpack
  ```

- We should the following output

  ```
  Asset      Size  Chunks             Chunk Names
  main.min.js  5.71 KiB    main  [emitted]  main
  Entrypoint main = main.min.js
  [./src/Calculator.js] 166 bytes {main} [built]
  [./src/CalculatorOperators.js] 527 bytes {main} [built]
  ```


- And in the output file we will see all the modules includes
  ```js
  /***/ "./src/Calculator.js":
  /*!***************************!*\
    !*** ./src/Calculator.js ***!
    \***************************/
  ...
  /***/ "./src/CalculatorAdd.js":
  /*!******************************!*\
    !*** ./src/CalculatorAdd.js ***!
    \******************************/
  ...
  /***/ "./src/CalculatorDivide.js":
  /*!*********************************!*\
    !*** ./src/CalculatorDivide.js ***!
    \*********************************/
  ...
  /***/ "./src/CalculatorMultiply.js":
  /*!***********************************!*\
    !*** ./src/CalculatorMultiply.js ***!
    \***********************************/
  ...
  /***/ "./src/CalculatorSubstract.js":
  /*!************************************!*\
    !*** ./src/CalculatorSubstract.js ***!
    \************************************/
  ```

# Cleaning up the code
### Option 1 - `optimization`

- Add the following to your [`webpack.config.js`](webpack.config.js):
  ```js
  optimization: {
     usedExports: true
   }
  ```
- Build the bundle
  ```sh
  npm run-script build
  or:
  npx webpack
  ```  
- Search for the following string in the bundle:
  ```
  unused harmony export
  ```  
- There should be comment(s) like this:
  ```js
  /* unused harmony export div */
  /* unused harmony export mul */  
  ```

- This optimization option allow us to track unused code
- Un comment the optimization flag, build wit and without it and see the size difference.
