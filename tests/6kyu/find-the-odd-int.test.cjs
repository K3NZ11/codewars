const assert = require("assert");
const findOdd = require("../../solutions/6kyu/find-the-odd-int.cjs");

describe("find-the-odd-int.test.cjs", () => {
    const testCases = {
        "basic tests": [
            // prettier-ignore
            { input: [[20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]], expected: 5},
            { input: [[1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]], expected: -1 },
            { input: [[20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5]], expected: 5 },
            { input: [[10]], expected: 10 },
            { input: [[1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1]], expected: 10 },
            { input: [[5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10]], expected: 1 },
        ],
    };

    Object.entries(testCases).forEach(([title, cases]) => {
        it(title, () => {
            cases.forEach(({ input, expected }) => {
                assert.strictEqual(findOdd(...input), expected);
            });
        });
    });
});
