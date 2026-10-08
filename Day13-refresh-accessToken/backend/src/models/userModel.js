import mongoose from "mongoose";



const userSchima = new mongoose.Schema({

  name:{
    type:String,
    required:true,
    minLength:[3,"Name must be least 3 charactors long"],
    maxLength:[50, "Name must be most 50 charactors long"]
  },
  email:{
    type:String,
    required:true,
    unique:true ,
    // match:/^[\w-\.]+\.+[\w-]{2,4}$/
  },
  password:{
    type:String,
    required:true
  },

  refreshToken:{
    type:String
  }

});







const userModel = mongoose.model("user", userSchima);



export default userModel