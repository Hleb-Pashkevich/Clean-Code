const Airport = require('./airport');
const planes = require('./constants');

(function run() {

    let airport = new Airport(planes);
    let militaryAirport = new Airport(airport.getMilitaryPlanes());
    let passengerAirport = new Airport(airport.getPasPl());
    console.log(`Military airport sorted by max distance: ${Airport.print(militaryAirport.sortByMaxDistance())}`);
    console.log(`Passenger airport sorted by max speed: ${Airport.print(passengerAirport.sortByMaxSpeed())}`);
    console.log(`Plane with max passenger capacity: ${Airport.print(passengerAirport.getPassengerPlaneWithMaxPassengersCapacity())}`);
})();