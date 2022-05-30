// When `const` is used to declare a variable, this variable can't be reassigned
// However, if `const` is used to declare an object, it's possible to change the value of one of the object's properties

const isRaining = true;
// SYNTAX ERROR
// isRaining = false;

const person = {
  age: 22,
};

person.age += 1;

console.log(person);
