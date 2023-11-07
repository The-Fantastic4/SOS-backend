import express from "express"
const router = express.Router()
import { notifyUser,notifyPolice } from "../controllers/notificationController"

router.post('/notifyUser/:phone_number',notifyUser)
.post('/notifyPolice/:station_Name/:firstName/:phone_number/:lat/:lon',notifyPolice)

export default router