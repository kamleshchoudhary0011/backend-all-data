import React, { useState } from 'react'
import useApi from '../../shared/useApi';

const Ragister = () => {

  const Api = useApi();

  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

async function handelSumbit(e) {
  e.preventDefault();

  
}

  return (
    <main>
    <form onSubmit={handelSumbit }>
  
  <input type="text" value={name}
   onChange={e => setName(e.target.value)}/>
  <input type="text" value={email}
   onChange={e => setEmail(e.target.value)}/>
  <input type="text" value={password}
   onChange={e => setPassword(e.target.value)}/>

<button > sumbit</button>
    </form>
    </main>
  )
}

export default Ragister
