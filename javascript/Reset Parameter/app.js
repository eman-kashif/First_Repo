// to dispalay a list in console


function numbers(a, b, c, d) {
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
}
numbers(1, 2, 3, 4);

// to display a array in console


function digits(...args) {
    console.log(args);
}
digits(1, 2, 3, 4, 5, "eman", true);


// to display multiplication in console
function multiplyNumbers(...args) {
    let multiplier = 1;
    for(let num of args) {
        multiplier = multiplier * num;
    }
    return multiplier;
}
console.log(multiplyNumbers(2, 3, 4, 2, 2))