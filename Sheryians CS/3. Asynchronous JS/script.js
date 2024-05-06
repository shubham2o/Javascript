// setTimeout()
/*
setTimeout(() => {
    console.log("setTimeout Function - It will give output in last because of its asynchronous nature, although it is executed before first.");
}, 0);
console.log("First");
console.log("Second");
console.log("Third");
*/

// setInterval()
/*
setInterval(() => {
    console.log("setInterval Function - It will give output in last because of its asynchronous nature, although it is executed before first.");
}, 1000);
console.log("First");
console.log("Second");
console.log("Third");
*/

// fetch()
/*
fetch(`https://randomuser.me/api/`)
    .then(raw => raw.json())
    .then(data => console.log(data.results[0].email));
console.log("First");
console.log("Second");
console.log("Third");
*/

// axios()
/*
axios.get(`https://randomuser.me/api/`)
    .then(data => console.log(data.data.results[0].email));
console.log("First");
console.log("Second");
console.log("Third");
*/

// Promise()
/*
new Promise(function (resolve, reject) {
    fetch(`https://randomuser.me/api/`)
        .then(raw => raw.json())
        .then(data => {
            if (data.results[0].gender === "male") {
                resolve();
            }
            else {
                reject();
            }
        })
}).then(function () {
    console.log("MALE");
}).catch(function () {
    console.log("FEMALE");
})

new Promise(function (resolve, reject) {
    fetch(`https://randomuser.me/api/`)
        .then(raw => raw.json())
        .then(data => {
            if (data.results[0].gender === "male") resolve();
            else reject();
        })
}).then(function () {
    console.log("MALE");
}).catch(function () {
    console.log("FEMALE");
})

console.log("First");
console.log("Second");
console.log("Third");
*/

// Callback()
/*
function abc(param1, param2) {
    param2();
    console.log(param1);
}

abc("shubham", function () {
    console.log("This is a callback function");
})

function getData(url, callback) {
    fetch(url)
        .then(raw => raw.json())
        .then(info => callback(info))
}

getData(`https://randomuser.me/api/`, function (data) {
    console.log(data.results[0].email);
})
*/

// async - await
async function abcd() {
    console.log("First");
    await fetch(`https://randomuser.me/api/`)
        .then(raw => raw.json())
        .then(data => console.log(data.results[0].email));
    console.log("Second");
    console.log("Third");
}

abcd();