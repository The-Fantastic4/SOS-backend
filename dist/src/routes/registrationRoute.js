"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const registrationController_1 = require("../controllers/registrationController");
<<<<<<< HEAD
const policeRegistrationController_1 = require("../controllers/policeRegistrationController");
router
    .post("/register", registrationController_1.register)
    .post("/register_police_station", policeRegistrationController_1.registerPoliceStation)
    .put("/update_police_station/:id/:device_token", policeRegistrationController_1.updatePoliceStation);
=======
router.post('/register', registrationController_1.register)
    .put('/updateToken/:id/:device_token', registrationController_1.addDeviceToken);
>>>>>>> 80e0dfe3397c948f1569c77ec25d72b71583308f
exports.default = router;
//# sourceMappingURL=registrationRoute.js.map