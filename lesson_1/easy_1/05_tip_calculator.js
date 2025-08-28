// Create a simple tip calculator. 
// The program should prompt for a bill amount and a tip rate. 
// The program must compute the tip, and then log both the tip and the total amount of the bill to the console. 
// You can ignore input validation and assume that the user will enter valid positive numbers.

const readline = require("readline-sync");

let bill = parseFloat(readline.question("What is the bill?"));

let tipPercentage = parseFloat(readline.question("What is the tip percentage?"));

let tip = (tipPercentage / 100) * bill;
let totalBill = tip + bill;

console.log(`The tip is $${tip.toFixed(2)}`);
console.log(`The total is $${totalBill.toFixed(2)}`);
