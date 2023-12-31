import { location } from "./types";
export declare function convertCoordinatesToRadians(liveLocation: location, policeLocations: Array<location>): {
    liveLocation: location;
    policeLocations: location[];
};
export declare function getSmallestDistanceBetweenLiveLocationAndPoliceStation(locations: {
    liveLocation: location;
    policeLocations: Array<location>;
}): {
    finalDistance: number;
    policeLocation: location;
};
