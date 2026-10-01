import mongoose from "mongoose";



const userSchima = new mongoose.Schema({
  name:{
    type:String,
    require:true,
    minLength:3,
    maxLength:50
  
  },
  email:{
    type:String,
    require:true,
    
  },
  password:{
    type:String,
    require:true
  }
});



const userModel = mongoose.model("userCollection", userSchima);


export default userModel;
