// `this` is a keyword that is used inside a function to access the object that the function is defined inside of.

let restaurant = {
  name: "ASB",
  guestCapacity: 75,
  guestCount: 0,
  checkAvailability: function (partySize) {
    seatsLeft = this.guestCapacity - this.guestCount;
    return partySize <= seatsLeft;
  },
  seatParty: function (partySize) {
    this.guestCount += partySize;
  },
  removeParty: function (partySize) {
    this.guestCount -= partySize;
  },
};

restaurant.seatParty(72);
console.log(restaurant.checkAvailability(4));

restaurant.removeParty(6);
console.log(restaurant.checkAvailability(4));
