import mongoose from "mongoose"

const {Schema,model} = mongoose

const stationSchema = new Schema({
    station_Name:{
        type:String,
        required:true
    },
    longitude:{
        type:Number,
        required:true
    },
    lattitude:{
        type:Number,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    device_token:{
        type:String
    }
},
{
    timestamps: true
})

export const stationModel = model("stations",stationSchema)