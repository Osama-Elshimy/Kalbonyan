// Multiple arguments
let add = function (a, b, c) {
  return a + b + c;
};

let result = add(10, 1, 5);

console.log(result);

// Default arguments
let getScore = function (name = "Anonymous", score = 0) {
  // return "Name: " + name + " - Score: " + score;
  return `Name: ${name} - Score: ${score}`;
};

let score = getScore(undefined, 90);
console.log(score);

// Challenge Area

let calculateTip = function (total, tipPercent = 0.1) {
  // return "Total: " + total + "$ |  Tip: " + tipPercent * total + "$";
  return `A ${tipPercent * 100}% tip on $${total} would be $${
    total * tipPercent
  }`;
};

let tipOne = calculateTip(120);

console.log(tipOne);
