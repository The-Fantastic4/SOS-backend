import express from "express";
const router = express.Router();

import { register } from "../controllers/registrationController";
import { registerPoliceStation, updatePoliceStation } from "../controllers/policeRegistrationController";

router
  .post("/register", register)
  .post("/register_police_station", registerPoliceStation)
  .put("/update_police_station/:id/:device_token", updatePoliceStation);

export default router;
