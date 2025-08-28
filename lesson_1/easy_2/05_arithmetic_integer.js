// Write a program that prompts the user for two positive integers, 
// and then prints the results of the following operations on those two numbers: addition, subtraction, product, quotient, remainder, and power.
// Do not worry about validating the input.

const readline = require("readline-sync");

function prompt(msg) {
  console.log(`==> ${msg}`);
}

prompt("Enter the first number:");
let firstNumber = Number(readline.question()); 

prompt("Enter the second number:");
let secondNumber = Number(readline.question());

const addition = firstNumber + secondNumber;
prompt(`${firstNumber} + ${secondNumber} = ${addition}`);

const subtract = firstNumber - secondNumber;
prompt(`${firstNumber} - ${secondNumber} = ${subtract}`);

const product = firstNumber * secondNumber;
prompt(`${firstNumber} * ${secondNumber} = ${product}`);

const quotient = Math.floor(firstNumber / secondNumber);
prompt(`${firstNumber} / ${secondNumber} = ${quotient}`);

const remainder = firstNumber % secondNumber;
prompt(`${firstNumber} % ${secondNumber} = ${remainder}`);

const power = firstNumber ** secondNumber;
prompt(`${firstNumber} ** ${secondNumber} = ${power}`);


// ==> Enter the first number:
// 23
// ==> Enter the second number:
// 17
// ==> 23 + 17 = 40
// ==> 23 - 17 = 6
// ==> 23 * 17 = 391
// ==> 23 / 17 = 1
// ==> 23 % 17 = 6
// ==> 23 ** 17 = 1.4105003956066297e+23