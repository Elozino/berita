// import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { FC, createContext, useState } from 'react'
import { NewsData, TContext } from '../types'

export const Context = createContext<TContext | null>(null)

const ContextApp = ({ children }: any) => {
  const [dark, setDark] = useState(true)
  const [errorMsg, setErrorMsg] = useState({
    email: "",
    password: "",
  })
  const [loginMode, setLoginMode] = useState("signup")
  //NEWS
  const [news, setNews] = useState<NewsData[]>([])
  const [newSourceList, setNewSourceList] = useState<string[]>([])
  // USER
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
    newsType: "",
    website: "",
  })

  const [category, setCategory] = useState("general")


  // ASYNC STORAGE
  // const storeData = async (value) => {
  //   try {
  //     const jsonValue = JSON.stringify(value)
  //     await AsyncStorage.setItem('@storage_Key', jsonValue)
  //   } catch (e) {
  //     // saving error
  //   }
  // }
  // const getData = async () => {
  //   try {
  //     const value = await AsyncStorage.getItem('@storage_Key')
  //     if(value !== null) {
  //       // value previously stored
  //     }
  //   } catch(e) {
  //     // error reading value
  //   }
  // }



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
        newSourceList,
        setNewSourceList,
        category,
        setCategory,
        news,
        setNews
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default ContextApp