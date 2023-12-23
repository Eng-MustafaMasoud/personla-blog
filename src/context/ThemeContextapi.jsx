"use client"

import { createContext ,useEffect,useState} from "react"

export const ThemeContext =createContext({})



const getFromLocalStorage=()=>{

    // const value = localStorage.getItem("theme")
    // return   "light"||JSON.parse(value)
    if (typeof window !== 'undefined') {
      const value = localStorage.getItem('theme')
      return value || 'light'
    }
}

export const ThemeContextProvider =({children})=>{
  const [theme,setTheme]=useState(()=>{
    getFromLocalStorage()
  })
  const color=theme==="light"?"dark":"light"
  const toggle=()=>{
    setTheme(color)
  }

  useEffect(()=>{
    localStorage.setItem("theme",theme)
  },[theme])
return (
  <ThemeContext.Provider value={{theme,toggle}}>
    {children}
  </ThemeContext.Provider>
)
}