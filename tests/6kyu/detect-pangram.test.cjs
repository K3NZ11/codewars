const assert = require("assert");
const isPangram = require("../../solutions/6kyu/detect-pangram.cjs");

describe("detect-pangram.test.cjs", () => {
    const testCases = {
        "basic tests": [
            {
                input: ["The quick brown fox jumps over the lazy dog."],
                expected: true,
            },
            { input: ["This isn't a pangram!"], expected: false },
            { input: ["abcdefghijklmopqrstuvwxyz "], expected: false },
            { input: ["aaaaaaaaaaaaaaaaaaaaaaaaaa"], expected: false },
            { input: ["Detect Pangram"], expected: false },
            {
                input: [
                    "A pangram is a sentence that contains every single letter of the alphabet at least once.",
                ],
                expected: false,
            },
            { input: ["Cwm fjord bank glyphs vext quiz"], expected: true },
            {
                input: ["Pack my box with five dozen liquor jugs."],
                expected: true,
            },
            { input: ["How quickly daft jumping zebras vex."], expected: true },
            { input: ["ABCD45EFGH,IJK,LMNOPQR56STUVW3XYZ"], expected: true },
            { input: ["AbCdEfGhIjKlM zYxWvUtSrQpOn"], expected: true },
        ],
    };

    Object.entries(testCases).forEach(([title, cases]) => {
        it(title, () => {
            cases.forEach(({ input, expected }) => {
                assert.strictEqual(isPangram(...input), expected);
            });
        });
    });
});
