// What is a Callback Function in JavaScript
setTimeout(function () {
    console.log("Timer")
}, 5000);

function x(y) {
    console.log("X");
    y();
}
x(function y() {
    console.log("Y");
});


function attachEventListener() {
    let count = 0;
    document.getElementById("clickme").addEventListener("click", function xyz() {
        console.log("Button Clicked", ++count);
    });
}
attachEventListener();