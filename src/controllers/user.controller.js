import {asyncHandler} from "../utils/asyncHandler.js"
import { ApiError } from "../utils/ApiError.js";
import {User} from "../models/user.model.js"
import{uploadOnCloudnary} from "../utils/fileuploading.js"
import { ApiResponce } from "../utils/ApiResponce.js";
console.log("123")
const registerUser=asyncHandler(async (req,res)=>{
    // get the user details from frontend 
    //validation not empty 
    //check if user already exists :username ,email
    // check for images,check for avatar 
    //uplaod them to cloudinary 
    // create user object -create entry in db
    // remove password and refresh token feild from response 
    // check for creation 
    // return response 
        
    
    // get the user details from frontend 

    const {fullname ,email,username,password}= req.body
    // console.log(req.body)

        //validation not empty 

    // if(fullname==""){
    //     throw new ApiError(400,"Fullname is Required");
    // }
   if([fullname,email,username,password
   ].some((feild)=>
feild?.trim()==""
   )
   )
    {
      throw new ApiError(400,"Fullname is Required");
}
    //check if user already exists :username ,email
const existedUser=await User.findOne({
    $or:[{username},{email}] //ye check multiple vlaues ko check karne ka trika hai 
})
if(existedUser){
throw new ApiError(409,"user with email or username already exists");
}
    // check for images,check for avatar 

const avatarLocalPath=req.files?.avatar[0]?.path;
console.log("File.....",avatarLocalPath)
let coverImageLocalPath;
if (req.files && Array.isArray(req.files.coverImage) && req.files.coverImage.length>0){
    coverImageLocalPath=req.files.coverImage[0].path
}
// console.log("File.....",coverImageLocalPath)


if(!avatarLocalPath){
    throw new ApiError(400,"Avatar file is Required")
}


    //uplaod them to cloudinary 

const avatar=await uploadOnCloudnary(avatarLocalPath)
const coverImage=await uploadOnCloudnary(coverImageLocalPath)
if(!avatar){
    throw new ApiError(400,"Avatarfile is Required ")
}

    // create user object -create entry in db
const user=await User.create({
    fullname,
    avatar:avatar.url,
    coverImage:coverImage?.url || "",//isem ye check kar rahe hai ko user ne cover image upload ki hai agar vo succesfull hai to url de do nahi empty rhende becosue db me required field nahi hai
    email,
    password,
    username:username.toLowerCase()
})
const createduser= await User.findById(user._id).select( 
    "-password -refreshToken"//(-) ka meaning means ye feild nahi chhiye
)

if(!createduser){
    throw new  ApiError(500,"Something went wrong registring the user ")
}
return res.status(201).json(
    new ApiResponce(200,createduser,"user successsfullly resgister")
)
})

export {registerUser}