/**
 * @see https://www.codewars.com/kata/strings-mix/train/javascript
 * @param {string} s1
 * @param {string} s2
 * @returns
 */
const mix = (s1, s2) => {
    const f = (x) => {
        return x
            .replace(/[^a-z]/g, "")
            .split("")
            .reduce((p, c) => ({ ...p, [c]: (p[c] || 0) + 1 }), {});
    };
    const c1 = f(s1);
    const c2 = f(s2);

    const k = Object.keys({ ...c1, ...c2 }).reduce((p, c) => {
        const k1 = c1[c] || 0;
        const k2 = c2[c] || 0;

        if (k1 > 1 || k2 > 1) {
            if (k1 > k2) return [...p, `1:${c.repeat(k1)}`];
            if (k2 > k1) return [...p, `2:${c.repeat(k2)}`];
            return [...p, `=:${c.repeat(k1)}`];
        }

        return p;
    }, []);

    const answer = k
        .sort((a, b) => {
            const na = a.split(":")[1].length;
            const nb = b.split(":")[1].length;

            // Decending numeric order
            if (na > nb) return -1;
            if (na < nb) return 1;

            // "2" -> "1" -> "="
            if (a[0] > b[0]) return 1;
            if (a[0] < b[0]) return -1;

            // Ascending alphabetic order
            if (a[2] > b[2]) return 1;
            return -1;
        })
        .join("/");

    return answer;
};

module.exports = mix;
