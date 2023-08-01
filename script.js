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



//Create an array of numbers
let array = [1, 3, 4, 8, 11, 12, 15, 16, 17, 20]
//
let input = array
for (let i=1; i<=input.length; i++) {
    if(i%2 === 0){
        console.log(i);
    }
}