import React, { useContext, useState } from 'react'
import { RouterContext } from './RouterContext'

export const AuthContext = React.createContext({
  isLoggedIn: false,
  login: () => {
  },
  logout: () => {
  },
  handleChangePage: () => {
  },
})

export const AuthProvider = ({ children }) => {
  const { navigateTo } = useContext(RouterContext)
  const [isLoggedIn, toggleLogin] = useState(false)

  const handleLogIn = (email, password) => {
    toggleLogin(true)
    console.log(email, password)
  }

  const handleLogOut = () => {
    toggleLogin(false)
    navigateTo('/login')
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        login: handleLogIn,
        logout: handleLogOut
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}