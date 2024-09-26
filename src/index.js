import dotenv from "dotenv";
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import express from "express";
import connectDB from "./db/index.js"


dotenv.config({
    path:'../env'
})
connectDB();
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