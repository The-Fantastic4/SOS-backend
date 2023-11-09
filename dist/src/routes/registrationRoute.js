"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const policeRegistrationController_1 = require("../controllers/policeRegistrationController");
const registrationController_1 = require("../controllers/registrationController");
const router = express_1.default.Router();
router
    .post("/register", registrationController_1.register)
    .post("/register_police_station", policeRegistrationController_1.registerPoliceStation)
    .put("/update_police_station/:id/:device_token", policeRegistrationController_1.updatePoliceStation)
    .put('/updateToken/:id/:device_token', registrationController_1.addDeviceToken);
exports.default = router;
//# sourceMappingURL=registrationRoute.js.map