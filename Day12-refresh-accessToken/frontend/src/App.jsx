import { useState } from 'react'

import './App.css'
import { RouterProvider } from 'react-router'
import router from './app.route.jsx'
import { UserProvider } from './feature/auth/UserContext.jsx'

function App() {


  return <UserProvider>
    <RouterProvider router={router}/>
         </UserProvider>
}

export default App
