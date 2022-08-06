/**
 * @see https://www.codewars.com/kata/human-readable-duration-format/train/javascript
 * @param {number} seconds
 * @returns
 */
const formatDuration = (seconds) => {
    if (seconds === 0) return "now";

    const years = {
        suffix: "year",
        value: seconds / (60 * 60 * 24 * 365),
    };
    const days = {
        suffix: "day",
        value: (seconds % (60 * (60 * 24 * 365))) / (60 * 60 * 24),
    };
    const hours = {
        suffix: "hour",
        value: (seconds % (60 * 60 * 24)) / (60 * 60),
    };
    const minutes = {
        suffix: "minute",
        value: (seconds % (60 * 60)) / 60,
    };
    const remainingSeconds = {
        suffix: "second",
        value: seconds % 60,
    };

    const durations = [years, days, hours, minutes, remainingSeconds].filter(
        (o) => o.value >= 1
    );

    return durations.reduce((p, c, i) => {
        const { suffix, value } = c;
        const plural = value >= 2 ? "s" : "";

        const conjunction = i === durations.length - 2 ? " and " : ", ";
        const connector = i === durations.length - 1 ? "" : conjunction;

        return p + `${Math.floor(value)} ${suffix}${plural}${connector}`;
    }, "");
};

module.exports = formatDuration;
