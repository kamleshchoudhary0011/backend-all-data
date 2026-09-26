import React from 'react'

const AllNotes = ({note,deleteNote,NoteForUpdate}) => {
  return (
  <div className='w=[30%] flex flex-col border-3 p-5  justify-center items-centre   rounded-3xl'>
        <h1 className='text-xl font-bold'>{note.title}</h1>
        <h1 className='p-2'>{note.description}</h1>
        <div className='flex justify-center m-2 gap-2'>
        <button className='p-2  bg-amber-300 text-white' onClick={()=>NoteForUpdate(note)}>update</button>
        <button onClick={()=>deleteNote(note._id)} className='p-2  bg-amber-300 text-white'>delete</button>
        </div>
    </div>
  )
}

export default AllNotes
