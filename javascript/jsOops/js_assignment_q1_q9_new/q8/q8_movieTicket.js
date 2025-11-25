// Q8 - MovieTicket and OnlineTicket demonstrating prototype chain and inheritance

function MovieTicket(movieName, seatNo, price) {
  this.movieName = movieName;
  this.seatNo = seatNo;
  this.price = price;
}

MovieTicket.prototype.printTicket = function() {
  console.log(`Ticket -> Movie: ${this.movieName}, Seat: ${this.seatNo}, Price: ${this.price}`);
};

function OnlineTicket(movieName, seatNo, price, convenienceFee) {
  MovieTicket.call(this, movieName, seatNo, price);
  this.convenienceFee = convenienceFee;
}

OnlineTicket.prototype = Object.create(MovieTicket.prototype);
OnlineTicket.prototype.constructor = OnlineTicket;

OnlineTicket.prototype.getTotalAmount = function() {
  return this.price + this.convenienceFee;
};

// Demo
const ot = new OnlineTicket('Avengers', 'A10', 300, 30);
console.log('Total amount:', ot.getTotalAmount());
// invoke prototype method defined on MovieTicket
ot.printTicket(); // demonstrates prototype chain access

module.exports = { MovieTicket, OnlineTicket };