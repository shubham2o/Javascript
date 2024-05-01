// console.log(this); // Window

/*
function abc() {
    console.log(this); // Window
}

abc();
*/

/*
let obj = {
    name: "Shubham",
    abc: function () {
        console.log(this); // Object
    },
    age: 23,
}

obj.abc();
*/

// ES5 Functions
/*
let obj = {
    name: "Shubham",
    abc: function () {
        console.log(this); // Object
        console.log(this.name); // Object
        function hello() {
            console.log(this); // Window
            console.log(this.name); // Window
        }
        hello();
    }
}

obj.abc();
*/

// ES6 - Arrow Functions
/*
let obj = {
    name: 'Shubham',
    abc: function () {
        console.log(this); // Object
        console.log(this.name); // Object
        let hello = () => {
            console.log(this); // Object
            console.log(this.name); // Object
        }
        hello();
    }
}

obj.abc();
*/

/*
let obj = {
    name: "Shubham",
    abc: () => {
        console.log(this); // Window
        console.log(this.name); // Window
        let hello = () => {
            console.log(this); // Window
            console.log(this.name); // Window
        }
        hello();
    }
}

obj.abc();
*/

// Constructor Function
/*
function add() {
    console.log(this); // Object
}

const ans = new add();
*/

// Event Listener
/* document.querySelector("button").addEventListener("click", function () {
    console.log(this); // Object
});
*/

// CALL
/*
const obj = {
    name: "Shubham",
    age: 24,
}

function abcd() {
    console.log(this);
    console.log(this.name);
}

abcd.call(obj);

function xyz(param1, param2, param3) {
    console.log(this);
    console.log(this.name);
    console.log(param1);
    console.log(param2);
    console.log(param3);
}

let parameter1 = ["P", "a", "r", "a", "m", 3];

let parameter3 = {
    lastName: "sharma",
}

xyz.call(obj, parameter1, "parameter2", parameter3, 9009);
*/

// APPLY
/*
let obj = {
    name: "Shubham",
    age: 24,
}

function abcd() {
    console.log(this);
    console.log(this.name);
}

abcd.apply(obj);

function xyz(param1, param2, param3) {
    console.log(this);
    console.log(this.name);
    console.log(param1);
    console.log(param2);
    console.log(param3);
}

let parameter1 = ["P", "a", "r", "a", "m", 3];

let parameter3 = {
    lastName: "sharma",
}

xyz.apply(obj, [parameter1, "parameter2", parameter3, 9009]);
*/

// BIND
/*
let obj = {
    name: "Shubham",
    age: 24,
}

function abcd() {
    console.log(this);
    console.log(this.name);
}

let bind = abcd.bind(obj);
bind();

function xyz(param1, param2, param3) {
    console.log(this);
    console.log(this.name);
    console.log(param1);
    console.log(param2);
    console.log(param3);
}

let parameter1 = ["P", "a", "r", "a", "m", 3];

let parameter3 = {
    lastName: "sharma",
}

let bind = xyz.bind(obj, parameter1, "parameter2", parameter3, 9009);
bind();
*/

// Constructor Function
/*
function abcd(age) {
    this.username = "Shubham";
    this.age = age;
    let lastName = "sharma";
    console.log(lastName, age);
    this.printMyName = function (city) {
        console.log(username, lastName, age, city);
    };
}

let ans = new abcd(24);

abcd();
console.log(ans);
console.log(ans.username);
console.log(ans.age);
console.log(ans.lastName);
ans.printMyName("Delhi");
*/

// Prototypal Inheritance
/*
function abcd(age) {
    this.username = "Shubham";
    this.age = age;
    console.log(age);
}

abcd.prototype.printMyName = function (city) {
    console.log(this.username, this.age, city);
}

let ans = new abcd(24);

console.log(ans);
console.log(ans.username);
console.log(ans.age);
ans.printMyName("Delhi");
*/

// Closures
/*
function abcd(param1) {
    let a = 9009;
    console.log(param1);
    return function (param2) {
        console.log(a, param2);
    }
}

abcd("hi")("shubham");
// OR
let ans = abcd("hi");
ans("shubham");

function timer(param1) {
    let a = 12;
    console.log(param1);
    return setTimeout(function () {
        console.log(a);
    }, 5000);
}

timer("hi");
*/

// JavaScript Event Delegation
/*
let parent = document.getElementById("parent");

parent.addEventListener("click", function (e) {
    if (e.target.id === "play") {
        console.log("Play Song");
    }
    else if (e.target.id === "pause") {
        console.log("Pause Song");
    }
    else {
        console.log("Play? or Pause?");
    }
})
*/

// Higher Order Functions (HOF)
/*
function abcd(param) {
    return param();
}

abcd(function () {
    console.log("Shubham");
})

let arr = [1, 2, 3, 4, 5];

arr.forEach(function () {

});
*/

// Try Catch - Error Handling
/*
function divide(a, b) {
    try {
        if (b === 0) {
            throw Error("Cannot divide by 0");
        }
        console.log(a / b);
    }
    catch (err) {
        console.error(err);
    }
}

divide(100, 5);
divide(878, 0);
*/

// Custom Event
/*
const evt = new Event("customEvent");

document.getElementById("event-btn")
    .addEventListener("customEvent", function () {
        alert("This is made from a custom event");
    });

document.getElementById("event-btn").dispatchEvent(evt);

let myEvent = new Event("myCustomEvent");

document.getElementById("event-btn")
    .addEventListener("myCustomEvent", function () {
        prompt("This is made from a custom event");
    });

document.getElementById("event-btn").dispatchEvent(myEvent);
*/
