/**
 * @see https://www.codewars.com/kata/multiples-of-3-or-5/train/javascript
 * @param {number} m
 * @returns
 */
const solution = (m) => {
    if (m <= 3) return 0;
    const sum = (d) => {
        const n = Math.floor((m - 1) / d);
        return n * d * (n + 1);
    };

    return (sum(3) + sum(5) - sum(15)) / 2;
};

module.exports = solution;
