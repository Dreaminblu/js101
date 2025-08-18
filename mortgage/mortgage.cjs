// create a car payment calculator
// determine monthly payment assuming the interest is added monthly

// info needed
// loan amount
// annual percentage rate (APR)
// the loan duration (in months)

// calculate
// monthly interest rate(APR/12)
// loan duration in months

// Setup
const readline = require("readline-sync");
const messages = require("./messages.json");

function prompt(message) {
  console.log(`=> ${message}`);
}

// Invalid number checker
function invalidNumber(num) {
  return num.trim() === "" || Number.isNaN(Number(num)) || Number(num) <= 0;
};

// Get input
function getInput(message) {
  prompt(message);
  let input = readline.question();

  while (invalidNumber(input)) {
    prompt(messages.invalid_number);
    input = readline.question();
  }
  return Number(input);
};

// Calculate
function calculateMonthlyPayment(loanAmount, apr, months) {
  let monthlyRate = (apr / 100) / 12;

  return loanAmount * (monthlyRate / (1 - Math.pow(1 + monthlyRate, -months)));
};

// Car loan Calculator prompts for the following: (loan amount, apr, loan duration (months))
function carLoanCalculator() {
  prompt(messages.welcome);

  while (true) {
    console.log("\n-----------------------------------------------\n");

    let loanAmount = getInput(messages.loan_amount);
    let apr = getInput(messages.apr);
    let loanDuration = getInput(messages.loan_duration);

    let monthlyPayment = calculateMonthlyPayment(loanAmount, apr, loanDuration);

    prompt(`Your monthly payment is $${monthlyPayment.toFixed(2)}`);

    prompt(messages.another_operation);
    let answer = readline.question().toLowerCase();

    while (answer !== "yes" && answer !== "no") {
      prompt(messages.invalid_choice);
      answer = readline.question().toLowerCase();
    }

    if (answer === "no") {
      prompt(messages.bye);
      break;
    }
  }
}

carLoanCalculator();



