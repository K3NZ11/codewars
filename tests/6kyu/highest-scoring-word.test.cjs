const assert = require("assert");
const high = require("../../solutions/6kyu/highest-scoring-word.cjs");

describe("highest-scoring-word.test.cjs", () => {
    const testCases = {
        "basic tests": [
            { input: ["man i need a taxi up to ubud"], expected: "taxi" },
            {
                input: ["what time are we climbing up the volcano"],
                expected: "volcano",
            },
            { input: ["take me to semynak"], expected: "semynak" },
            { input: ["massage yes massage yes massage"], expected: "massage" },
            {
                input: ["take two bintang and a dance please"],
                expected: "bintang",
            },
            { input: ["aa b"], expected: "aa" },
            { input: ["b aa"], expected: "b" },
            { input: ["bb d"], expected: "bb" },
            { input: ["d bb"], expected: "d" },
            { input: ["aaa b"], expected: "aaa" },
        ],
    };

    Object.entries(testCases).forEach(([title, cases]) => {
        it(title, () => {
            cases.forEach(({ input, expected }) => {
                assert.strictEqual(high(...input), expected);
            });
        });
    });
});
