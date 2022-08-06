/**
 * @see https://www.codewars.com/kata/array-dot-diff/train/javascript
 * @param {number[]} a
 * @param {number[]} b
 * @returns
 */
const arrayDiff = (a, b) => {
    return a.filter((x) => !b.includes(x));
};

module.exports = arrayDiff;
