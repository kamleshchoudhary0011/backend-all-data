import mongoose  from "mongoose";



const userSchima =  new mongoose.Schema({
  name:{
    type:String,
    
  },
  email:{
    type:String,
    
  },
  password:{
    type:String,
    
  }
});


const model= mongoose.model("user" , userSchima);

export default model