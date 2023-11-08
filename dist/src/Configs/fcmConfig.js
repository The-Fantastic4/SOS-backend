"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.messaging = void 0;
const firebase_admin_1 = __importDefault(require("firebase-admin"));
var serviceAccount = "./sos-app-6bd86-firebase-adminsdk-ewfsq-0ce893fb9f.json";
firebase_admin_1.default.initializeApp({
    credential: firebase_admin_1.default.credential.cert(serviceAccount)
});
exports.messaging = firebase_admin_1.default.messaging();
//# sourceMappingURL=fcmConfig.js.map