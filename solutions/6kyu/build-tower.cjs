/**
 * @see https://www.codewars.com/kata/build-tower/train/javascript
 * @param {number} n
 * @returns
 */
const towerBuilder = (n) => {
    const answers = [];
    for (let i = 0; i < n; i++) {
        const spaces = " ".repeat(n - i - 1);
        const stars = "*".repeat(2 * i + 1);
        answers.push(spaces + stars + spaces);
    }
    return answers;
};

module.exports = towerBuilder;
