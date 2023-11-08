import express from "express";
import { registerPoliceStation, updatePoliceStation } from "../controllers/policeRegistrationController";
import { register, addDeviceToken } from "../controllers/registrationController";
const router = express.Router();

router
  .post("/register", register)
  .post("/register_police_station", registerPoliceStation)
  .put("/update_police_station/:id/:device_token", updatePoliceStation)
  .put('/updateToken/:id/:device_token',addDeviceToken);


export default router
