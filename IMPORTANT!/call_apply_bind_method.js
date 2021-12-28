// call method
console.log(`||| CALL METHOD |||`);
let name1 = {
    firstname : "Akshay",
    lastname : "Saini",
}

let printFullName = function (hometown, state) {
    console.log(this.firstname + " " + this.lastname + " from " + hometown + " , " + state);
}

printFullName.call(name1, "Dehradun", "Uttarakhand");

let name2 = {
    firstname : "Sachin",
    lastname : "Tendulkar",
}

// Function borrowing
printFullName.call(name2, "Mumbai", "Maharashtra");
console.log("");



// apply method
console.log(`||| APPLY METHOD |||`);
printFullName.apply(name1, ["Dehradun", "Uttarakhand"]);

printFullName.apply(name2, ["Mumbai", "Maharashtra"]);
console.log("");



// bind method
console.log(`||| BIND METHOD |||`);
let printMyName = printFullName.bind(name1, "Dehradun", "Uttarakhand");
console.log(printMyName);

let printMyName1 = printFullName.bind(name2, "Mumbai", "Maharashtra");
console.log(printMyName1);
console.log("");

printMyName();
printMyName1();