import React from 'react'
import { useReducer } from 'react';
import { createContext } from 'react'

export const BgContext=createContext();

const bgReducer=(state,action)=>{
switch(action.type){
    case "CHANGE_CHANGE_THEME": return {...state,theme:action.payload}
    return state;
}

}
export const ThemeContextProvider =({children})=>{
    const[state,dispatch]=useReducer(bgReducer,{
        theme:'light'
    })
    const changeBackground=()=>{
        dispatch({type:"CHANGE_THEME",payload:'dark'})
    }
    
    return (
<BgContext.Provider value={{...state,changeBackground}}>
    {children}
</BgContext.Provider>
    )
}


