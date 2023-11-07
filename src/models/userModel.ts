import { timeStamp } from "console"
import mongoose from "mongoose"

const {Schema, model} = mongoose

const userSchema = new Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
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