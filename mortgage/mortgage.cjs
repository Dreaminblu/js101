// create a car payment calculator
// determine monthly payment assuming the interest is added monthly

// info needed
// loan amount
// annual percentage rate (APR)
// the loan duration (in months)

// calculate
// monthly interest rate(APR/12)
// loan duration in months

// feedback
// allow 0% apr
// disallow loan amount that aren't int or float(2 decimal points)
// allow just y or n to answer questions

// Setup
const readline = require("readline-sync");
const messages = require("./messages.json");

function prompt(message) {
  console.log(`=> ${message}`);
}

// Invalid number checker
function invalidNumber(num, { isZero = false, isLoanChecked = false } = {}) {
  if (num.trim() === "") {return true;}

  const value = Number(num);
  if (Number.isNaN(value)) {return true;}

  if (isLoanChecked) {
    if (!Number.isInteger(value * 100)) {return true;}
  }

  if (isZero) {
    return value < 0;
  } else {
    return value <= 0;
  }
}

// Get input
function getInput(message, options = {}) {
  const { isZero = false, isLoanChecked = false } = options;

  prompt(message);
  let input = readline.question();

  while (invalidNumber(input, { isZero, isLoanChecked })) {
    const msg = isLoanChecked ? messages.invalid_loan : messages.invalid_num;
    prompt(msg);
    input = readline.question();
  }

  return Number(input);
}

// Calculate
function calculateMonthlyPayment(loanAmount, apr, months) {
  let monthlyRate = (apr / 100) / 12;

  if (monthlyRate === 0) {
    return loanAmount / months;
  }

  return loanAmount * (monthlyRate / (1 - Math.pow(1 + monthlyRate, -months)));
}

// Car loan Calculator: (loan amount, apr, loan duration (months))
function carLoanCalculator() {
  console.clear();
  prompt(messages.welcome);
  console.log("\n-----------------------------------------------\n");

  while (true) {
    let loanAmount = getInput(messages.loan_amount, { isLoanChecked: true });
    let apr = getInput(messages.apr, { isZero: true });
    let loanDuration = getInput(messages.loan_duration);

    let monthlyPayment = calculateMonthlyPayment(loanAmount, apr, loanDuration);

    prompt(`Your monthly payment is $${monthlyPayment.toFixed(2)}`);

    prompt(messages.another_operation);
    let answer = readline.question().toLowerCase();

    while (!["y", "yes", "n", "no"].includes(answer)) {
      prompt(messages.invalid_choice);
      answer = readline.question().toLowerCase();
    }

    if (answer === "n" || answer === "no") {
      prompt(messages.bye);
      break;
    }

    console.clear();
  }
}

carLoanCalculator();