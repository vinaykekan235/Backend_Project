const asyncHandler=(requestHandler)=>{
   console.log("handler");
   return  (req,res,next)=>{
        
        Promise.resolve(requestHandler(req,res,next)).catch((err)=> next(err));
    }
}


export {asyncHandler}


// const asyncHandler=(fn)=>{
//     async (req,res,next)=>{
// try{
// await fn(req,req,next)
// }
// catch(error){
//     res.status(error.code ||500).json(
//         {
//          success:false,
//          message:error.message
//         }
//     )
// }
//     }
// }