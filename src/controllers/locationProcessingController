import { Request, Response } from "express";
import { stationModel } from "../models/stationModel";
import { location } from "../utils/types";
import {
  convertCoordinatesToRadians,
  getDistanceBetweenLiveLocationAndPoliceStation,
} from "../utils/harvesine";

export async function getClosestPoliceStationLocation(
  req: Request,
  res: Response
) {
  const { city } = req.query;
  const { long, latt } = req.params;

  let longitude = parseFloat(long);
  let lattitude = parseFloat(latt);

  let liveLocation: location = {
    longitude,
    lattitude,
  };

  const stations = await stationModel.find({ city });
  let ott = stations.map((obj) => [obj.latitude, obj.longitude]);

  if (stations.length > 0) {
    let policeLocations: Array<location> = [];

    stations.forEach((station) => {
      let longitude = station.longitude;
      let lattitude = station.latitude;

      policeLocations.push({ longitude, lattitude });

      let convertedCoordinates = convertCoordinatesToRadians(
        liveLocation,
        policeLocations
      );
      let result =
        getDistanceBetweenLiveLocationAndPoliceStation(convertedCoordinates);
    });
  }
}
