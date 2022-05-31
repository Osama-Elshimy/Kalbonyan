const notes = getSavedNotes();

const filters = {
  searchText: "",
};

renderNotes(notes, filters);

document.querySelector(".create-note").addEventListener("click", function (e) {
  notes.push({
    title: "",
    body: "",
  });

  saveNotes(notes);
  renderNotes(notes, filters);
});

document.querySelector(".search-text").addEventListener("input", function (e) {
  filters.searchText = e.target.value;
  renderNotes(notes, filters);
});

document.querySelector("#filter-by").addEventListener("change", function (e) {
  console.log(e.target.value);
});

// LEGACY => NO LONGER NEEDED

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
