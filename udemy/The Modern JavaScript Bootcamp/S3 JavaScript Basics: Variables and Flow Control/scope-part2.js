// Global (name)
// Local (name)

let name = "Osama";

if (true) {
  let name = "Ahmed";

  if (true) {
    name = "Omar";
    console.log(name); // This will print "Omar"
  }
}

if (true) {
  console.log(name); // This will print "Osama"
}
