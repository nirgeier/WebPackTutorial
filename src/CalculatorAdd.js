/**
 * Add 2 or more numbers
 */
export default function () {
  return Array.prototype.slice.call(arguments)
    .reduce((sum, number) => sum + number);
}