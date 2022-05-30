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

const filters = {
  searchText: "",
};

const renderNotes = function (notes, filters) {
  const filteredNotes = notes.filter(function (note) {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
  });

  document.querySelector(".notes").innerHTML = "";

  filteredNotes.forEach(function (note) {
    const noteEl = document.createElement("p");
    noteEl.textContent = note.title;
    document.querySelector(".notes").appendChild(noteEl);
  });
};

renderNotes(notes, filters);

// Add a new element
// const newParagragh = document.createElement("p");
// newParagragh.textContent = "This is a new element from JS";
// document.querySelector("body").appendChild(newParagragh);

document.querySelector(".new-note").addEventListener("click", function (e) {
  console.log("Did this work?");
  e.target.textContent = "The button was clicked";
});

document.querySelector(".search-text").addEventListener("input", function (e) {
  filters.searchText = e.target.value;
  renderNotes(notes, filters);
});

// NO LONGER NEEDED

// document.querySelector("#name-form").addEventListener("submit", function (e) {
//   e.preventDefault();
//   console.log(e.target.elements.firstName.value);
//   e.target.elements.firstName.value = "";
// });

// NO LONGER NEEDED

// document
//   .querySelector(".show-completed")
//   .addEventListener("change", function (e) {
//     console.log(e.target.checked);
//   });

document.querySelector("#filter-by").addEventListener("change", function (e) {
  console.log(e.target.value);
});
