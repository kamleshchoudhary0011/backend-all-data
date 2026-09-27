const multer = require("multer");

//disck storage for local 
const storage  =  multer.diskStorage({
  destination:(req ,file ,cb)=>{
    cb(null , "uploads/")
  },
  filename:(req ,file ,cb)=>{

    // size and ratio and formate 


    cb(null ,Date.now() + file.originalname);
  }
});

/// servar images
const storages = multer.memoryStorage();


const upload = multer({
  storage:storages
});



module.exports = upload
