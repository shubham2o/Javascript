// textContent
let btn1 = document.querySelector("#button1");

btn1.addEventListener("click", function () {
    btn1.textContent = "Downloading";
    console.log("Button Clicked");
});

// +=
let btn2 = document.querySelector("#button2");

btn2.addEventListener("click", function () {
    btn2.textContent += ", Shubham";
})

// innerHTML v/s textContent
let heading1 = document.querySelector("#heading1");
heading1.innerHTML = "<i>Software Engineer</i>"

let heading2 = document.querySelector("#heading2");
heading2.textContent = "<i>Working Remotely</i>"

// .style
let heading3 = document.querySelector("#heading3");
heading3.style.color = "blue";
heading3.style.fontFamily = "Monument";

// classList
let heading4 = document.querySelector('#heading4');
heading4.classList.add("makeitred");
// heading4.classList.remove("makeitred");

// document.createElement()
let heading5 = document.createElement('h1');
heading5.textContent = "This is made using textContent.";
heading5.classList.add("makeitred");

// appendChild()
document.querySelector("body").appendChild(heading5);

// removeChild()
// document.querySelector("body").removeChild(heading5);

// EventListener()
let btn3 = document.querySelector("#button3");

btn3.addEventListener("click", function () {
    btn3.classList.toggle("darkmode");
})

// event
document.querySelector("body").addEventListener("mousemove", function (e) {
    console.log(e.clientX, e.clientY);
})