// Task 1
let btn1 = document.querySelector('#button1');
let p = document.querySelector('p');

btn1.addEventListener("click", () => {
    p.textContent = "Hello, My name is Shubham Sharma.";
});

// Task 2
let btn2 = document.querySelector("#button2");
let plantImg = document.querySelector("#plant-img")
let flowerImg = document.querySelector("#flower-img")

btn2.addEventListener('click', () => {
    var src1 = plantImg.src;
    var src2 = flowerImg.src;

    plantImg.src = src2;
    flowerImg.src = src1;
});

// Task 3
let form1 = document.querySelector("#form1");
let inps = document.querySelectorAll('input[type="text"]');

form1.addEventListener("submit", function (e) {
    e.preventDefault();

    for (let i = 0; i < inps.length; i++) {
        inps[i].value.trim() === "" ? alert("Please write something in the field.") : null;
    }
});

// Task 4
let task4_ul = document.querySelector("#task4-ul");
let task4_text = document.querySelector("#task4-text");
let add = document.querySelector("#add");
let remove = document.querySelector("#remove");
let li;

add.addEventListener("click", () => {
    let task4_text_val = task4_text.value.trim();
    if (task4_text_val === "") { }
    else {
        li = document.createElement("li");
        li.textContent = task4_text_val;
        task4_ul.appendChild(li);
        task4_text.value = "";
    }
});

remove.addEventListener("click", () => {
    task4_ul.removeChild(li);
})

// Task 5
let task5_h3 = document.querySelector("#task5-h3");
let task5_start = document.querySelector("#task5-start");
let task5_stop = document.querySelector("#task5-stop");
let interval;

task5_start.addEventListener("click", () => {
    let count = 0;
    interval = setInterval(() => {
        task5_h3.textContent = ++count;
    }, 1000);
});

task5_stop.addEventListener("click", () => {
    clearInterval(interval);
});