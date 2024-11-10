import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRouter from "./routes/user.routes.js";  // Correct import of user routes

const app = express();

// Correct CORS setup
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

// Parse JSON and URL-encoded data with limits
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

// Static files and cookie parser
app.use(express.static("public"));
app.use(cookieParser());

// Routes declaration
console.log("First");
app.use("/api/v1/users", userRouter);  // Use the correct router here
console.log("Second");

export { app };
