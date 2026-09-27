const express = require("express");
const upload = require("../config/multer");



const router = express.Router();

router.post("/", upload.single("image"), (req, res)=>{

  try {

    let body = req.body;
    
    let file = req.file

console.log(file)
        return res.status(200).json({
      message:"done"
    })
  } catch (error) {
    return res.status(500).json({
      message:"internal servar error"
    })
  }
})

module.exports = router;
