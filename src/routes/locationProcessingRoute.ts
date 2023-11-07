import express from "express";
import getClosestPoliceStationLocation from "../controllers/locationProcessingController";

const router = express.Router();

router.post("/location", getClosestPoliceStationLocation);