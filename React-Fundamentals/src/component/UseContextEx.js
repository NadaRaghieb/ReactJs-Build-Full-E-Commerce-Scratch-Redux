import React, {createContext,useState} from 'react'

// 1- create context
const ColorContext=createContext();
// 6- update data in context
// 2- create provider
const UseContextProvider = ({children}) => {
const [data, setData]=useState({id:'1065789560', fullName:'Nada Alraghieb'})
const changeData=(id, fullName)=>{
    setData({id, fullName})
}
  return (
    <ColorContext.Provider value={{data, changeData}}>
        {children}
    </ColorContext.Provider>
  )
}
// 3- export context to use ,  provider to warp all component
export {UseContextProvider, ColorContext} 
