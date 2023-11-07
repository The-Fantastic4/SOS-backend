import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import mongoose, { ConnectOptions } from "mongoose"
import reg from "./routes/registrationRoute"

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(reg)


const port = process.env.PORT || 4000
const db = process.env.DB_URL as string


mongoose.connect(db,{
    useNewUrlParser: true,
    useUnifiedTopology: true
} as ConnectOptions).then(() => {
    console.log('connected to MongoDB')
})


app.listen(port, ()=>{
    console.log(`Server is listening on ${port}`)
})