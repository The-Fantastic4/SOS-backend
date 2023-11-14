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
exports.updatePoliceStation = exports.registerPoliceStation = void 0;
const stationModel_1 = require("../models/stationModel");
function registerPoliceStation(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { station_Name, longitude, lattitude, city } = req.body;
        const station = yield stationModel_1.stationModel.create({
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
        }
        else {
            return res.status(200).json({
                message: "Registration failed",
            });
        }
    });
}
exports.registerPoliceStation = registerPoliceStation;
function updatePoliceStation(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id, device_token } = req.params;
        try {
            const station = yield stationModel_1.stationModel.findByIdAndUpdate({ _id: id }, { device_token });
            if (station) {
                return res.status(200).json({
                    message: `Updated successfully`,
                });
            }
            else {
                return res.status(401).json({ error: "Resource not found" });
            }
        }
        catch (error) {
            return res
                .status(500)
                .json({ error: "An error occurred while processing your request." });
        }
    });
}
exports.updatePoliceStation = updatePoliceStation;
//# sourceMappingURL=policeRegistrationController.js.map