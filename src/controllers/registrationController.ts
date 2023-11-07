import { Request, Response } from "express"
import { userModel } from "../models/userModel"



export async function register(req:Request,res:Response) {
    try {
        const {firstName,lastName,phone_number} = req.body
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
        return res.status(401).json({
            message:"registration failed"
        })
    } catch (error) {
        console.log(error)
        return res.status(500).send("Internal sever error")
    }
}