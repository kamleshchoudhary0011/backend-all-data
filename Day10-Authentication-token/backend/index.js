import app from "./src/app.js"
import { connectDB } from "./src/config/db.js"




await connectDB();

app.listen(3000,(req, res)=>{
  console.log("3000")
})