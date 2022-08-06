/**
 * @see https://www.codewars.com/kata/duplicate-encoder/train/javascript
 * @param {string} s
 * @returns
 */
const duplicateEncode = (s) => {
    const word = s.toLowerCase();
    const characters = word.split("");
    return characters.reduce(
        (p, c) => p + (word.indexOf(c) !== word.lastIndexOf(c) ? ")" : "("),
        ""
    );
};

module.exports = duplicateEncode;
