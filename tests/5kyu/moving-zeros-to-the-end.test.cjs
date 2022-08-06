const assert = require("assert");
const moveZeros = require("../../solutions/5kyu/moving-zeros-to-the-end.cjs");

describe("moving-zeros-to-the-end.test.cjs", () => {
    const testCases = {
        "fixed tests": [
            {
                input: [[1, 2, 0, 1, 0, 1, 0, 3, 0, 1]],
                expected: [1, 2, 1, 1, 3, 1, 0, 0, 0, 0],
            },
            {
                // prettier-ignore
                input: [[ 9, 0, 0, 9, 1, 2, 0, 1, 0, 1, 0, 3, 0, 1, 9, 0, 0, 0, 0, 9 ]],
                // prettier-ignore
                expected: [ 9, 9, 1, 2, 1, 1, 3, 1, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
            },
            {
                // prettier-ignore
                input: [[ "a", 0, 0, "b", "c", "d", 0, 1, 0, 1, 0, 3, 0, 1, 9, 0, 0, 0, 0, 9 ]],
                // prettier-ignore
                expected: [ "a", "b", "c", "d", 1, 1, 3, 1, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
            },
            {
                // prettier-ignore
                input: [[ "a", 0, 0, "b", null, "c", "d", 0, 1, false, 0, 1, 0, 3, [], 0, 1, 9, 0, 0, {}, 0, 0, 9 ]],
                // prettier-ignore
                expected: [ "a", "b", null, "c", "d", 1, false, 1, 3, [], 1, 9, {}, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
            },
            {
                input: [[0, 1, null, 2, false, 1, 0]],
                expected: [1, null, 2, false, 1, 0, 0],
            },
        ],
    };

    Object.entries(testCases).forEach(([title, cases]) => {
        it(title, () => {
            cases.forEach(({ input, expected }) => {
                assert.deepEqual(moveZeros(...input), expected);
            });
        });
    });
});
