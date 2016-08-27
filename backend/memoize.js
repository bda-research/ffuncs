// memoize function for numeric-type function
const memoize = (func) => {
    let mem = new Map();
    return (...n) => (
        !mem.has(n.join(",")) && mem.set(n.join(","), func(...n)),
        mem.get(n.join(","))
    );
}

module.exports = exports.default = memoize;