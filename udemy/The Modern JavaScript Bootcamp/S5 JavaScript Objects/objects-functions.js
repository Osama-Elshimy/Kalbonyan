let myBook = {
  title: "1984",
  author: "George Orwell",
  pageCount: 326,
};

let otherBook = {
  title: "A Peoples History",
  author: "Howard Zinn",
  pageCount: 723,
};

let getSummary = function (book) {
  return {
    summary: `${book.title} by ${book.author}`,
    pageCountSummary: `${book.title} is a ${book.pageCount} pages long`,
  };
};

let bookSummary = getSummary(myBook);
let otherBookSummary = getSummary(otherBook);

console.log(bookSummary.summary);
console.log(otherBookSummary.pageCountSummary);

// Challenge Area
// Create a function that takes in fahrenheit and returns an object with all three measure units

let convert = function (fahrenheit) {
  let celsius = (fahrenheit - 32) * (5 / 9);
  let kalvin = (fahrenheit - 32) * (5 / 9) + 273.15;

  return {
    fahrenheit: `${fahrenheit}`,
    celsius: `${celsius}`,
    kalvin: `${kalvin}`,
  };
};

let tempOne = convert(74);

console.log(tempOne);
