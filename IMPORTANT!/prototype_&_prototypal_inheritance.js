/* // let arr = ["Shubham", "Stephen"];


let object = {
    name : "Shubham",
    city : "Delhi",
    getIntro : function () {
        console.log(this.name + " from " + this.city);
    }
};


let object2 ={
    name : "Stephen",
};


// Never do this !!!
object2.__proto__ = object;
*/


/* Each and every function what you create will now get access to 
mybind() just because we have set mybind onto the prototype, it will 
now give all the functions access to mybind method. */
Function.prototype.mybind = function () {
    console.log("Hello! I am Shubham");
}

function fun () {}
console.log(fun.__proto__.mybind());

console.log(``);

function fun2 () {}
console.log((fun2.__proto__.mybind()));