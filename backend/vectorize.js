const error = require("./error.js");

// takes a function (unary or binary) that operates
// strictly on non-arrays

// todo: expand to general case

const vectorize = (f, arity = f.length) => {
    if(arity === 2){
        let trav = (x, y) =>
            Array.isArray(x) ?
                Array.isArray(y) ?
                    x.length === y.length ?
                        x.map((e, i) => vectorize(e, y[i]))
                    : error("arguments are of different lengths")
                : x.map(e => trav(e, y))
            : Array.isArray(y) ?
                y.map(e => trav(x, e))
            : f(x, y);
        return trav;
    } else if(arity === 1) {
        let trav = (x) =>
            Array.isArray(x) ?
                x.map(f)
            : f(x);
        return trav;
    } else {
        error("unsupported arity " + arity);
    }
}

module.exports = exports.default = vectorize;