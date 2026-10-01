import jwt from "jsonwebtoken";
import model from "../model/userModel.js";

export const authenticate = async(req ,res, next ) =>{

// get tokent 
  const token = req.headers.authorization;


  // agar token nhi hai to ye chalega 
  if (!token) {

    return res.status(401).json({
      message: "Token note Found "
    })
    
  }


// decode a tokent and get id 
  const data = jwt.verify(token ,process.env.JWT_SECRATE
);
console.log(data)

// find user fron decded id 
  const user = await model.findById(data.id);

// user ko age send krta hai uska sara deta

   req.user = user


   next();


}