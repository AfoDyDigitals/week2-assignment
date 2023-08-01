//create variables to accept first and second user inputs
let a = parseInt(prompt("Enter current year: "));
let b = parseInt(prompt("Enter your year of birth: "));
//create a subtraction function
function subtraction() {
//the subtraction function will return the result of the subtraction of the two inputs
return a - b;
}

//Invoke subtraction function to run the calculator
console.log(subtraction());