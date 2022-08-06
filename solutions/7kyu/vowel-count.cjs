/**
 * @see https://www.codewars.com/kata/vowel-count/train/javascript
 * @param {string} s
 * @returns
 */
const getCount = (s) => {
    return s.split("").filter((c) => "aeiou".includes(c)).length;
};

module.exports = getCount;
