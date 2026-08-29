import React, { createContext, useContext, useState } from 'react'


  const AuthContext = createContext()
export default function ContextProvider({children}) {
  const checkUser = localStorage.getItem("Users")
  const [getUser, setUser] = useState(
    checkUser ? JSON.parse(checkUser) : undefined
  )

  return (
    <AuthContext.Provider value={[getUser, setUser]}>
      {children}
    </AuthContext.Provider>
    
  )
}
export const useAuth = ()=> useContext(AuthContext)
