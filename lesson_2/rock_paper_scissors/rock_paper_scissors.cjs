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

// Feedback
// y/n input (too lenient)
// split displayWinner function
// one function determine and other function to display
// this helps minimize side effects
// avoid magic number => could store 3 in a global constant WINNING_SCORE
// simplifying playGame function
// eslint => lengthy functions with too many statements

// ===== Setup / Constants =====
const readline = require("readline-sync");
// Valid choices
const VALID_CHOICES = ["rock", "paper", "scissors", "lizard", "spock"];
// Winning moves
const WINNING_MOVES = {
  rock: ["scissors", "lizard"],
  paper: ["rock", "spock"],
  scissors: ["paper", "lizard"],
  lizard: ["paper", "spock"],
  spock: ["rock", "scissors"]
};
// Winning score
const WINNING_SCORE = 3;

function prompt(message) {
  console.log(`=> ${message}`);
}

// ===== Input Handling =====
function inputChecker(rawInput) {
  rawInput = rawInput.toLowerCase().trim();

  // special case for spock
  if (rawInput === "sp") { return "spock"; }
  if (VALID_CHOICES.includes(rawInput)) { return rawInput; }

  for (let choice of VALID_CHOICES) {
    if (choice[0] === rawInput) { return choice; }
  }
  return null;
}

// Get user choice
function getUserChoice() {
  while (true) {
    prompt(`Choose one: ${VALID_CHOICES.join(", ")}`);
    prompt("Tip: Type the first letter (r, p, s, l) but use \"sp\" for Spock!");

    const rawInput = readline.question();
    const choice = inputChecker(rawInput);

    if (choice) {return choice;}

    prompt("Invalid choice. Try again!");
    prompt("Please choose between \"r\", \"p\", \"s\", \"l\", \"sp\"");
  }
}

function getComputerChoice() {
  const index = Math.floor(Math.random() * VALID_CHOICES.length);
  return VALID_CHOICES[index];
}

// ===== Game Logic =====
function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) { return "tie"; }
  if (WINNING_MOVES[userChoice].includes(computerChoice)) { return "user"; }
  return "computer";
}

// Display Winner for single round
function displayWinner(userChoice, computerChoice) {
  const winner = determineWinner(userChoice, computerChoice);
  prompt(`You chose ${userChoice}, computer chose ${computerChoice}`);

  if (winner === "user") {
    prompt("You win this round!");
  } else if (winner === "computer") {
    prompt("Computer wins this round!");
  } else {
    prompt("It's a tie!");
  }
  return winner;
}

// ===== Score Management =====
function printScore(myScore, computerScore) {
  prompt(`Score: You ${myScore} - Computer ${computerScore}`);
}

// Announce final winner
function announceWinner(myScore, computerScore) {
  if (myScore === WINNING_SCORE) {
    prompt("Congratulations! You won the match!");
  } else if (computerScore === WINNING_SCORE) {
    prompt("Computer won the match! Better luck next time!");
  }
}

// ===== Round Play =====
function playRound(round, myScore, computerScore) {
  const userChoice = getUserChoice();
  const computerChoice = getComputerChoice();

  const result = displayWinner(userChoice, computerChoice);

  if (result === "user") { myScore++; }
  if (result === "computer") { computerScore++; }

  return { myScore, computerScore };
}

// ===== Main Game Loop =====
function playGame() {
  let computerScore = 0;
  let myScore = 0;
  let round = 1;

  while (myScore < WINNING_SCORE && computerScore < WINNING_SCORE) {
    console.clear();
    prompt(`Round: ${round}`);

    const scores = playRound(round, myScore, computerScore);
    myScore = scores.myScore;
    computerScore = scores.computerScore;

    printScore(myScore, computerScore);
    round++;

    prompt("Press \"Enter\" to continue...");
    readline.question();
  }

  announceWinner(myScore, computerScore);
}

// ===== Replay =====
function askReplay() {
  prompt("Do you want to play again? (y/n)");
  let answer = readline.question().toLowerCase().trim();

  while (!["y", "n", "yes", "no"].includes(answer)) {
    prompt("Please enter \"y\" or \"n\".");
    answer = readline.question().toLowerCase().trim();
  }

  return answer === "y" || answer === "yes";
}

// Replay loop
function replayGame() {
  do {
    playGame();
  } while (askReplay());

  prompt("Thank you for playing!");
}

// ===== Start Game =====
replayGame();