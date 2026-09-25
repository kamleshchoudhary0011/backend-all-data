const express = require("express");
const connectDB = require("./config/db");
const router = require("./Route/noteRouter");
const noteSModel = require("./models/note.Model");


const app = express();

app.use(express.json());


app.get("/",(req ,res)=>{
res.send("done");
}
)


// cerate karne ke leye 
app.use("/notes" , router);




connectDB();







module.exports = app