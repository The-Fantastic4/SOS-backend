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
    latitude:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    }
},
{
    timestamps: true
})

export const stationModel = model("stations",stationSchema)