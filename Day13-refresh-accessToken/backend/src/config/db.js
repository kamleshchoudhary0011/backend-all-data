import mongoose  from "mongoose";
import config from "./config.js";

console.log(".........................."+config.MONGODB_URI)
export const coonectDb = async()=>{

  mongoose.connect(config.MONGODB_URI)

  console.log("connect to db");


}