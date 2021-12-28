let multiply = function (x, y) {
    console.log(x * y);
}
multiply(3, 5);


// Function Currying - METHOD 1
let multiplyByTwo = multiply.bind(this, 2);
multiplyByTwo(5);

let multiplyByThree = multiply.bind(this, 3);
multiplyByThree(2);

let multiplyByTwoAndThree = multiply.bind(this, 3, 5);
multiplyByTwoAndThree(2);

let mmultiply = multiply.bind(this);
mmultiply(2, 5)

let mmmultiply = multiply.bind(this, 2, 3);
mmmultiply();


// Function Currying - METHOD 2 via Closures
console.log(``);
let multiplyy = function (x) {
    return function (y) {
        console.log(x * y);
    }
}

let multiplyByThreeAndFivee = multiplyy(3);
multiplyByThreeAndFivee(5);

let multiplyByTwoAndFivee = multiplyy();
multiplyByTwoAndFivee(2, 5);

let multiplyByTwoAndThreee = multiplyy(2, 6);
multiplyByTwoAndThreee();

let multiplyByZero = multiplyy(3, 5);
multiplyByZero(0);