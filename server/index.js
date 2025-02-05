import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import cors from 'cors'
import router from './routes/userRouters.js'

const app=express()
app.use(bodyParser.json())
app.use(cors())
dotenv.config()

app.use(router)

const PORT=process.env.PORT || 7000;
const URL=process.env.MONGO_URL

app.listen(PORT,()=>{
console.log(`server is running on ${PORT}`)
})

mongoose.connect(URL).then(()=>{
    console.log("connect successfully");
}).catch((error)=>{
    console.log(error);
})