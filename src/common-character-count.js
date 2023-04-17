const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount( s1, s2 ) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  const count = {}; // object to store character count
  let result = 0;

  // count characters in the first string
  for (let i = 0; i < str1.length; i++) {
    const char = str1[i];
    count[char] = count[char] ? count[char] + 1 : 1;
  }

  // iterate through the second string
  for (let i = 0; i < str2.length; i++) {
    const char = str2[i];
    // if the character is already counted in the first string, decrement its count
    if (count[char]) {
      count[char]--;
      result++;
    }
  }

  return result;
}

module.exports = {
  getCommonCharacterCount
};
