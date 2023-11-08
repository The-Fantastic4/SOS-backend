"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getClosestPoliceStationLocation = void 0;
const stationModel_1 = require("../models/stationModel");
const harversine_1 = require("../utils/harversine");
function getClosestPoliceStationLocation(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { city, name_of_location, long, latt } = req.body;
        let longitude = parseFloat(long);
        let lattitude = parseFloat(latt);
        let liveLocation = {
            name_of_location,
            longitude,
            lattitude,
        };
        const stations = yield stationModel_1.stationModel.find({ city });
        try {
            if (!stations) {
                return res.json({ error: "No police stations found in the given city." });
            }
            else {
                let policeLocations = [];
                stations.forEach((station) => {
                    let name_of_location = station.station_Name;
                    let longitude = station.longitude;
                    let lattitude = station.lattitude;
                    policeLocations.push({ name_of_location, longitude, lattitude });
                });
                let convertedCoordinates = (0, harversine_1.convertCoordinatesToRadians)(liveLocation, policeLocations);
                let result = (0, harversine_1.getDistanceBetweenLiveLocationAndPoliceStation)(convertedCoordinates);
                return res.json({
                    result,
                });
            }
        }
        catch (error) {
            return res
                .status(500)
                .json({ error: "An error occurred while processing your request." });
        }
    });
}
exports.getClosestPoliceStationLocation = getClosestPoliceStationLocation;
//# sourceMappingURL=locationProcessingController.js.map