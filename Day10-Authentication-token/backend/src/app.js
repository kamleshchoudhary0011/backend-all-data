import dotenv from "dotenv"
dotenv.config();

import express from "express";
import jwt from "jsonwebtoken"
import model from "./model/userModel.js";
import { authenticate } from "./middilware/authMiddleware.js";
import bcryptjs from "bcryptjs"




 const app = express();

 app.use(express.json())
 

 app.post("/api/auth/register" ,async(req , res)=>{

  const {name , email,password} = req.body


  const hashPassword = await bcryptjs.hash(password,10)

  const user = await model.create({
name , 
email ,
password:hashPassword

  })


  const token = jwt.sign(
    {
      id:user._id
    },
    process.env.JWT_SECRATE
  )


  res.status(201).json({
    message:"User crate",
    data:{
      user:{
        email,name,
        id:user._id,

      },
      token
    }
  })





 });



 app.get("/api/auth/me",authenticate , async(req ,res)=>{

console.log(req.user)

res.status(200).json({
  data:{
    user:req.user
  }
})




})



app.post("/api/auth/login" , async(req, res)=>{

  const {email,password} = req.body;
  
  const user = await model.findOne({
    email
  })

   const isValidPassword = bcryptjs.compare(password , user.password);
  
   if (!isValidPassword) {
    return res.status(400).json({
      message:"Invalid Email or password"
    })
   }

   const token = jwt.sign({
    id:user._id,
   },
  process.env.JWT_SECRATE);
  

  res.status(200).json({
    message:"user loggden Succesfully",
    data:{
      user:{
        email:user.email,
        name:user.name

      }
    },
    token
  })

})







 export default app