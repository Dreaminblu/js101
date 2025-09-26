// Can you identify all of the variables, primitive values, and objects in the following code?

function boo(scare) {
  let myBoo = scare.toUpperCase() + "!!!";
  console.log(myBoo);
}

const halloweenCollection = {
  greet: "Happy Halloween",
  scare: "Boo",
  wish: "May all your pumpkins be glowing",
};

let myBoo = boo(halloweenCollection["greet"]);

// variables:
  // boo
  // scare
  // myBoo
  // halloweenCollection
  // myBoo

// objects: 
  // boo
  // halloweenCollection
  // console, log, toUpperCase

// primitive values:
  // greet
  // Happy Halloween
  // scare
  // Boo
  // wish
  // May all your pumpkins be glowing

  // Happy Halloween => line 14
  // greet => line 14
  // undefined => line 14

  // scare => line 3
  // !!!
  // HAPPY HALLOWEEN => line 4
  // HAPPY HALLOWEEN!!! => line 5

