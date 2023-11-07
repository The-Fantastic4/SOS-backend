"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pi = exports.earthRadius = void 0;
exports.earthRadius = 6371;
exports.pi = Math.PI;
function convertLongitudinalAndLattitudinalCoordinatesToRadians(coordinates) {
    const longitudeRadians = coordinates.longitude * (exports.pi / 180);
    const lattitudeRadians = coordinates.lattitude * (exports.pi / 180);
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
function returnSmallestHarvisineDistance(distances) {
    for (let i = 0; i < distances.length - 1; i++) {
        if (distances[i].finalDistance > distances[i + 1].finalDistance) {
            distances[i], (distances[i + 1] = distances[i + 1]), distances[i];
        }
    }
    return distances[0];
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
    const finalDistance = exports.earthRadius * tempDistance;
    return {
        finalDistance,
        policeLocation,
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
    return returnSmallestHarvisineDistance(harvesineDistances);
}
//# sourceMappingURL=types.helpers.js.map