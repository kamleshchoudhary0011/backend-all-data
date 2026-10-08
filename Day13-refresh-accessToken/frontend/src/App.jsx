import {RouterProvider} from "react-router"
import router from "./app.Route"
import AuthProvider from "./modules/Auth/context/AuthProvider"
import './App.css'



function App() {


  return
  
  (
  <AuthProvider>
    <RouterProvider router={router}/>
  </AuthProvider>
  
  )
}

export default App
