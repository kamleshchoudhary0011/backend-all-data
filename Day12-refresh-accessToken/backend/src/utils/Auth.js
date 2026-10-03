import jwt from "jsonwebtoken"
import config from "../config/config.js"



export const genrateToken =({userId})=>{
 
  const accessToken = jwt.sign({id:userId} , config.Access_Token_SECREAT , {expiresIn:"15m"})
  const refreshToken = jwt.sign({id:userId},config.REFRESH_TOKEN_SECREAT , {expiresIn:"7d"});



  return {
    accessToken,
    refreshToken
  }
}

export function verifyAccessToken(token){

  const decoded = jwt.verify(token ,config.Access_Token_SECREAT)
  
  console.log(".............................." , decoded)

  return decoded
}


export function verufyRefreshToken(token){
const decoded = jwt.verify(token , config.REFRESH_TOKEN_SECREAT)

return decoded
}