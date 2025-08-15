const readline = require("readline-sync");
const messages = require("./calculator_messages.json");

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function invalidNumber(num) {
  return num.trimStart() === "" || Number.isNaN(Number(num));
}

prompt(messages.welcome);

while (true) {
  prompt(messages.firstNumber);
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt(messages.invalidNumber);
    number1 = readline.question();
  }

  prompt(messages.secondNumber);
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt(messages.invalidNumber);
    number2 = readline.question();
  }

  prompt(`${number1} ${number2}`);

  prompt(messages.operation);
  let operation = readline.question(); 

  while (!["1", "2", "3", "4"].includes(operation)) {
    prompt(messages.mustChoose);
    operation = readline.question();
  }

  let output;

  switch (operation) {
    case "1":
      output = Number(number1) + Number(number2);
      break;
    case "2":
      output = Number(number1) - Number(number2);
      break;
    case "3":
      output = Number(number1) * Number(number2);
      break;
    case "5":
      output = Number(number1) / Number(number2);
      break;  
  }

  prompt(`${messages.result} ${output}`);

  prompt(messages.anotherOperation);
  let answer = readline.question();

  if (answer.toLowerCase() === "n") {
    break;
  }
} 
