let name1 = {
    firstname : "Shubham",
    lastname : "Sharma"
}

let printName = function () {
    console.log(this.firstname + " " + this.lastname);
}


let printMyName = printName.bind(name1);
printMyName();

Function.prototype.mybind = function (...args) {
    let obj = this
    return function () {
        obj.call(args[0]);
    }
}

let printMyName2 = printName.mybind(name1);
printMyName2(); 