const assert = require("assert");
const ff = require("./index.js");

assert.equal(ff.curry((a, b) => a + b)(3)(5), 8);
assert.equal(ff.curry((a, b, c) => 1 + a + b * c)(3)(5)(7), 39);
ff.curry(assert.equal)(5)(5);

const fib = ff.memoize(
    n => n < 2 ? n : fib(n - 1) + fib(n - 2)
);

assert.equal(fib(7), 13);
assert.equal(fib(5), 5);

assert("all is well");