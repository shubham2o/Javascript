// Function Statement aka Function Declaration
function a() {
    console.log("a called");
}


// Function Expression
var b = function () {
    console.log("b called");
}
a();
b();


// Anonymous Function (a function without a name)
function () {}


// Named Function Expression
var p = function xyz() {
    console.log(xyz);
}
// xyz(); // ERROR
p();


// Difference between Parameters and Arguements
// First Class Functions
// Arrow Functions