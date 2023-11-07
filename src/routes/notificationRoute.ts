import express from "express"
const router = express.Router()
import { notifyUser } from "../controllers/notificationController"

router.post('/notifyUser/:phone_number',notifyUser)


export default router