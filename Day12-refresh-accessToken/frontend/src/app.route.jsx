import {createBrowserRouter } from "react-router"
import Ragister from "../src/feature/auth/pages/Ragister.jsx"
import Profile from "./feature/auth/Profile.jsx"



  const router = createBrowserRouter([

   {
    path:"/ragister",
    element: <Ragister/>
   },
   {
    path:"/profile",
    element:<Profile/>
   }

  ])
  


export default router
