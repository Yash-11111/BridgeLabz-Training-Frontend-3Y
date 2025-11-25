// Q5 - Ride-Sharing Application: User, Driver, Trip
// Classes with validation and error handling for calculateFare()

class User {
  constructor(name, rating = 5) {
    this.name = name;
    this.rating = rating;
  }
}

class Driver extends User {
  constructor(name, rating, vehicle) {
    super(name, rating);
    this.vehicle = vehicle; // object { model, plate }
  }
}

class Trip {
  constructor(fromLocation, toLocation, distanceKm) {
    this.fromLocation = fromLocation;
    this.toLocation = toLocation;
    this.distanceKm = distanceKm;
  }

  calculateFare() {
    if (typeof this.distanceKm !== 'number' || this.distanceKm <= 0) {
      throw new Error('Invalid distance for trip');
    }
    const baseFare = 50; // base charge
    const perKm = 10; // per km charge
    return baseFare + perKm * this.distanceKm;
  }
}

// Demo and error handling
const driver = new Driver('Karan', 4.8, { model: 'Swift', plate: 'MH12AB1234' });
const tripGood = new Trip('A', 'B', 12); // valid
const tripBad = new Trip('X', 'Y', -5);  // invalid

try {
  console.log('Fare for tripGood:', tripGood.calculateFare());
} catch (err) {
  console.error('Error calculating fare for tripGood:', err.message);
}

try {
  console.log('Fare for tripBad:', tripBad.calculateFare());
} catch (err) {
  console.error('Error calculating fare for tripBad:', err.message);
}

module.exports = { User, Driver, Trip };