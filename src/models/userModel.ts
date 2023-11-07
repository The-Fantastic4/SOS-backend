import { timeStamp } from "console"
import mongoose from "mongoose"

const {Schema, model} = mongoose

const userSchema = new Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    phone_number:{
        type:String,
        required:true
    },
    device_token:{
        type:String
    }
},{
    timestamps: true
}
)

export const userModel = model("users",userSchema)