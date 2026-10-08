import { useState ,createContext ,useContext } from "react"; 




 const AuthContext = createContext();


export function useAuthContext(){
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuthContext must be used within an AuthProvider")
  }

  return context

}

export default function AuthProvider({children}){
  

  cosnt [user , setUser] =useState(null);
  cosnt [accesToken , setAccessToken] =useState(null);


  return (
    <AuthContext.Provider value={{
     user ,
    setUser,
    accesToken,
    setAccessToken
    }}>
      {children}
    </AuthContext.Provider>
  )
    


}

