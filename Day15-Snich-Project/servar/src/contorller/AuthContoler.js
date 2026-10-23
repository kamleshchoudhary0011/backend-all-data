
import userModel from "../models/UserModel.js"
import bcryptjs from "bcryptjs"
import { createAccessToken, createRefreshToken, redRefreshToken } from "../utils/AuthUtils.js"



export const userRegister = async(req , res)=>{

const {name , email ,password} = req.body

const isExistEmail = await userModel.findOne({email});

if (isExistEmail) {
  return res.status(400).json({
    message:"user Allready exist with this email address",
    errors:[
      {
        field:"emial",
        msg:"user is allready exist  with this emial address"
      }
    ]
  })
}


const   HeshPassword = await bcryptjs.hash(password , 10);


const user = await userModel.create({
  name,
  email,
  password:HeshPassword,
})


const accessToken = createAccessToken({
  userId:user._id,
  role:user.role
})

const RefreshToken = createRefreshToken({
  userId:user._id,
  role:user.role
});

res.cookie("refreshToken", RefreshToken,{
  httpOnly:true
})

await userModel.findByIdAndUpdate(user._id,{
  RefreshToken:RefreshToken
})


res.status(201).json({
  message:"User Register succesfully",
  user:{
    emial:user.email,
    name:user.name,
    id:user._id
  },
  accessToken
})
}




export const userLogin = async(req, res)=>{
  const {email, password} = req.body;

  const user = await userModel.findOne({
    email
  });

  if(!user){
    return res.satatu(400).json({
      message:"Invalid Email or password "
    })
  }

  const isPasswordValid =bcryptjs.compare(password ,user.password);

  if (!isPasswordValid) {
    return res.status(400).json({
      message:"Invalid Email or password "
    })
  }

  const accessToken = createAccessToken({
    userId:user._id,
    role:user.role
  })
 const RefreshToken= RefreshToken({
    userId:user._id,
    role:user.role
  })

await userModel.findOneAndUpdate({
  email
},{
  RefreshToken
})

res.cookie("refreshToken", RefreshToken,{
  httpOnly:true
})

res.status(200).json({
  mesage:"login Succesfull...",
  data:{
    user:{
     id:user._id,
     email:user.email,
     name:user.name
    },
    accessToken
  }
})
}


export const refreshControler = async(req, res)=>{
  const refreshToken = req.cookies.RefreshToken


  if (!refreshToken) {
    return rea.satats(401).json({
      message:"refresh tokent is required",

    })
  }

  try {
    const decoded =  redRefreshToken(refreshToken)

    const{userId ,role } = decoded

    const user = await userModel.findById(userId);

    if (!refreshToken != user.refreshToken) {

      await userModel.findByIdAndUpdate(user._id,{
        refreshToken:null,
        // isAccountFreeze:false
      })

      return res.status(401).json({
        message:"Refresh token mismatch"
      })

    

    }


    const accessToken = createAccessToken({
      userId, role
  })

  const newRefreshToken = createRefreshToken({
    userId,role
  })

  await userModel.findByIdAndUpdate(user._id,{
    refreshToken:newRefreshToken
  })

  res.cookie("refreshToken",refreshToken,{
    httpOnly:true

  })

  res.statu(200).json({
    message:"token roted SuccessFully",
    data:{
      user:{
        email:user.email,
        name:user.name,
        id:user._id

      },
      accessToken
    }
  })

  } catch (error) {
    return res.status(401).json({
      message:"invalid refresh token"
    })
  }


}

export const meControler = async(req,res)=>{

  const {userId,role} = req.user

  const user = await userModel.findById(userId);


  res.status(200).json({
    
    message:"User Data fatch successFullu",
    data:{
      user:{
        email:user.email,
        name:user.name,
        id:user._id,
        
      }
    }
  })
}