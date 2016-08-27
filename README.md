# ffuncs
A small functional library for JavaScript.

## Contents

```javascript
const ff = require("ffuncs");

ff.curry;   // a function that curries the given function.
            // uses the `length` property of a function,
            // so functions using the `...` operator
            // may provide unexpected behaviour when
            // curried

let add = (x, y) => x + y;

let addFive = ff.curry(add)(5);

console.log([1, 2, 3, 4]).map(addFive);     // [6, 7, 8, 9]

ff.vectorize;   // this takes a unary (single-arg) or
                // binary (double-arg) function as input
                // and applies it over arrays.

let vadd = ff.vectorize(add);
console.log(vadd(2, 5));                    // 7
console.log(vadd(5, [1, 2, 3, 4]));         // [6, 7, 8, 9]
console.log(vadd([1, 2], [3, 4]));          // [4, 6]

ff.memoize;     // memoizes a numeric function.
                // ...
                // you know what this is

ff.integrate(global);

// now you can use the functions within the global scope

curry(add)(3)(7) == 10;

// etc.
```