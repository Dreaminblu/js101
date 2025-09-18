// Determine whether the following object of people and their age contains an entry for "Spot":

let ages = { Herman: 32, Lily: 30, Granpa: 402, Eddie: 10 };

function containsSpot(obj) {
  return Object.entries(obj).some(([name, age]) => 
    name === "Spot" || age === "Spot"
    );
}

containsSpot(ages);

// method
ages.hasOwnProperty("Spot");

