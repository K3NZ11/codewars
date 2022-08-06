/**
 * @see https://www.codewars.com/kata/youre-a-square/train/javascript
 * @param {number} n
 * @returns
 */
const isSquare = (n) => {
    return n >= 0 && Math.sqrt(n) % 1 === 0;
};

module.exports = isSquare;
