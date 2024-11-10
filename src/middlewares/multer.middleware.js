import multer from "multer";
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/temp')//replace with folder path
    },
    filename: function (req, file, cb) {
    //   const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)//this is use for unique Name Convention
      cb(null, file.originalname)
    }
  })
  
   export const upload = multer({ 
    storage })