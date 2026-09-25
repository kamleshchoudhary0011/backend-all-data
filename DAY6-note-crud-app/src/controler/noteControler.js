const noteSModel = require("../models/note.Model")


const createNoteControler = async(req ,res)=>{
  
  let {title, description  } = req.body;
  
  
  const newNote = await noteSModel.create({
    title,description
  })
  
  return res.status(201).json({
    
    message:"note created Sucssesfully..",
    data:newNote
  })
  
  
}


const getAllNotesControles =  async(req ,res)=>{
  try {

    const  allnotes = await  noteSModel.find();

    res.status(200).json({
      message:"all notes fatched",
      data:allnotes
    })
  } catch (error) {
    console.log(error);
  }
}
const getOneNotes = async(req ,res) =>{

  const id = req.params.id ;
  console.log(id)
  const data = await noteSModel.findById(id)


res.status(200).json({
  message:"note done",
  data:data
})

}


const updateNotescontroles = async(req ,res) =>{

  const id = req.params.id;
  let body = req.body;


  const updatedNotes = await noteSModel.findByIdAndUpdate(id ,body,{new:true})


  return res.status(200).json({
    message:"note updates success fully ",
    data:updatedNotes
  })

}


const deleteNotesControler = async(req ,res)=>{

  const id = req.params.id;

  const data = await noteSModel.findByIdAndDelete(id);

  return res.status(200).json({
    message:"data deleted successFully....",
    data:data
  })


}
const updatesingleNotescontroles = async(req ,res)=>{

  const id = req.params.id;
  let body = req.body;


  const updatedNotes = await noteSModel.findByIdAndUpdate(id ,body,{new:true})


  return res.status(200).json({
    message:"note updates success fully ",
    data:updatedNotes
  })

}



module.exports = {
  createNoteControler,
  getAllNotesControles,
  getOneNotes,
  updateNotescontroles,
  deleteNotesControler,
  updatesingleNotescontroles
}