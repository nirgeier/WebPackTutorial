/**
 * The calculator operators
 */
export function add() {
  return Array.prototype.slice.call(arguments)
    .reduce((sum, number) => sum + number);
}

export function sub() {
  return Array.prototype.slice.call(arguments)
    .reduce((sum, number) => sum - number);
}

export function div() {
  return Array.prototype.slice.call(arguments)
    .reduce((sum, number) => sum / number);
}

export function mul() {
  return Array.prototype.slice.call(arguments)
    .reduce((sum, number) => sum * number);
}