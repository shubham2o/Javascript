// let and const are Block Scope and var is a Global Scope
{
    var a = 10;
    let b = 20;
    const c = 30;
    // console.log(a);
    // console.log(b);
    // console.log(c);
}
// console.log(a);
// console.log(b);
// console.log(c);


// Shadowing 
// -------- var --------
var x = 1000;
{
    var x = 10;
    let y = 20;
    const z = 30;
    // console.log(x);
    // console.log(y);
    // console.log(z);
}
// console.log(x);
// console.log(y);
// console.log(z);


// -------- let --------
let q = 1000;
{
    var p = 10;
    let q = 20;
    const r = 30;
    // console.log(p);
    // console.log(q);
    // console.log(r);
}
// console.log(q);

// -------- const --------
const w = 1000;
{
    var u = 10;
    let v = 20;
    const w = 30;
    console.log(u);
    console.log(v);
    console.log(w);
}
console.log(w);