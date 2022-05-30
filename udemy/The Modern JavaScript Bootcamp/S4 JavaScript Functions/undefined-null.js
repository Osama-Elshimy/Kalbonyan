// Undefined for valuable

let name;

name = "Ahmed";

if (name === undefined) {
  console.log("Please provide a name");
} else {
  console.log(name);
}

// Undefined for function
let square = function (num) {
  console.log(num); // This will print undefined if no argument is passed
};

let result = square(); // This will print undefined because no return value is returned
console.log(result);

// Null as assigned value
let age = 27;

age = null;

console.log(age);
