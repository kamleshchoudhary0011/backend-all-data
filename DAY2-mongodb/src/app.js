const express = require("express");
const connectDB  = require("./config/db")
const noteModel  = require("./model/noteSchima")
const app = express();

app.use(express.json());
connectDB()

app.post("/create", (req, res)=>{
let {title , description} =  req.body;

const data = noteModel.create({
  title , description
})

console.log(data)

})

module.exports = app
 