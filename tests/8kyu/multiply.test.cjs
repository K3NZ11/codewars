const assert = require("assert");
const multiply = require("../../solutions/8kyu/multiply.cjs");

describe("multiply.test.cjs", () => {
    const testCases = {
        "fixed tests": [
            { input: [1, 1], expected: 1 },
            { input: [2, 1], expected: 2 },
            { input: [2, 2], expected: 4 },
            { input: [3, 5], expected: 15 },
        ],
    };

    Object.entries(testCases).forEach(([title, cases]) => {
        it(title, () => {
            cases.forEach(({ input, expected }) => {
                assert.strictEqual(multiply(...input), expected);
            });
        });
    });
});
