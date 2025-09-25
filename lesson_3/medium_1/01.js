/*
Question: 
  Write "The Flintstones Rock!" 10 times with each line indented 1 space to the right

Examples:
The FlintStones Rock!
  The FlintStones Rock!
    The FlintStones Rock!
    ...

Function call:
  lineIndent()

Pseudocode:
  set counter = 0
  set result = ""
  while counter < 10
    make spaces = " " repeated counter times
    append spaces + str + new line to result
    increment counter by 1
  return result
*/
let str = "The FlintStones Rock!"

function lineIndent(str) {
  let count = 0;
  let result = "";

  while (count < 10) {
    result += " ".repeat(count) + str + "\n";
    count += 1;
  }

  return result;
}

console.log(lineIndent(str));