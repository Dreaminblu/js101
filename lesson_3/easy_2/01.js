/*
Question:
(restate question in own word if applicable)

  - Replace the word "important" with "urgent" in a given sentance

Examples:
(given one, make some of your own to clarify understanding of question)

  - "Few things in life are as important as house training your pet dinosaur." => "Few things in life are as urgent as house training your pet dinosaur."
  - "" -> ""
  - "importantimportantimportant" -> "importantimportantimportant"

Function call:
(At the bottom so we can easily change the implementation by just modifying the function. i.e. console.log(doSomething()))

  - replaceWithUrgent();

Pseudocode:
(English of your logic, not code!)

  - split the str into a array of words using
  - iterate through the words 
    - find the word "important"
      - replace the word with "urgent"
  - change the array of words back to strings  

Now code! Refer to the pseudocode!

*/



// Given a string, return a new string that replaces every occurrence of the word "important" with "urgent":

let advice = "Few things in life are as important as house training your pet dinosaur.";

function replaceWithUrgent(str) {
  // return str.replace("important", "urgent");

  // split the str into a array of words using
  let words =  str.split(" ");

  // iterate through the words 
  for (let i = 0; i < words.length; i++) {
    // find the word "important"
    if (words[i] === "important") {
      // replace the word with "urgent"
      words[i] = "urgent";
    }
  }
  // change the array of words back to strings  
  return words.join(" ");  
}


console.log(replaceWithUrgent(advice));
