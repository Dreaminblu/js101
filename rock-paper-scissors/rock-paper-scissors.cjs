// Rock, Paper, and Scissors (Lizard, Spock)

// User makes a choice
// Computer makes a choice
// The winner is displayed

// rock > scissors, lizard
// paper > rock, spock
// scissors > paper, lizard
// lizard > paper, spock
// spock > rock, scissors

// add lizard and spock
// shorten input
// Best of Five (if reached three wins, the match is over)

// Set Up
const readline = require("readline-sync");

// Valid choices
const VALID_CHOICES = ["rock", "paper", "scissors", "lizard", "spock"];

function prompt(message) {
  console.log(`=> ${message}`);
}

// Input Checker and allow shortened input
function inputChecker(rawInput) {
  rawInput = rawInput.toLowerCase().trim();

  // special case for spock
  if (rawInput === "sp") {return "spock";}
  if (VALID_CHOICES.includes(rawInput)) {return rawInput;}

  for (let choice of VALID_CHOICES) {
    if (choice[0] === rawInput) {return choice;}
  }
  return null;
}

// Display Winner for single round
function displayWinner(userChoice, computerChoice) {
  prompt(`You chose ${userChoice}, computer chose ${computerChoice}`);

  if (
    (userChoice === "rock" &&
     (computerChoice === "scissors" || computerChoice === "lizard")) ||
    (userChoice === "paper" &&
     (computerChoice === "rock" || computerChoice === "spock")) ||
    (userChoice === "scissors" &&
     (computerChoice === "paper" || computerChoice === "lizard")) ||
    (userChoice === "lizard" &&
     (computerChoice === "paper" || computerChoice === "spock")) ||
    (userChoice === "spock" &&
     (computerChoice === "rock" || computerChoice === "scissors"))
  ) {
    prompt ("You win this round!");
    return "user";

  } else if (userChoice === computerChoice){
    prompt("It's a tie!");
    return "tie";

  } else {
    prompt("Computer wins this round!");
    return "computer";
  }
}

// Rock, Paper, Scissors, Lizard, and Spock
function playGame() {
  let computerScore = 0;
  let myScore = 0;
  let round = 1;

  while (myScore < 3 && computerScore < 3) {
    console.clear();
    prompt(`Round: ${round}`);
    prompt(`Choose one: ${VALID_CHOICES.join(", ")}`);
    prompt(
      "Tip: Type the first letter (r, p, s, l) but use \"sp\" for Spock!"
    );

    let rawInput = readline.question();
    let userChoice = inputChecker(rawInput);

    while (!userChoice) {
      prompt("Invalid choice. Try again!");
      prompt("Please choose between \"r\", \"p\", \"s\", \"l\", \"sp\"");
      rawInput = readline.question();
      userChoice = inputChecker(rawInput);
    }

    let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
    let computerChoice = VALID_CHOICES[randomIndex];
    let result = displayWinner(userChoice, computerChoice);

    if (result === "user") {myScore += 1;}
    if (result === "computer") {computerScore += 1;}
    // Tie does not change scores

    prompt(`Score: ${myScore} - Computer: ${computerScore}`);
    round += 1;

    prompt("Press \"Enter\" to continue...");
    readline.question();
  }

  if (myScore === 3) {
    prompt("Congratulations! You won the match!");
  } else {
    prompt("Computer won the match! Better luck next time!");
  }
}

// Replay loop
function replayGame() {
  while (true) {
    playGame();

    prompt("Do you want to play again? (y/n)");
    let answer = readline.question().toLowerCase().trim();

    while (!["y", "n"].includes(answer[0])) {
      prompt("Please enter \"y\" or \"n\".");
      answer = readline.question().toLowerCase();
    }

    if (answer[0] !== "y") {
      prompt("Thank you for playing!");
      break;
    }
  }
}

replayGame();