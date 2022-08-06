const assert = require("assert");
const arrayDiff = require("../../solutions/6kyu/array-dot-diff.cjs");

describe("array-dot-diff.test.cjs", () => {
    const testCases = {
        "basic tests": [
            {
                input: [[1], [1]],
                expected: [],
            },
            {
                input: [[1, 2], [1]],
                expected: [2],
            },
            {
                input: [[1, 2, 2], [1]],
                expected: [2, 2],
            },
            {
                input: [[1, 2, 2], [2]],
                expected: [1],
            },
            {
                input: [[1, 2, 2], []],
                expected: [1, 2, 2],
            },
            {
                input: [[], [1, 2]],
                expected: [],
            },
            {
                // prettier-ignore
                input: [[1, 2, 3],[1, 2]],
                expected: [3],
            },
        ],
    };

    Object.entries(testCases).forEach(([title, cases]) => {
        it(title, () => {
            cases.forEach(({ input, expected }) => {
                assert.deepEqual(arrayDiff(...input), expected);
            });
        });
    });
});
