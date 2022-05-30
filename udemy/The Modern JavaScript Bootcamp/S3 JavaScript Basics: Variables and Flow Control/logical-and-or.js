let temp = 15;

// Logical And Operator - True if both conditions are true. False otherwise.
// Logical Or Operator - True if at least one condition is true. False otherwise.

if (temp >= 60 && temp <= 90) {
  console.log("It's pretty nice outside");
} else if (temp <= 0 || temp >= 120) {
  console.log("Don't go outside");
} else {
  console.log("Do what you want");
}

// Challenge Area

let isGuestOneVegan = true;
let isGuestTwoVegan = false;

// Are both vegan? Only offer up vegan dishes.
if (isGuestOneVegan && isGuestTwoVegan) {
  console.log("Only offer up vegan dishes.");
}
// At least one vegan? Make sure to offer up some vegan options.
else if (isGuestOneVegan || isGuestTwoVegan) {
  console.log("Make sure to offer some vegan options.");
}
// Else, Offer up anything on the menue
else {
  console.log("Offer up anything on the menue.");
}
