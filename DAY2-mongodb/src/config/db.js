const mongoose = require("mongoose");

const connectDB = async() =>{
 await mongoose.connect("mongodb+srv://kamlesh74895_db_user:uapcIEEn27BrPObd@cluster0.8p0k5te.mongodb.net/").then(()=>{
    console.log("servar dones...")
  }).catch((err)=>{
    console.log(err)
  })
}

module.exports = connectDB