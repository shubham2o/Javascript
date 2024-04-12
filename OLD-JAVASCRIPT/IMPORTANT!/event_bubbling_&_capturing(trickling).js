/* // Event Bubbling (⬆️)
   // ~ It is used by default if you don't pass any third argument inside 
   //   the event listener function.

document.querySelector("#grandparent").addEventListener("click", () => {
    console.log("Grandparent Clicked!");
}, false);

document.querySelector("#parent").addEventListener("click", () => {
    console.log("Parent Clicked!");
});

document.querySelector("#child").addEventListener("click", () => {
    console.log("Child Clicked!");
});


// Above can also be written as

document.querySelector("#grandparent").addEventListener("click", () => {
    console.log("Grandparent Clicked!");
}, false);

document.querySelector("#parent").addEventListener("click", () => {
    console.log("Parent Clicked!");
}, false);

document.querySelector("#child").addEventListener("click", () => {
    console.log("Child Clicked!");
}, false);


// Event Capturing (⬇️)

document.querySelector("#grandparent").addEventListener("click", () => {
    console.log("Grandparent Clicked!");
}, true);

document.querySelector("#parent").addEventListener("click", () => {
    console.log("Parent Clicked!");
}, true);

document.querySelector("#child").addEventListener("click", () => {
    console.log("Child Clicked!");
}, true);


document.querySelector("#grandparent").addEventListener("click", () => {
    console.log("Grandparent Clicked!");
}, true);   // using Capturing

document.querySelector("#parent").addEventListener("click", () => {
    console.log("Parent Clicked!");
}, false);  // using Bubbling

document.querySelector("#child").addEventListener("click", () => {
    console.log("Child Clicked!");
}, true);   // using Capturing


document.querySelector("#grandparent").addEventListener("click", () => {
    console.log("Grandparent Clicked!");
}, false);

document.querySelector("#parent").addEventListener("click", (e) => {
    console.log("Parent Clicked!");
    // e.stopPropagation();
}, false);

document.querySelector("#child").addEventListener("click", (e) => {
    console.log("Child Clicked!");
    e.stopPropagation();
}, false);
*/


document.querySelector("#grandparent").addEventListener("click", (e) => {
    console.log("Grandparent Clicked!");
    e.stopPropagation();
}, true);

document.querySelector("#parent").addEventListener("click", (e) => {
    console.log("Parent Clicked!");
    // e.stopPropagation();
}, true);

document.querySelector("#child").addEventListener("click", (e) => {
    console.log("Child Clicked!");
    // e.stopPropagation();
}, true);