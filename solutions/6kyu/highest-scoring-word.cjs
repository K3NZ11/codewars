/**
 * @see https://www.codewars.com/kata/highest-scoring-word/train/javascript
 * @param {string} words
 * @returns
 */
const high = (words) => {
    const alphabets = "abcdefghijklmnopqrstuvwxyz";
    const score = (word) => {
        return word.split("").reduce((p, c) => p + alphabets.indexOf(c) + 1, 0);
    };
    return words.split(" ").sort((a, b) => score(b) - score(a))[0];
};

module.exports = high;
