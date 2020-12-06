const assert = require("chai").assert;

// const Plane = require('../Planes/plane');
// const MilitaryPlane = require('../planes/militaryPlane');
const PassengerPlane = require("../planes/passengerPlane");
const Airport = require("../airport");
const MilitaryType = require("../models/militaryType");
// const experimentalPlane = require('../planes/experimentalPlane');
// const ExperimentalTypes = require('../models/experimentalTypes');
const ClassificationLevel = require("../models/ClassificationLevel");
const planes = require("../constants");

describe("Plane with max passenger capacity", () => {
    let planeWithMaxPassengerCapacity = new PassengerPlane(
        "Boeing-747",
        980,
        16100,
        70500,
        242
    );

    it("Should have military planes with transport type", () => {
        let airport = new Airport(planes);
        let transportMilitaryPlanes = airport.getTransportMilitaryPlanes();
        assert.isFalse(
            transportMilitaryPlanes.includes(
                (plane) => plane.getMilitaryType() != MilitaryType.TRANSPORT
            )
        );
    });

    it("Should check passenger plane with max capacity", () => {
        let airport = new Airport(planes);
        let expectedPlaneWithMaxPassengersCapacity = airport.getPassengerPlaneWithMaxPassengersCapacity();
        assert.isFalse(
            expectedPlaneWithMaxPassengersCapacity == planeWithMaxPassengerCapacity
        );
    });

    it("Get passenger plane with max capacity", () => {
        let airport = new Airport(planes);
        airport.sortByMaxLoadCapacity();
        let planesSortedByMaxLoadCapacity = airport.getPlanes();
        let nextPlaneMaxLoadCapacityIsHigherThanCurrent = true;
        for (let i = 0; i < planesSortedByMaxLoadCapacity.length - 1; i++) {
            let currentPlane = planesSortedByMaxLoadCapacity[i];
            let nextPlane = planesSortedByMaxLoadCapacity[i + 1];
            if (currentPlane.getMinLoadCapacity() > nextPlane.getMinLoadCapacity()) {
                nextPlaneMaxLoadCapacityIsHigherThanCurrent = false;
                break;
            }
        }
        assert.isTrue(nextPlaneMaxLoadCapacityIsHigherThanCurrent);
    });

    it("Has at least one bomber in military planes", () => {
        let airport = new Airport(planes);
        let bomberMilitaryPlanes = airport.getBomberMilitaryPlanes();
        let flag = false;
        for (let militaryPlane of bomberMilitaryPlanes) {
            if (militaryPlane.getMilitaryType() === MilitaryType.BOMBER) {
                flag = true;
            } else {
                assert.fail("Test failed!");
            }
        }

        // if not failed;
    });

    it("Should check that experimental planes has classification level higher than unclassified", () => {
        let airport = new Airport(planes);
        let bomberMilitaryPlanes = airport.getExperimentalPlanes();
        let hasUnclassifiedPlanes = false;
        for (let experimentalPlane of bomberMilitaryPlanes) {
            if (
                experimentalPlane.classificationLevel ===
                ClassificationLevel.UNCLASSIFIED
            ) {
                hasUnclassifiedPlanes = true;
            }
            assert.isFalse(hasUnclassifiedPlanes);
        }
    });
});