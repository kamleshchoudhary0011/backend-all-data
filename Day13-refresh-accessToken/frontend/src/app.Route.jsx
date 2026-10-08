import {createBrowserRouter } from "react-router"
import Ragister from "./modules/Auth/Pages/Ragister"
import Profile from "./modules/Auth/Pages/Profile"


const router = createBrowserRouter([
{
  path:"/",
  element:<Ragister/>

},
{
  path:"/Profile",
  element:<Profile/>
}
])


export default router 
