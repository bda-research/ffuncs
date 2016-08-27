const error = require("./error.js");

// takes a function (unary or binary) that operates
// strictly on non-arrays

// todo: expand to general case

const vectorize = (f, arity = f.length) => {
    if(arity === 2){
        return (x, y) =>
            Array.isArray(x) ?
                Array.isArray(y) ?
                    x.length === y.length ?
                        x.map((e, i) => f(e, y[i]))
                    : error("arguments are of different lengths")
                : x.map(e => f(e, y))
            : Array.isArray(y) ?
                y.map(e => f(x, e))
            : f(x, y);
    } else if(arity === 1) {
        return (x) =>
            Array.isArray(x) ?
                x.map(f)
            : f(x);
    } else {
        error("unsupported arity " + arity);
    }
}

module.exports = exports.default = vectorize;