import { location, pi, earthRadius } from "./types";

function convertDegreesToRadians(coordinates: location) {
  const longitudeRadians: number = coordinates.longitude * (pi / 180);
  const lattitudeRadians: number = coordinates.lattitude * (pi / 180);

  coordinates.longitude = longitudeRadians;
  coordinates.longitude = lattitudeRadians;

  return coordinates;
}

export function convertCoordinatesToRadians(
  liveLocation: location,
  policeLocations: Array<location>
) {
  let liveLocationRadians: location = convertDegreesToRadians(liveLocation);

  liveLocation = liveLocationRadians;

  let newPoliceLocations: Array<location> = [];

  for (let local of policeLocations) {
    newPoliceLocations.push(convertDegreesToRadians(local));
  }

  policeLocations = newPoliceLocations;

  return {
    liveLocation,
    policeLocations,
  };
}

// calculates the distance between the user's location and police station
function harversineDistanceCalculator(
  liveLocation: location,
  policeLocation: location
) {
  const lattitudinalDifference: number =
    policeLocation.lattitude - liveLocation.lattitude;
  const longitudinalDifference: number =
    policeLocation.longitude - liveLocation.lattitude;

  const tempHarvesineFuncion: number =
    Math.sin(lattitudinalDifference / 2) *
      Math.sin(lattitudinalDifference / 2) +
    Math.cos(liveLocation.lattitude) *
      Math.cos(policeLocation.lattitude) *
      Math.sin(longitudinalDifference / 2) *
      Math.sin(longitudinalDifference / 2);

  const tempDistance: number =
    2 *
    Math.atan2(
      Math.sqrt(tempHarvesineFuncion),
      Math.sqrt(1 - tempHarvesineFuncion)
    );

  const finalDistance = earthRadius * tempDistance;

  return {
    finalDistance,
    policeLocation,
  };
}

function returnSmallestHarvisineDistance(
  distances: Array<{ finalDistance: number; policeLocation: location }>
) {
  for (let i = 0; i < distances.length - 1; i++) {
    if (distances[i].finalDistance > distances[i + 1].finalDistance) {
      distances[i], (distances[i + 1] = distances[i + 1]), distances[i];
    }
  }

  return distances[0];
}

export function getDistanceBetweenLiveLocationAndPoliceStation(locations: {
  liveLocation: location;
  policeLocations: Array<location>;
}) {
  const liveLocation: location = locations.liveLocation;
  const policeLocations: Array<location> = locations.policeLocations;

  let harvesineDistances: Array<{
    finalDistance: number;
    policeLocation: location;
  }> = [];

  for (let local of policeLocations) {
    let result = harversineDistanceCalculator(liveLocation, local);
    harvesineDistances.push(result);
  }

  return returnSmallestHarvisineDistance(harvesineDistances);
}
