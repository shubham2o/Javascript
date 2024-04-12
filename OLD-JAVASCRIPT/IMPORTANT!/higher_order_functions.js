/* A function which take another function as an arguement or returns a function from it, 
is known as HIGHER ORDER FUNCTION.
A function which is passed in the higher order function is known as CALLBACK FUNCTION, 
and this is because functions are first class citizens in JavaScript. */


// Function y here is Higher Order Function 
function x() {
    console.log("Namaste");
}
function y(x) {
    x();
}


// Example -->
const radius = [3, 1, 2, 4];

const area = function (radius) {
    return Math.PI * radius * radius;
};

const circumference = function (radius) {
    return 2 * Math.PI * radius;
};

const diameter = function (radius) {
    return 2 * radius;
};


/* This Array.prototype.calculate will made calculate function available on all the array 
you'll see on our codebase. */
Array.prototype.calculate = function (logic) {
    const output = [];
    for (let i = 0; i < this.length; i++) {
        output.push(logic(this[i]));
    }
    return output;
}


console.log(radius.calculate(area));
console.log(radius.calculate(circumference));
console.log(radius.calculate(diameter));

console.log(``);

console.log(radius.map(area));
console.log(radius.map(circumference));
console.log(radius.map(diameter));

// console.log(calculate(radius, area));
// console.log(calculate(radius, circumference));
// console.log(calculate(radius, diameter));