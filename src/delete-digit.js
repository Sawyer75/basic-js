const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit( n ) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  const str = n.toString();
  let max = 0;
  // Loop through each digit in the string
  for (let i = 0; i < str.length; i++) {
    // Remove the current digit and convert back to a number
    const num = Number(str.slice(0, i) + str.slice(i + 1));
    // Update the maximum number
    if (num > max) {
      max = num;
    }
  }
return max;
}

module.exports = {
  deleteDigit
};
