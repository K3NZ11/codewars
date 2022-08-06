const assert = require("assert");
const duplicateEncode = require("../../solutions/6kyu/duplicate-encoder.cjs");

describe("duplicate-encoder.test.cjs", () => {
    const testCases = {
        "basic tests": [
            { input: ["din"], expected: "(((" },
            { input: ["recede"], expected: "()()()" },
            { input: ["Success"], expected: ")())())" },
            { input: ["CodeWarrior"], expected: "()(((())())" },
            { input: ["Supralapsarian"], expected: ")()))()))))()(" },
            { input: ["iiiiii"], expected: "))))))" },
        ],
        "tests with '(' and ')'": [
            { input: ["(( @"], expected: "))((" },
            { input: [" ( ( )"], expected: ")))))(" },
        ],
    };

    Object.entries(testCases).forEach(([title, cases]) => {
        it(title, () => {
            cases.forEach(({ input, expected }) => {
                assert.strictEqual(duplicateEncode(...input), expected);
            });
        });
    });
});
