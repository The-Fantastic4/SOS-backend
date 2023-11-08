import { Request, Response } from "express";
import { stationModel } from "../models/stationModel";
import { location } from "../utils/types";
import {
  convertCoordinatesToRadians,
  getDistanceBetweenLiveLocationAndPoliceStation,
} from "../utils/harversine";

export async function getClosestPoliceStationLocation(
  req: Request,
  res: Response
) {
  const { city, name_of_location, long, latt } = req.body;

  let longitude = parseFloat(long);
  let lattitude = parseFloat(latt);

  let liveLocation: location = {
    name_of_location,
    longitude,
    lattitude,
  };

  const stations = await stationModel.find({ city });

  try {
    if (!stations) {
      return res.json({ error: "No police stations found in the given city." });
    } else {
      let policeLocations: Array<location> = [];

      stations.forEach((station) => {
        let name_of_location = station.station_Name;
        let longitude = station.longitude;
        let lattitude = station.lattitude;

        policeLocations.push({ name_of_location, longitude, lattitude });
      });

      let convertedCoordinates = convertCoordinatesToRadians(
        liveLocation,
        policeLocations
      );

      let result =
        getDistanceBetweenLiveLocationAndPoliceStation(convertedCoordinates);

      return res.json({
        result,
      });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ error: "An error occurred while processing your request." });
  }
}
