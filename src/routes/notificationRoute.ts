import express from "express"
const router = express.Router()
import { notifyUser,notifyPolice } from "../controllers/notificationController"

router.post('/notifyUser/:phone_number',notifyUser)
.post('/notifyPolice/:id/:firstName/:phone_number/:latt/:long',notifyPolice)

export default router