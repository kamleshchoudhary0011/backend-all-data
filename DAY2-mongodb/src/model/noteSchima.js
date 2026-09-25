const mongosse = require("mongoose")


let notesSchima = new  mongosse.Schema({
  title:{
    type:String,
    require :true
    
  }
  ,
  descriptions:{
    type:String,
    minlength :10,
  
  }

})

const  nodeModels = mongosse.model("notes" ,notesSchima);

module.exports = nodeModels;

