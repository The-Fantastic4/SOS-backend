import { Request, Response } from "express";
import { stationModel } from "../models/stationModel";

export async function registerPoliceStation(req: Request, res: Response) {
  const { station_Name, longitude, lattitude, city } = req.body;
  if (!station_Name || !longitude || !lattitude || !city) {
    return res.status(400).json({
        message: 'Please include all fields'
    })
}
// Find if user already exists
const userExists = await stationModel.findOne({ station_Name })

if (userExists) {
    return res.status(400).json({
        message: 'Account already exists'
    })
}
  const station = await stationModel.create({
    station_Name,
    longitude,
    lattitude,
    city,
  });

  if (station) {
    return res.status(200).json({
      message: "Registration successful",
      station,
    });
  } else {
    return res.status(400).json({
      message: "Registration failed",
    });
  }
}

export async function updatePoliceStation(req: Request, res: Response) {
  const { id, device_token } = req.params;

  try {
    const station = await stationModel.findByIdAndUpdate(
      { _id: id },
      { device_token }
    );

    if (station) {
      return res.status(200).json({
        message: `Updated successfully`,
      });
    } else {
      return res.status(401).json({ error: "User not found" });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ error: "An error occurred while processing your request." });
  }
}
