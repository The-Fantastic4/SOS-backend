"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const registrationController_1 = require("../controllers/registrationController");
router.post('/register', registrationController_1.register)
    .put('/updateToken/:id/:device_token', registrationController_1.addDeviceToken);
exports.default = router;
//# sourceMappingURL=registrationRoute.js.map