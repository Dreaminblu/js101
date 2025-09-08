// Write a function that will take a short line of text, and write it to the console log within a box.

function logInBox(text) {
  const innerWidth = text.length + 2;
  const topBottom = "+" + "-".repeat(innerWidth) + "+";
  const padding = "|" + " ".repeat(innerWidth) + "|";
  const middle  = "| " + text + " |";

  console.log(topBottom);
  console.log(padding);
  console.log(middle);
  console.log(padding);
  console.log(topBottom);
}

logInBox('To boldly go where no one has gone before.');