const assert = require("assert");
const anagrams = require("../../solutions/5kyu/where-my-anagrams-at.cjs");

describe("where-my-anagrams-at.test.cjs", () => {
    const testCases = {
        "basic tests": [
            {
                input: ["a", ["a", "b", "c", "d"]],
                expected: ["a"],
            },
            {
                input: ["ab", ["aa", "ab", "ac", "ba", "bb", "bc", "cc", "cd"]],
                expected: ["ab", "ba"],
            },
            {
                // prettier-ignore
                input: ["abba", [ "aabb", "abab", "abbaa", "abbab", "abbba", "abcd", "baaab", "baab", "baba", "babaa", "bbaa" ]],
                expected: ["aabb", "abab", "baab", "baba", "bbaa"],
            },
            {
                // prettier-ignore
                input: ["abba", [ "aabb", "abab", "abbaa", "abbab", "abbba", "abcd", "baaab", "baab", "baba", "babaa", "bbaa" ]],
                expected: ["aabb", "abab", "baab", "baba", "bbaa"],
            },
            { input: ["big", ["bid", "biig", "dib", "gig"]], expected: [] },
        ],
    };

    Object.entries(testCases).forEach(([title, cases]) => {
        it(title, () => {
            cases.forEach(({ input, expected }) => {
                assert.deepEqual(anagrams(...input), expected);
            });
        });
    });
});
