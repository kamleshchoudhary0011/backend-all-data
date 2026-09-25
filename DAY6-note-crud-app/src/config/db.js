const mongoose = require("mongoose");


const connectDB = async () =>{

  try {

    await mongoose.connect(process.env.mongoURI);

    console.log("sbdmfs")
    
  } catch (error) {
    console.log(`while is connecting  ${error}`)
  }


}

module.exports = connectDB;
