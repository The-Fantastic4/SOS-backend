"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.stationModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema, model } = mongoose_1.default;
const stationSchema = new Schema({
    station_Name: {
        type: String,
        required: true
    },
    longitude: {
        type: Number,
        required: true
    },
    latitude: {
        type: Number,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    device_token: {
        type: String
    }
}, {
    timestamps: true
});
exports.stationModel = model("stations", stationSchema);
//# sourceMappingURL=stationModel.js.map