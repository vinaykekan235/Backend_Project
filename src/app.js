import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app =express()
app.use().cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
})
app.use(express.json({
    limit:"16kb"//this use for get the limited becouse from the unlimited data is come so that resons we use limit 
}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))//this are use for when we send the data from url becouse url data most of time is encoded in n hex string 
app.use(express.static("public"));
app.use(cookieParser()) 
// routes import

import userRouter from "./routes/user.routes.js"
// Routes declaration 
console.log("Frist");
app.use("/api/v1/users",userRouter)
console.log("secand");
export {app}