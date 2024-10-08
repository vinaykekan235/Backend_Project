// import {asyncHandler} from "../utils/asyncHandler.js"
console.log("123")
const registerUser=async (req,res)=>{
    console.log("2")
    res.status(200).json({
        message:"ok"
    })
}

export {registerUser}