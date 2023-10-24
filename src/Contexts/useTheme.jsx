import React from 'react'
import { useContext } from 'react'
import { BgContext } from './ThemeContext';


export const useTheme = () => {
 
    let context=useContext(BgContext);
    // if(context==undefined){
    //     new Error("cannot use this statement")
    // }
    return context;
}
