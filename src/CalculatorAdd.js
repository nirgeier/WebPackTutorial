/**
 * Add 2 or more numbers
 */
module.exports = function () {
  return Array.prototype.slice.call(arguments)
    .reduce((sum, number) => sum + number, 0);
};