const multer = require("multer");



const storage = multer.diskStorage({
  destination:(req, file , cd)=>{
   
    cd(null ,"uploade/")

  },
  filename:(req, file, cd)=>{

    cd(null , Date.now() + file.originalname)

  }
})


const uploade = multer({storage:storage});



module.exports = uploade