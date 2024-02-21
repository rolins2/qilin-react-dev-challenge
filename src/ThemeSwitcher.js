import {  createContext, useState ,useContext } from "react";

export const themes = {
    dark: 'dark',
    light : 'light'
}

//creating a hook
export const ThemeContext = createContext({});

// export default function useTheme(){
//     return useContext(ThemeContext);
// }
