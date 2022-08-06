/**
 * @see https://www.codewars.com/kata/moving-zeros-to-the-end/train/javascript
 * @param {any[]} a
 * @returns
 */
const moveZeros = (a) => {
    const zeros = [];
    const others = a.reduce((p, c) => {
        if (c !== 0) return [...p, c];
        zeros.push(c);
        return p;
    }, []);
    return others.concat(zeros);
};

module.exports = moveZeros;
