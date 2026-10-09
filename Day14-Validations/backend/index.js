import app from "./src/app/app.js";
import connectDb from "./src/Config/db.js";


await connectDb();

app.listen(3000 ,(req ,res)=>{
  console.log("djfhjdf");
})

