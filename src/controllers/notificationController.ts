import { userModel } from "../models/userModel"
import { stationModel } from "../models/stationModel"
import { Request,Response } from "express"
import  admin from 'firebase-admin'
import {messaging} from "../configs/fcmConfig"



//notifying user of sent alert
export async function notifyUser(req:Request, res:Response){
    try {
        const {phone_number} = req.params
        var user = await userModel.findOne({phone_number})
        const token = user?.device_token as string
        const username = user?.firstName
        const message:admin.messaging.Message = {
            token: token,
            android:{
                notification:{
                    title:`Hello ${username}`,
                    body:"Your request for help has been received. Be calm, the police are on their way."
                },
                priority:"high"
            }
        }

        messaging.send(message,false)
        .then((response:string) => {
            return res.status(200).json({ message: 'Notification Sent' });
          })
          .catch((error:string) => {
            return res.status(400).json({ message: 'Failed to send notification' })
          })
        } catch (error) {
          res.status(500).send('Internal Server Error')
        }
}


//notifying police of incoming alert
export async function notifyPolice(req:Request, res:Response){
    try {
      const {id} = req.query 
        const {firstName,phone_number, latt,long} = req.params
        var station = await stationModel.findOne({_id:id})
        const token = station?.device_token as string
        const name = station?.station_Name as string
        let latitude = latt
        let longitude = long
        const message:admin.messaging.Message = {
            token: token,
            android:{
                notification:{
                    title:`Hello ${name}`,
                    body:"A precious citizen needs your help!\n Use the below information to help."
                },
                data: {
                    latitude: latitude,
                    longitude:longitude,
                    username: `${firstName}`,
                    phone_number: `${phone_number}`,
                  },
                priority:"high"
            }
        }

        messaging.send(message,false)
        .then((response:string) => {
            return res.status(200).json({ message: 'Notification Sent' })
          })
          .catch((error:string) => {
            return res.status(400).json({ message: 'Failed to send notification' })
          })
        } catch (error) {
          res.status(500).send('Internal Server Error');
        }
}