"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_helpers_1 = require("../helpers/types.helpers");
function convertLongitudinalAndLattitudinalCoordinatesToRadians(coordinates) {
    const longitudeRadians = coordinates.longitude * (types_helpers_1.pi / 180);
    const lattitudeRadians = coordinates.lattitude * (types_helpers_1.pi / 180);
    coordinates.longitude = longitudeRadians;
    coordinates.longitude = lattitudeRadians;
    return coordinates;
}
function parseLocationsToRadiansConverter(liveLocation, policeLocations) {
    let liveLocationRadians = convertLongitudinalAndLattitudinalCoordinatesToRadians(liveLocation);
    liveLocation = liveLocationRadians;
    let newPoliceLocations = [];
    for (let local of policeLocations) {
        newPoliceLocations.push(convertLongitudinalAndLattitudinalCoordinatesToRadians(local));
    }
    policeLocations = newPoliceLocations;
    return {
        liveLocation,
        policeLocations,
    };
}
function getDistanceBetweenLiveLocationAndPoliceStation(locations) {
    const liveLocation = locations.liveLocation;
    const policeLocations = locations.policeLocations;
    let harvesineDistances = [];
    for (let local of policeLocations) {
        let result = harvesineDistanceCalculator(liveLocation, local);
        harvesineDistances.push(result);
    }
}
function harvesineDistanceCalculator(liveLocation, policeLocation) {
    const lattitudinalDifference = policeLocation.lattitude - liveLocation.lattitude;
    const longitudinalDifference = policeLocation.longitude - liveLocation.lattitude;
    const tempHarvesineFuncion = Math.sin(lattitudinalDifference / 2) *
        Math.sin(lattitudinalDifference / 2) +
        Math.cos(liveLocation.lattitude) *
            Math.cos(policeLocation.lattitude) *
            Math.sin(longitudinalDifference / 2) *
            Math.sin(longitudinalDifference / 2);
    const tempDistance = 2 *
        Math.atan2(Math.sqrt(tempHarvesineFuncion), Math.sqrt(1 - tempHarvesineFuncion));
    const finalDistance = types_helpers_1.earthRadius * tempDistance;
    return {
        finalDistance,
        policeLocation,
    };
}
//# sourceMappingURL=notificationController.js.map