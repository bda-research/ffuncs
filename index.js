let ff = {
    curry: require("./backend/curry.js"),
    vectorize: require("./backend/vectorize.js"),
    memoize: require("./backend/memoize.js"),
    integrate: (scope) => {
        for(let k in ff){
            scope[k] = ff[k];
        }
        return true;
    }
};

module.exports = ff;