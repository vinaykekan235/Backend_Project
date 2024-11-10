import dotenv from "dotenv";
import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import express from "express";
const app=express()
dotenv.config({
    path:'./env'
})
// console.log("1",process.env.MONGODB_URI);
const connectDB= async ()=>{
    try{
const conectioninstance =await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
console.log(`\n MONGODB Connected !! DB HOST: ${conectioninstance.connection.host}`)// this use for to check which database is connected 
    }
    catch(error){
        console.log("MONGODB CONNECTION FAILD",error);
        process.exit(1);
    }
}
export default connectDB