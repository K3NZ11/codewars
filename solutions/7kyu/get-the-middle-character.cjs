/**
 * @see https://www.codewars.com/kata/get-the-middle-character/train/javascript
 * @param {string} s
 * @returns
 */
const getMiddle = (s) => {
    const end = Math.floor(s.length / 2);
    const start = end - Math.abs((s.length % 2) - 1);
    return s.slice(start, end + 1);
};

module.exports = getMiddle;
