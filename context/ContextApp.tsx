import React, { FC, createContext, useState } from 'react'
import { TContext } from '../types'

export const Context = createContext<TContext | null>(null)

const ContextApp: FC = ({ children }) => {
  const [dark, setDark] = useState(true)
  const [errorMsg, setErrorMsg] = useState(false)
  const [loginMode, setLoginMode] = useState("signup")
  const [newsType, setNewsType] = useState("")
  const [country, setCountry] = useState("")
  return (
    <Context.Provider
      value={{
        dark,
        setDark,
        errorMsg,
        setErrorMsg,
        loginMode,
        setLoginMode,
        newsType,
        setNewsType,
        country,
        setCountry
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default ContextApp