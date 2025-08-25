const readline = require("readline-sync");
const messagesEn = require("./messages_en.json");
const messagesEs = require("./messages_es.json");

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function chooseLanguage() {
  console.log("=> Choose your language / Elige tu idioma");
  console.log("1) English");
  console.log("2) Español");

  let lang = readline.question();

  while (lang !== "1" && lang !== "2") {
    console.log("=> Please choose 1 or 2. / Por favor elige 1 o 2.");
    lang = readline.question();
  }

  return lang === "1" ? messagesEn : messagesEs;
}

function invalidNumber(num) {
  return num.trim() === "" || Number.isNaN(Number(num));
}

function getNumber(message, messages) {
  prompt(message);
  let input = readline.question();

  while (invalidNumber(input)) {
    prompt(messages.invalid_number);
    input = readline.question();
  }
  return Number(input);
}

function getOperation(messages) {
  prompt(messages.operation);
  let operation = readline.question();

  while (!["1", "2", "3", "4"].includes(operation)) {
    prompt(messages.must_choose);
    operation = readline.question();
  }

  return operation;
}

function calculate(num1, num2, operation) {
  switch (operation) {
  case "1": return num1 + num2;
  case "2": return num1 - num2;
  case "3": return num1 * num2;
  case "4": return num1 / num2;
  }
}

function runCalculator() {
  const messages = chooseLanguage();
  console.clear();
  prompt(messages.welcome);

  while (true) {
    let number1 = getNumber(messages.first_number, messages);
    let number2 = getNumber(messages.second_number, messages);
    let operation = getOperation(messages);

    let result = calculate(number1, number2, operation);
    prompt(`${messages.result} ${result}`);

    prompt(messages.another_operation);
    let again = readline.question();

    while (again !== "1" && again !== "2") {
      prompt(messages.invalid_choice);
      again = readline.question();
    }

    if (again === "2") {
      prompt(messages.bye);
      break;
    }
    console.clear();
  }
}

runCalculator();