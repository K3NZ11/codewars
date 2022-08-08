/**
 * @see https://www.codewars.com/kata/shortest-word/train/javascript
 * @param {string} s
 * @returns
 */
const findShort = (s) => {
    return s.split(" ").sort((a, b) => a.length - b.length)[0].length;
};

module.exports = findShort;
