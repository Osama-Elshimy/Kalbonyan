//  Function - input (argument), code, output (return value)

let greetUser = function () {
  console.log("Welcome user!");
};

greetUser();

let square = function (num) {
  let result = num * num;
  return result;
};

let value = square(3);
let othervalue = square(10);

console.log(value);
console.log(othervalue);

// Challenge Area

// Convert fahrenheit to celsius
let convert = function (fahrenheit) {
  let celsius = (fahrenheit - 32) * (5 / 9);
  return celsius;
};
// Call the function a couple of times (32 -> 0), (68 -> 20)
let tempOne = convert(32);
let tempTwo = convert(68);

// Print the converted values
console.log(tempOne);
console.log(tempTwo);
