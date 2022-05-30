let num = 103.941;

console.log(num.toFixed(1));

console.log(Math.round(num));
console.log(Math.floor(num));
console.log(Math.ceil(num));

let min = 10;
let max = 20;
let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNumber);

// Challenge Area

let makeGuess = function (num) {
  let min = 1;
  let max = 5;

  let answer = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log(`The answer is ${answer}`);
  return num === answer;
};

console.log(makeGuess(1));
