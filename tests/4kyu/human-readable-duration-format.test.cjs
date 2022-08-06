const assert = require("assert");
const formatDuration = require("../../solutions/4kyu/human-readable-duration-format.cjs");

describe("human-readable-duration-format.test.cjs", () => {
    const testCases = {
        "basic tests": [
            { input: [0], expected: "now" },
            { input: [1], expected: "1 second" },
            { input: [62], expected: "1 minute and 2 seconds" },
            { input: [120], expected: "2 minutes" },
            { input: [3600], expected: "1 hour" },
            { input: [3662], expected: "1 hour, 1 minute and 2 seconds" },
            {
                input: [15731080],
                expected: "182 days, 1 hour, 44 minutes and 40 seconds",
            },
            {
                input: [132030240],
                expected: "4 years, 68 days, 3 hours and 4 minutes",
            },
            {
                input: [205851834],
                expected:
                    "6 years, 192 days, 13 hours, 3 minutes and 54 seconds",
            },
            {
                input: [253374061],
                expected: "8 years, 12 days, 13 hours, 41 minutes and 1 second",
            },
            {
                input: [242062374],
                expected:
                    "7 years, 246 days, 15 hours, 32 minutes and 54 seconds",
            },
            {
                input: [101956166],
                expected: "3 years, 85 days, 1 hour, 9 minutes and 26 seconds",
            },
            {
                input: [33243586],
                expected:
                    "1 year, 19 days, 18 hours, 19 minutes and 46 seconds",
            },
        ],
    };

    Object.entries(testCases).forEach(([title, cases]) => {
        it(title, () => {
            cases.forEach(({ input, expected }) => {
                assert.strictEqual(formatDuration(...input), expected);
            });
        });
    });
});
