/**
 * @see https://www.codewars.com/kata/find-the-odd-int/train/javascript
 * @param {number[]} a
 * @returns
 */
const findOdd = (a) => {
    return a.reduce((p, c) => p ^ c);
};

module.exports = findOdd;
