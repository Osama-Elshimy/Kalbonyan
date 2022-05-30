// Create an array with five todos
const myArray = [
  {
    text: "Read one page of the quran",
    completed: true,
  },
  {
    text: "Read 30 minuets",
    completed: true,
  },
  {
    text: "Workout",
    completed: true,
  },
  {
    text: "Study for 3 hours",
    completed: false,
  },
  {
    text: "Drink 4 bottles of water",
    completed: false,
  },
];

//    ARRAY METHODS

// Print the first and the second to last items
// console.log(`TODO: ${myArray[0]}`);
// console.log(`TODO: ${myArray[myArray.length - 2]}`);

// Delete the third item
// myArray.splice(2, 1); // Should remove the third item -> "Workout"

// Add a new item into the end
// myArray.push("Make the phone call");

// Remove the first item from the array
// myArray.shift();

// console.log(myArray);

// Print the number of the todo items
// console.log(`You have ${myArray.length} todos`);

//  LOOPING OVER ARRAYS

// myArray.forEach(function (item, index) {
//   console.log(`${index + 1}. ${item}`);
// });

// console.log("=============================");

// Using a for loop to print the array
// for (let i = 0; i < myArray.length; i++) {
//   console.log(`${i + 1} ${myArray[i]}`);
// }

//    SEARCHING ARRAYS
const delteTodo = function (todos, todoText) {
  const index = todos.findIndex(function (todo) {
    return todo.text.toLowerCase() === todoText.toLowerCase();
  });

  if (index > -1) {
    todos.splice(index, 1);
  }
};

// delteTodo(myArray, "workouT");
// console.log(myArray);

//    FILTERING ARRAYS

const getThingsToDo = function (todos) {
  return todos.filter(function (todo) {
    return !todo.completed;
  });
};

// console.log(getThingsToDo(myArray));

//    SORTING ARRAYS

const sortedTodos = function (todos) {
  return todos.sort(function (a, b) {
    if (!a.completed && b.completed) {
      return -1;
    } else if (a.completed && !b.completed) {
      return 1;
    } else {
      return 0;
    }
  });
};

console.log(sortedTodos(myArray));
