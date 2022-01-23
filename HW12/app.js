
function main(a = 2, b = 3, c) {
    return typeof c === 'function' ? c(sum(a, b)) : sum(a, b);
}

function sum(a, b) {
    return a + b;
}


let result = main(undefined, undefined, function pow(a, b = 2) { return b == 1 ? a : a * pow(a, b - 1); })


console.log(result);