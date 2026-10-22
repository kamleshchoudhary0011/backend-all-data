import { coonectDB } from "./config/db.js";
import app from "./src/app/app.js";



await coonectDB();

app.listen(3000,()=>{
  console.log("3000")
})