import { Request, Response } from "express"
import { userModel } from "../models/userModel"


//registering user
export async function register(req:Request,res:Response) {
    try {
        const {firstName,lastName,phone_number} = req.body
        if (!firstName || !lastName || phone_number) {
            return res.status(400).json({
                message: 'Please include all fields'
            })
        }
        // Find if user already exists
        const userExists = await userModel.findOne({ phone_number })

        if (userExists) {
            return res.status(400).json({
                message: 'Account already exists'
            })
        }
        const user = await userModel.create({
            firstName,
            lastName,
            phone_number
        })
        if(user){
           return res.status(200).json({
                message:"registration successful",
                user
            })
        }
        return res.status(400).json({
            message:"registration failed"
        })
    } catch (error) {
        return res.status(500).send("Internal sever error")
    }
}



//updating user info with device token
export async function addDeviceToken(req:Request,res:Response){
    try {
        const {id,device_token} = req.params
        const user = await userModel.findByIdAndUpdate({_id:id},{device_token})
        if(user){
           return res.status(200).json({message:"user updated"})
        }
        return res.status(400).json({message:"failed to update"})
    } catch (error) {
        return res.status(500).send("Internal server error")
    }
}