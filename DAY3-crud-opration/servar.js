const express = require("express");

const app = express();


let user= [{
  name:"kamlesh",
  age:89,
  id:48378
},
{
  name:"kamlesh",
  age:89,
  id:48378
},
{
  name:"kamlesh",
  age:89,
  id:48378
}]


app.use(express.json())

app.get("/",(req , res)=>{

  res.send(user);

  
})


app.post("/create",(req ,res)=>{
let body = req.body;

res.send(body)
})


app.listen(3000 ,(req ,res)=>{
  console.log("jshfksd")
})