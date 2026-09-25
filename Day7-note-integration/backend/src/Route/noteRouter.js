const express = require("express");

const {createNoteControler , getAllNotesControles, getOneNotes, updateNotescontroles, deleteNotesControler, updatesingleNotescontroles} = require("../controler/noteControler");

const router = express.Router();
// CREATE NOTE
router.post("/create" , createNoteControler);

// READ ALL NOTES 
router.get("/AllNotes" , getAllNotesControles);

// READ SINGEL NOTES
router.get("/:id" , getOneNotes);

// UPDATE NOTES
router.put("/:id" , updateNotescontroles);



// UPDATE fildel  NOTES singel objcet 
router.patch("/:id/signle" , updatesingleNotescontroles);



// DELETED ONE NOTES 
router.delete("/:id" , deleteNotesControler);



module.exports = router



