module.exports = exports.default = curry = (func, arity = func.length) => {
    args = []
    let _rec = (...a) => {
        args.push(...a);
        if (args.length === arity)
            return func(...args);
        
        else return (...n) => _rec(...n);
    };
    return (...n) => _rec(...n);
}
