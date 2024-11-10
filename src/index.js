import dotenv from "dotenv";
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import express from "express";
import connectDB from "./db/index.js"
console.log('intia')
import { app } from "./app.js";
// const app =express();
dotenv.config({
    path:'../.env'
})

connectDB().then(()=>{
    app.listen(process.env.PORT ||8000,()=>{
        console.log(`Server is Running at Port :${process.env.PORT}`);
    })
}).catch((err)=>{
    console.log("MONGO DB Connection faild",err);
})
// First 
/*(async()=>{
try{
await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
console.log("Succsefully Connect")
app.on("error",(error)=>{
    console.log("ERR :",error);
    throw error;
})
app.listen(process.env.PORT,()=>{
    console.log(`App is Listenig Now ${process.env.PORT}`);
})
}
catch(error){
    console.log("ERROR",error);
    throw error;
}
})()*/