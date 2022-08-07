/**
 * @see https://www.codewars.com/kata/weight-for-weight/train/javascript
 * @param {string} s
 * @returns
 */
const orderWeight = (s) => {
    const sum = (x) => x.split("").reduce((p, c) => p + Number(c), 0);
    return s
        .split(" ")
        .sort((a, b) => {
            if (sum(a) > sum(b)) return 1;
            if (sum(a) < sum(b)) return -1;

            if (a > b) return 1;
            if (a < b) return -1;
            return 0;
        })
        .join(" ");
};

module.exports = orderWeight;
