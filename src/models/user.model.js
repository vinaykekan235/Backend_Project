import mongoose ,{Schema} from "mongoose";
import jwt from "json-web-token"
import bcrpt from "bcrypt"
const userSchema= new Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        index:true,// this use for searching data it's make searching optimise 
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
    },
    fullname:{
        type:String,
        required:true,
        trim:true,
        index:true,// this use for searching data it's make searching optimise 
    },
    avatar:{
        type:String,//cloudnary  url
        required:true
    },
    coverImage:{
       type:String 
    },
    watchHistory:[
    {
        type:Schema.Types.ObjectId,
        ref:"Video"
    }
],
password:{
    type:String,
    required:[true,"password is required"]
},
refreshToken:{
    type:String,
}
},{
    timestamps:true
});
userSchema.pre("save",async function(next){
    if(!this.isModified('password')){
        return next();
    }
    this.password= await bcrpt.hash(this.password,8);
    next()
})

userSchema.methods.isPasswordCorrect= async function (password) {
return  await bcrpt.compare(password,this.password)    
}
userSchema.methods.genrateAccessToken=function (){
   return  jwt.sign(
        {
            _id:this._id,
            email:this.email,
            username:this.username,
            fullname:this.fullname
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expireIn:process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}
userSchema.methods.genrateRefreshToken=function (){
    return  jwt.sign(
        {
            _id:this._id,
        },
        process.env.REFRESS_TOEKN_SECRET,
        {
            expireIn:process.env.REFRESH_TOKEN_EXPIRY
        }
    ) 
}

export const User=mongoose.model("User",userSchema);