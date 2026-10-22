import mongoose from "mongoose";
import config from "./config.js";





export const coonectDB = async() =>{
  await mongoose.connect(config.MONGO_URI);
  console.log("dbconnected");

}