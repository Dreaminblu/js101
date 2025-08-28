// Write a program that asks the user to enter an integer greater than 0,
// then asks whether the user wants to determine 
// the sum or the product of all numbers between 1 and the entered integer, inclusive.

// Please enter an integer greater than 0: 5
// Enter "s" to compute the sum, or "p" to compute the product. s

// The sum of the integers between 1 and 5 is 15.

// Setup
const readline = require("readline-sync");

// Compute Sum
function computeSum(targetNum) {
  let total = 0;

  for (let num = 1; num <= targetNum; num++) {
    total += num;
  }

  return total;
}

// Compute Product
function computeProduct(targetNum) {
  let total = 1;
  
  for (let num = 1; num <= targetNum; num++) {
    total *= num;
  }
  return total;
}

// Program
console.log("Please enter an integer greater than 0:");
let number = parseInt(readline.prompt(), 10);

console.log("Enter \"s\" to compute the sum, or \"p\" to compute the product.");
let operation = readline.prompt();

if (operation === "s") {
  let sum = computeSum(number);
  console.log(`The sum of the integers between 1 and ${number} is ${sum}`);
} else if (operation === "p") {
  let product = computeProduct(number);
  console.log(`The product of the integers between 1 and ${number} is ${product}`);
} else {
  console.log("Unknown operation! Please try again!");
}

