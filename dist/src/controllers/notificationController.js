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
exports.notifyPolice = exports.notifyUser = void 0;
const userModel_1 = require("../models/userModel");
const stationModel_1 = require("../models/stationModel");
const fcmConfig_1 = require("../configs/fcmConfig");
//notifying user of sent alert
function notifyUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { phone_number } = req.params;
            var user = yield userModel_1.userModel.findOne({ phone_number });
            const token = user === null || user === void 0 ? void 0 : user.device_token;
            const username = user === null || user === void 0 ? void 0 : user.firstName;
            const message = {
                token: token,
                android: {
                    notification: {
                        title: `Hello ${username}`,
                        body: "Your request for help has been received. Be calm, the police are on their way."
                    },
                    priority: "high"
                }
            };
            fcmConfig_1.messaging.send(message, false)
                .then((response) => {
                console.log('Notification sent:', response);
                return res.status(200).json({ message: 'Notification Sent' });
            })
                .catch((error) => {
                console.error('Failed to send notification:', error);
                return res.status(400).json({ message: 'Failed to send notification' });
            });
        }
        catch (error) {
            console.error(error);
            res.status(500).send('Internal Server Error');
        }
    });
}
exports.notifyUser = notifyUser;
//notifying police of incoming alert
function notifyPolice(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.query;
            const { firstName, phone_number, latt, long } = req.params;
            var station = yield stationModel_1.stationModel.findOne({ _id: id });
            const token = station === null || station === void 0 ? void 0 : station.device_token;
            const name = station === null || station === void 0 ? void 0 : station.station_Name;
            let latitude = latt;
            let longitude = long;
            const message = {
                token: token,
                android: {
                    notification: {
                        title: `Hello ${name}`,
                        body: "A precious citizen needs your help!\n Use the below information to help."
                    },
                    data: {
                        latitude: latitude,
                        longitude: longitude,
                        username: `${firstName}`,
                        phone_number: `${phone_number}`,
                    },
                    priority: "high"
                }
            };
            fcmConfig_1.messaging.send(message, false)
                .then((response) => {
                console.log('Notification sent:', response);
                return res.status(200).json({ message: 'Notification Sent' });
            })
                .catch((error) => {
                console.error('Failed to send notification:', error);
                return res.status(400).json({ message: 'Failed to send notification' });
            });
        }
        catch (error) {
            console.error(error);
            res.status(500).send('Internal Server Error');
        }
    });
}
exports.notifyPolice = notifyPolice;
//# sourceMappingURL=notificationController.js.map