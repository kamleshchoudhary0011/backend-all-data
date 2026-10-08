import axios from 'axios'
import { useUser } from '../feature/auth/UserContext'


const api = axios.create({
  baseURL:"http://localhost:5173/api",
  withCredentials:true
})

// 
const useApi = () =>{

  const {accesToken} = useUser();

  api.interceptors.request.use(
(config)=>{
if (accesToken) {
    config.headers.Authorization = `Bearee ${accesToken}`  
}

return config
},
(error)=>{
return Promise.reject(error)
}


  )

  return api
}


export default useApi
