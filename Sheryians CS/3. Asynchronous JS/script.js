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

