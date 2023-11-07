import express from "express"
const router = express.Router()

import { register, addDeviceToken } from "../controllers/registrationController"

router.post('/register',register)
.put('/updateToken/:id/:device_token',addDeviceToken)

export default router