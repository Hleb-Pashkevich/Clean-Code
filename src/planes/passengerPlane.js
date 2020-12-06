const Plane = require('./plane');

class PassengerPlane extends Plane {

    constructor(model, maxSpeed, maxFlightDistance, maxLoadCapacity, passengersCapacity) {
        super(model, maxSpeed, maxFlightDistance, maxLoadCapacity);
        this._passengersCapacity = passengersCapacity;
    }

    set passengersCapacity(value) {
        this._passengersCapacity = value;
    }

    getPassengersCapacity() {
        return this._passengersCapacity;
    }
}

module.exports = PassengerPlane;