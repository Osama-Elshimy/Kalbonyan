// `var` should be avoided for the following reasons:

var firstName = "Osama";
console.log(firstName);

// With `var` we can declare a variable that is already declared

var firstName = "Ahmed";
console.log(firstName);

// `var` is a function scope keyword. If a variable is declared with `var` inside of a function or a `if-block`, that variable will be accessible outsided the function or the `if-block`

if (10 > 9) {
  var anotherName = "Omar";
}

// This variable wouldn't be accessible if it was declared with `let` or `const`.
console.log(anotherName);

// When a variable is declared with `var`, it can be accessed before it's declared inside the code

// Verty confusing behaviour
age = 22;
console.log(age);
var age;

// `var` Will never be used agin
