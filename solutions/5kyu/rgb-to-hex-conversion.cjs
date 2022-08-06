/**
 * @see https://www.codewars.com/kata/rgb-to-hex-conversion/train/javascript
 * @param {number} r
 * @param {number} g
 * @param {number} b
 * @returns
 */
const rgb = (r, g, b) => {
    const hex = (x) => {
        const n = Math.max(0, Math.min(x, 255));
        return n.toString(16).padStart(2, "0").toUpperCase();
    };
    return `${hex(r)}${hex(g)}${hex(b)}`;
};

module.exports = rgb;
