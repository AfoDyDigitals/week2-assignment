const prompt = require("prompt-sync")();

let a = parseInt(prompt("Insert current year: "));
let b = parseInt(prompt("Insert Year of Birth: "));

function subtraction() {
    return a - b;
}
console.log(subtraction());