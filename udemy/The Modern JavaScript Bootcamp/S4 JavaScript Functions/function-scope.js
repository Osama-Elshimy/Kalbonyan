// Global Scope (convert, tempOne, tempTwo)
// Local Scope (fahrenheit, celsius)
// Local Scope inside of a Local Scope (isFreezing)

let convert = function (fahrenheit) {
  let celsius = (fahrenheit - 32) * (5 / 9);

  if (celsius < 0) {
    let isFreezing = true;
  }
  return celsius;
};
// Call the function a couple of times (32 -> 0), (68 -> 20)
let tempOne = convert(32);
let tempTwo = convert(68);

// Print the converted values
console.log(tempOne);
console.log(tempTwo);
