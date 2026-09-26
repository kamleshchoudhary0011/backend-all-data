const express = require("express");
const connectDB = require("./config/db");
const router = require("./Route/noteRouter");
const noteSModel = require("./models/note.Model");
const cors = require("cors")


const app = express();

app.use(express.json());
app.use(cors({
  origin:"http://localhost:5173",

}))

app.get("/",(req ,res)=>{
res.send("done");
}
)


// cerate karne ke leye 
app.use("/notes" , router);




connectDB();







module.exports = app