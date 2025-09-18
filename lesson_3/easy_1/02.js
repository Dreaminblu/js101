// How can you determine whether a given string ends with an exclamation mark (!)?

let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false

function endsWith(str) {
  return str[str.length - 1] === "!";
}

endsWith(str1);
endsWith(str2);

// method
str1.endsWith("!");
str2.endsWith("!");