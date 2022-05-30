// Multiple arguments
let add = function (a, b, c) {
  return a + b + c;
};

let result = add(10, 1, 5);

console.log(result);

// Default arguments
let getScore = function (name = "Anonymous", score = 0) {
  return "Name: " + name + " - Score: " + score;
};

let score = getScore(undefined, 90);
console.log(score);

// Challenge Area

let calculateTip = function (total, tipPercent = 0.1) {
  return "Total: " + total + "$ |  Tip: " + tipPercent * total + "$";
};

let tipOne = calculateTip(100, 0.2);
let tipTwo = calculateTip(50);

console.log(tipOne);
console.log(tipTwo);
