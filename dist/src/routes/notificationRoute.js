"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const notificationController_1 = require("../controllers/notificationController");
router.post('/notifyUser/:phone_number', notificationController_1.notifyUser)
    .post('/notifyPolice/:station_Name/:firstName/:phone_number/:lat/:lon', notificationController_1.notifyPolice);
exports.default = router;
//# sourceMappingURL=notificationRoute.js.map