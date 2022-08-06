const assert = require("assert");
const isSquare = require("../../solutions/7kyu/youre-a-square.cjs");

describe("youre-a-square.test.cjs", () => {
    const testCases = {
        "basic tests": [
            { input: [-1], expected: false },
            { input: [0], expected: true },
            { input: [3], expected: false },
            { input: [4], expected: true },
            { input: [25], expected: true },
            { input: [26], expected: false },
        ],
    };

    Object.entries(testCases).forEach(([title, cases]) => {
        it(title, () => {
            cases.forEach(({ input, expected }) => {
                assert.strictEqual(isSquare(...input), expected);
            });
        });
    });
});
