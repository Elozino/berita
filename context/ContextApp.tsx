import React, { FC, createContext, useState } from 'react'
import { TContext } from '../types'

export const Context = createContext<TContext | null>(null)

const ContextApp = ({ children }: any) => {
  const [dark, setDark] = useState(true)
  const [errorMsg, setErrorMsg] = useState(false)
  const [loginMode, setLoginMode] = useState("signup")
  const [userAuthInput, setUserAuthInput] = useState({
    email: "",
    password: ""
  })
  const [userInfo, setUserInfo] = useState({
    fullname: "",
    username: "",
    telephone: "",
    profilePicture: "",
    country: "",
    newsType: ""
  })

  return (
    <Context.Provider
      value={{
        dark,
        setDark,
        errorMsg,
        setErrorMsg,
        loginMode,
        setLoginMode,
        userAuthInput,
        setUserAuthInput,
        userInfo,
        setUserInfo,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default ContextApp