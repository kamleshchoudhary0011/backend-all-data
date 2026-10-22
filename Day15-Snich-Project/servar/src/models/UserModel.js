import mongoose from "mongoose";




const userSchima = new mongoose.Schema({
  email:{
    type:String,
    required:true,
    unique:true
    },
    name:{
      type:String,
      required:true
  },
  password:{
    type:String,
    required:true
  },
  role:{
    type:String,
    default:"user",
    enum:["user", "seller"]
  },
  RefreshToken:{
    type:String,
    
  }

});


const userModel = mongoose.model("user",userSchima)


export default userModel;


