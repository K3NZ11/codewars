# CODEWARS

---

> :warning: Before viewing any solution, I would recommend you to try and solve the kata yourself first. It also worth noting that all the solutions here **ARE NOT THE BEST POSSIBLE SOLUTIONS**. These are the best solutions that I could come up with, so feel free to create a [`Pull Request`](https://github.com/K3NZ11/codewars/pulls) if you have any suggestion.

## Get Started

`npm run create -- <slug | id>`
Generate both solution and test files.

-   solutions/[rank]/[slug].cjs
-   tests/[rank]/[slug].test.cjs

`npm run test`
Run all files under `tests/` directory ending with `.test.cjs`

## VSCode

If you are using `Visual Studio Code` as your text editor, there are a few code snippets that you can use.

`cws`

```javascript
/**
 * @see https://www.codewars.com/kata/[FILENAME_BASE]/train/javascript
 * @param {} args
 * @returns
 */
const methodName = (args) => {};

module.exports = methodName;
```

`cwt`

```javascript
const assert = require("assert");
const methodName = require("../../solutions/[RANK]/[FILENAME_BASE].cjs");

describe("[FILENAME]", () => {
    const testCases = { "test case title": [{ input: [], expected: 0 }] };

    Object.entries(testCases).forEach(([title, cases]) => {
        it(title, () => {
            cases.forEach(({ input, expected }) => {
                assert.strictEqual(methodName(...input), expected);
            });
        });
    });
});
```
