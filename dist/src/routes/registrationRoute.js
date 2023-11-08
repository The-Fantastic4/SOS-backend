"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const registrationController_1 = require("../controllers/registrationController");
const policeRegistrationController_1 = require("../controllers/policeRegistrationController");
router
    .post("/register", registrationController_1.register)
    .post("/register_police_station", policeRegistrationController_1.registerPoliceStation)
    .put("/update_police_station/:id/:device_token", policeRegistrationController_1.updatePoliceStation);
exports.default = router;
//# sourceMappingURL=registrationRoute.js.map