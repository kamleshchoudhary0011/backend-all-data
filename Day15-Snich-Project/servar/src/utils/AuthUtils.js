import jwt from "jsonwebtoken";
import config
 from "../../config/config.js";





 export function createAccessToken({userId, role}){
const accessToken = jwt.sign({
  userId ,role
},config.ACCESS_TOKEN_SECRATE ,{expiresIn:"15Min"})


return accessToken;

 }


  export function createRefreshToken({userId, role}){
const RefreshToken = jwt.sign({
  userId ,role
},config.REFRESH_TOKEN_SECRATE ,{expiresIn:"7Days"})


return RefreshToken
 }


export function readAccessToken(accessToken){
return jwt.verify(accessToken, config.ACCESS_TOKEN_SECRATE)
}


 export function redRefreshToken(refreshToken){
 return jwt.verify(redRefreshToken,config.REFRESH_TOKEN_SECRATE)
 }