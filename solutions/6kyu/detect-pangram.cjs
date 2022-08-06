/**
 * @see https://www.codewars.com/kata/detect-pangram/train/javascript
 * @param {string} s
 * @returns
 */
const isPangram = (s) => {
    const alphabets = "abcdefghijklmnopqrstuvwxyz";
    if (s.length < alphabets.length) return false;

    for (let i = 0; i < alphabets.length; i++) {
        if (s.toLowerCase().indexOf(alphabets[i]) === -1) return false;
    }

    return true;
};

module.exports = isPangram;
