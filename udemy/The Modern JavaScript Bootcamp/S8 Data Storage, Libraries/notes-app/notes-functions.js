// READ EXISTING NOTES FROM LOCAL STORAGE

const getSavedNotes = function () {
  const notesJSON = localStorage.getItem("notes");

  if (notesJSON !== null) {
    return JSON.parse(notesJSON);
  } else {
    return [];
  }
};

// SAVE THE NOTES TO LOCAL STORAGE

const saveNotes = function (notes) {
  localStorage.setItem("notes", JSON.stringify(notes));
  return notes;
};

// GENERATE THE DOM STRUCTURE FOR A NOTE

const generateNoteDOM = function (note) {
  const noteEl = document.createElement("p");

  if (note.title > 0) {
    noteEl.textContent = note.title;
  } else {
    noteEl.textContent = "Unnamed note";
  }

  return noteEl;
};

// RENDER THE APPLICATION NOTES

const renderNotes = function (notes, filters) {
  const filteredNotes = notes.filter(function (note) {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
  });

  document.querySelector(".notes").innerHTML = "";

  filteredNotes.forEach(function (note) {
    const noteEl = generateNoteDOM(note);
    document.querySelector(".notes").appendChild(noteEl);
  });
};
