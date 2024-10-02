import {v2 as cloudinary} from "cloudinary";
import fs from "fs"
import { fileURLToPath } from "url";

cloudinary.config({ 
    cloud_name: process.env.CLOUDNAME, 
    api_key: process.env.CLOUDNARY_API_KEY, 
    api_secret: process.env.CLOUDNARY_SECRET 
});

const uploadOnCloudnary=async (localFilePath)=>{
    try{
        if(!localFilePath) return null
        // upload filepath on cloudnary
    const responce =  await  cloudinary.uploader.upload(localFilePath,{
            resorce_type:"auto"
        }
        )
        console.log("File is upload on Cloudnary",
          responce.url) ;
          return responce
    }
    catch(err){
    fs.unlinkSync(localFilePath)//remove the locally saved  tempory file as the operation faild
    }
}
export {uploadOnCloudnary}