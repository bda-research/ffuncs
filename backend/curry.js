module.exports = exports.default = curry = (func, arity = func.length) => {
    let _rec = (a, args = []) => {
        args.push(a);
        if (args.length === arity)
            return func(...args);
        
        else return n => _rec(n, args);
    };
    return n => _rec(n);
}