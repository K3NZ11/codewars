const assert = require("assert");
const getMiddle = require("../../solutions/7kyu/get-the-middle-character.cjs");

describe("get-the-middle-character.test.cjs", () => {
    const testCases = {
        "basic tests": [
            { input: ["test"], expected: "es" },
            { input: ["testing"], expected: "t" },
            { input: ["middle"], expected: "dd" },
            { input: ["A"], expected: "A" },
        ],
    };

    Object.entries(testCases).forEach(([title, cases]) => {
        it(title, () => {
            cases.forEach(({ input, expected }) => {
                assert.strictEqual(getMiddle(...input), expected);
            });
        });
    });
});
