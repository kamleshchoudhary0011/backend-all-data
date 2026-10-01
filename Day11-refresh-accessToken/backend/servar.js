import app from "./src/app/app.js";
import dotenv from "dotenv"
import { connectToDB } from "./src/config/DB.js";
dotenv.config()

await connectToDB();



app.listen(process.env.PORT , (req ,res )=>{
  
  console.log(process.env.PORT);
})