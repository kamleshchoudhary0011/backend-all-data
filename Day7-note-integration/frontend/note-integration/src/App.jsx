
import { useEffect, useState } from 'react'
import './App.css'
import axios from "axios"
import AllNotes from "./component/AllNotes"

function App() {
const [updateID , setUPdateId ]=useState(null)
const [getnotes , setGetNotes]= useState([]);

const [formvalue , setFormValue] = useState({
  title:"",
  description:""
});

const handelChange = (e) =>{
setFormValue((prev)=> ({...prev,[e.target.name]:e.target.value}))
}


const handelSumbit = async(e) =>{
  e.preventDefault()

  if(updateID){
      let res = await axios.put(`http://localhost:3000/notes/${updateID}`, formvalue)
      console.log(res);
  }else{

 let res = await axios.post("http://localhost:3000/notes/create", formvalue)

  console.log(res)

  setFormValue({
    title:"",
    description:""
  })
  }



}

const getAllNotes = async()=>{

  let res = await axios.get("http://localhost:3000/notes/AllNotes")


  setGetNotes(res.data.data)
}



let deleteNote = async(id)=>{

 let res = await axios.delete(`http://localhost:3000/notes/${id}`)

 console.log(res);

}

let NoteForUpdate = (note) =>{

    setUPdateId(note._id)

setFormValue({
  title:note.title,
  description:note.description
})


}


useEffect(()=>{

  getAllNotes();

},)


  return (
    <>
   
   <div className='h-[40%] p-5'>
  <h1 className=' text-3xl font-semibold '>Note App</h1>

  <form className=' flex flex-col w-70 border  border-amber-400 gap-2 border-4 p-5' onSubmit={handelSumbit}>
  <input type="text"  placeholder='title'  className='border-2 ' onChange={handelChange} name='title' value={formvalue.title} />
  <input type="text"  placeholder='description'   className='border-2' onChange={handelChange} name='description' value={formvalue.description}
  minLength={20}
  required
  />

  <button className='border-3 rounded-2xl border-amber-300 '>Add Note</button>


  </form >

   </div>



<div className='flex flex-wrap gap-2'>
  {
  getnotes.map((val)=>(
     <AllNotes deleteNote={deleteNote} key={val._id} note={val} NoteForUpdate={NoteForUpdate}/>
  ))
}
</div>



    </>
  )
}

export default App
