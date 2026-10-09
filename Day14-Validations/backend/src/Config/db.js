import mongoose from "mongoose";
import config from "./config.js";



async function connectDb() {
  
  await mongoose.connect(config.MONGODB_URI)
  console.log("servar is connected ")
}


export default connectDb