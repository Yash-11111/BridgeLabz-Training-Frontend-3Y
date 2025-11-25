// Q5 - Movie Ticket Booking

function validateBooking() {
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const seats = document.getElementById("seats");

  const nameRe = /^[A-Za-z ]+$/;
  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  let ok = true;

  if (!nameRe.test(name.value)) {
    ok = false;
    alert("Invalid name");
  }

  if (!emailRe.test(email.value)) {
    ok = false;
    alert("Invalid email");
  }

  const s = Number(seats.value);
  if (s < 1 || s > 10) {
    ok = false;
    alert("Seats must be 1-10");
  }

  if (!ok) return;

  const booking = {
    name: name.value,
    email: email.value,
    seats: s,
  };

  console.log("Ticket Details:", booking);
  alert("Booking Successful!");
}
