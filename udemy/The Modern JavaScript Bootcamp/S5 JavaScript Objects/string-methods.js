let name = "    Osama Elshimy   ";

// Length property
console.log(name.length);

// Convert to uppercase
console.log(name.toUpperCase());

// Convert to lowercase
console.log(name.toLowerCase());

// Includes method
let password = "abc123password098";
console.log(password.includes("password"));

// Trim
console.log(name.trim());

// Challenge Area

// isValidPassword
// Length is more than 8 characters long, and it doesn't contain the word "password"

let isValidPassword = function (password) {
  if (password.length <= 8) {
    return `Invalid password, your password needs to be more than 8 characters long`;
  } else if (password.includes("password")) {
    return `Invalid password, your password shouldn't contain the word "password"`;
  } else {
    return `Valid password`;
  }
};

console.log(isValidPassword("asdfw")); // Invalid - less than 8 characters
console.log(isValidPassword("hnjfojnfdpassword")); // Invalid - includes the word "password"
console.log(isValidPassword("thisIsValid")); // Valid
console.log(isValidPassword("123456879")); // Valid
