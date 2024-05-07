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

// innerHTML
let heading1 = document.querySelector("#heading1");
heading1.innerHTML = "<i>Software Engineer</i>"

// v/s textContent
let heading2 = document.querySelector("#heading2");
heading2.textContent = "<i>Working Remotely</i>"