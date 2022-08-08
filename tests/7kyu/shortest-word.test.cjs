const assert = require("assert");
const findShort = require("../../solutions/7kyu/shortest-word.cjs");

describe("shortest-word.test.cjs", () => {
    const testCases = {
        "basic tests": [
            {
                input: ["bitcoin take over the world maybe who knows perhaps"],
                expected: 3,
            },
            {
                input: [
                    "turns out random test cases are easier than writing out basic ones",
                ],
                expected: 3,
            },
            {
                input: ["lets talk about javascript the best language"],
                expected: 3,
            },
            {
                input: ["i want to travel the world writing code one day"],
                expected: 1,
            },
            {
                input: ["Lets all go on holiday somewhere very cold"],
                expected: 2,
            },
            { input: ["Test where final word shortest see"], expected: 3 },
            { input: ["Let's travel abroad shall we"], expected: 2 },
        ],
    };

    Object.entries(testCases).forEach(([title, cases]) => {
        it(title, () => {
            cases.forEach(({ input, expected }) => {
                assert.strictEqual(findShort(...input), expected);
            });
        });
    });
});
