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
exports.register = void 0;
const userModel_1 = require("../models/userModel");
function register(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { firstName, lastName, phone_number } = req.body;
            const user = yield userModel_1.userModel.create({
                firstName,
                lastName,
                phone_number
            });
            if (user) {
                return res.status(200).json({
                    message: "registration successful",
                    user
                });
            }
            return res.status(401).json({
                message: "registration failed"
            });
        }
        catch (error) {
            console.log(error);
            return res.status(500).send("Internal sever error");
        }
    });
}
exports.register = register;
//# sourceMappingURL=registrationController.js.map