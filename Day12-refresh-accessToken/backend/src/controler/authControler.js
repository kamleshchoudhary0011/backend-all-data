import userModel from "../models/userModel.js"
import bcryptjs from "bcryptjs"
import { genrateToken, verifyAccessToken, verufyRefreshToken } from "../utils/Auth.js";


export const ragister = async(req , res)=>{

  const {name , email , password} = req.body


  const isUserExist = await userModel.findOne({email});


  if (isUserExist) {
    return res.status(400).json({
      message:"User already exist",
      errors:[
        {
          path:"email",
          email:"user already exists"
        }
      ]
    })
  }

  const heasdPassword = await bcryptjs.hash(password , 10)

  const user = await userModel.create({
    name,
    email,
    password:heasdPassword

  })


  const {accessToken,refreshToken} = genrateToken({userId:user._id})

    user.refreshToken = refreshToken,
    await user.save();


  res.cookie("refreshToken" ,refreshToken,{
    httpOnly:true
  })

  res.status(201).json({
    message:"user Ragister succesfully..",
    data:{
     user:{
      name:user.name,
      email:user.email
     },
    },
    accessToken
  })


}

export const me = async(req ,res)=>{


  const accessToken = req.headers.authorization?.split(" ")[1]
    // console.log(accessToken)
  
  try {
   
    const decoded =  verifyAccessToken(accessToken)
    
   const user= await userModel.findById(decoded.id)

res.status(200).json({
  message:"user fatched successfully..",
  data:{
    name:user.name,
    email :user.email
  }
})



  } catch (error) {
    return res.status(401).json({
      message:"Unauthorize,Invalid or expire access token",
      errors:[

      ]
    })
  }
}


export const refreshToken = async(req, res)=>{
  const refreshToken = req.cookies.refreshToken


  if (!refreshToken) {
    return res.status(400).json({
      messageL:'unauthorizes , refresh token not found'
    })
  }

  try {
   const decoded = await verufyRefreshToken(refreshToken);
  
  

   const user = await userModel.findById(decoded.id) 




   if (refreshToken !== user.refreshToken) {
    user.refreshToken = null 
    await user.save()

    return res.status(401).json({
      message:"Unauthorized, refresh token mismatch"
    })
   }

   const {accessToken , refreshToken:newRefresToken} = genrateToken({userId:user._id})



   res.cookie("refreshToken" , newRefresToken,{httpOnly:true})

   user.refreshToken = newRefresToken

   await  user.save();
   return res.status(200).json({
    message:"Token refreshed successfully ",
    accessToken
   })

  } catch (error) {
    return res.status(401).json({
      message:"Unauthorized , Invalid or expire refresh token"
    })
  }


}


