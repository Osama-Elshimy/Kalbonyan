let isAccountLocked = false;
let userRole = "admin";

if (isAccountLocked) {
  console.log("Is account locked");
} else if (userRole === "admin") {
  console.log("Welcome admin");
} else {
  console.log("Welcome!");
}

// Challenge Area

let temp = 45;

if (temp <= 32) {
  // It's freezing outside
  console.log("It's freezing outside");
} else if (temp >= 110) {
  // It's hot outside
  console.log("It's hot outside");
} else {
  // Go for it. It's pretty nice
  console.log("Go for it. It's pretty nice");
}
