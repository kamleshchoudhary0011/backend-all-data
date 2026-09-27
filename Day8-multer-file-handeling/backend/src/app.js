const express = require("express");
const cors = require("cors");
const app = express();

const route = require('./routes/file.Router')

app.use(express.json());
app.use(cors({
  origin:"http://localhost:5173"
}))

app.use("/file", route)

module.exports = app