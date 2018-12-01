/**
 * This file is for our coverage
 * 
 * require all "spec" modules 
 */
const testsContext = require.context('.', true, /.[sS]pec$/);
testsContext.keys().forEach(testsContext);