import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";
console.log("mini")
const  router= Router()
console.log("thired");
router.route("/register").post(registerUser)
export default {router}