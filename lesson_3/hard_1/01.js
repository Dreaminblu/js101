// Will the following functions return the same results?


function first() {
  return {
    prop1: "hi there",
  };
}

function second() {
  return // <--- ASI (Authomatic Semicolon Insertion) inserts a semicolon here
  {
    prop1: "hi there";
  }
}

console.log(first()); // => { prop1: "hi there" }
console.log(second()); // => undefined


