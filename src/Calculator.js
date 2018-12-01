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