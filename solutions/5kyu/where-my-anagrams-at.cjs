/**
 * @see https://www.codewars.com/kata/where-my-anagrams-at/train/javascript
 * @param {string} word
 * @param {string[]} words
 * @returns
 */
const anagrams = (word, words) => {
    const formattedWord = word.split("").sort().join("");
    return words.filter((w) => w.split("").sort().join("") === formattedWord);
};

module.exports = anagrams;
