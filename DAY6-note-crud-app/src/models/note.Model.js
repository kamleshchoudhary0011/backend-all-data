const mongoose = require("mongoose");



const noteSchima =  new mongoose.Schema({
title:{
  type:String,
  require:true
},
description:{
  type:String,
  require:true,
  minlength:[20 , "Minimun 20 charectors are required "],

},

});

const noteSModel = mongoose.model("notes", noteSchima);

module.exports = noteSModel;
