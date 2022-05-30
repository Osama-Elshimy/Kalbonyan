const notes = [
  {
    title: "Workout",
    body: "Workout 6 times per week",
  },
  {
    title: "Reading",
    body: "Read for 30 minutes per day",
  },
  {
    title: "Carrer",
    body: "In order to get what most people want, you have to do what most people won't",
  },
];

// console.log(notes.length); // This will print the number of the array items

// console.log(notes[0]); // This will print the first item in the array

// console.log(notes[notes.length - 1]); // This will print the last item in the array

// console.log(notes.pop()); // This will remove the last item from the array

// notes.push("My new note");

// console.log(notes.shift()); // This will remove the first item from the array

// console.log(notes.unshift("My first note")); // This inserts new elements to the start of the array and returns the new length of the array

// notes.splice(2, 1, "The new note 3");

// notes.forEach(function (item, index) {
//   console.log(index);
//   console.log(item);
// });

// For loop
// for (let i = 0; i <= 2; i++) {
//   console.log(i);
// }

// for (let i = 0; i < notes.length; i++) {
//   console.log(notes[i]);
// }

// for (let i = notes.length - 1; i >= 0; i--) {
//   console.log(notes[i]);
// }

// console.log(notes.length);
// console.log(notes);

// const index = notes.findIndex(function (note, index) {
//   return note.body === "Read for 30 minutes per day";
// });

// console.log(index);

const findNotes = function (notes, query) {
  return notes.filter(function (note, index) {
    const isTitleMatch = note.title
      .toLocaleLowerCase()
      .includes(query.toLocaleLowerCase());
    const isBodyMatch = note.body
      .toLocaleLowerCase()
      .includes(query.toLocaleLowerCase());

    return isTitleMatch || isBodyMatch;
  });
};

// console.log(findNotes(notes, "wo"));

const sortedNotes = function (notes) {
  return notes.sort(function (a, b) {
    if (a.title.toLocaleLowerCase() < b.title.toLocaleLowerCase()) {
      return -1;
    } else if (a.title.toLocaleLowerCase() > b.title.toLocaleLower()) {
      return 1;
    } else {
      return 0;
    }
  });
};

console.log(sortedNotes(notes));
