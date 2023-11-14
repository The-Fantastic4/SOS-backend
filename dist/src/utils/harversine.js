"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSmallestDistanceBetweenLiveLocationAndPoliceStation = exports.convertCoordinatesToRadians = void 0;
const types_1 = require("./types");
function convertDegreesToRadians(coordinates) {
    const longitudeRadians = coordinates.longitude * (types_1.pi / 180);
    const lattitudeRadians = coordinates.lattitude * (types_1.pi / 180);
    coordinates.longitude = longitudeRadians;
    coordinates.longitude = lattitudeRadians;
    return coordinates;
}
function convertCoordinatesToRadians(liveLocation, policeLocations) {
    let liveLocationRadians = convertDegreesToRadians(liveLocation);
    liveLocation = liveLocationRadians;
    let newPoliceLocations = [];
    for (let local of policeLocations) {
        newPoliceLocations.push(convertDegreesToRadians(local));
    }
    policeLocations = newPoliceLocations;
    return {
        liveLocation,
        policeLocations,
    };
}
exports.convertCoordinatesToRadians = convertCoordinatesToRadians;
// calculates the distance between the user's location and police station
function harversineDistanceCalculator(liveLocation, policeLocation) {
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
    const finalDistance = types_1.earthRadius * tempDistance;
    return {
        finalDistance,
        policeLocation,
    };
}
function returnSmallestHarvisineDistance(distances) {
    for (let i = 0; i < distances.length - 1; i++) {
        if (distances[i].finalDistance > distances[i + 1].finalDistance) {
            distances[i], (distances[i + 1] = distances[i + 1]), distances[i];
        }
    }
    return distances[0];
}
function getSmallestDistanceBetweenLiveLocationAndPoliceStation(locations) {
    const liveLocation = locations.liveLocation;
    const policeLocations = locations.policeLocations;
    let harvesineDistances = [];
    for (let local of policeLocations) {
        let result = harversineDistanceCalculator(liveLocation, local);
        harvesineDistances.push(result);
    }
    return returnSmallestHarvisineDistance(harvesineDistances);
}
exports.getSmallestDistanceBetweenLiveLocationAndPoliceStation = getSmallestDistanceBetweenLiveLocationAndPoliceStation;
//# sourceMappingURL=harversine.js.map