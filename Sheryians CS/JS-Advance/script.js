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
