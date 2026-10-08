import app from "./src/app/app.js";
import {coonectDb} from "./src/config/db.js"



await coonectDb();


app.listen(3000,()=>{
  console.log("3000")
})