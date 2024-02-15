'use client'
import React, {  createContext, useContext, useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

type ThemeContextType = {
    theme: Theme;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

const ThemeContextProvider = ({children}: {children: React.ReactNode}) => {
    const [ theme, setTheme ] = useState<Theme>('light');
    const toggleTheme = () => {
        if(theme === 'light'){
            setTheme('dark');
            document.documentElement.classList.add('dark');
            //Store the theme the user chose last time
            window.localStorage.setItem('theme', 'dark');
        }else {
            setTheme('light');
            window.localStorage.setItem('theme', 'light');
            document.documentElement.classList.remove('dark');
        }
    }

    //Check if the user selected any theme and then retrieve it 
    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme') as Theme;
        if(localTheme) {
            setTheme(localTheme);
            if(localTheme === 'dark') {
                document.documentElement.classList.add('dark');
            }
        }else if (window.matchMedia("(prefers-color-scheme: dark").matches) {
            setTheme('dark'); 
            document.documentElement.classList.add('dark'); // if no theme stored in the local storage, then use the user system's theme
        }
    }, [])
  return (
   <ThemeContext.Provider value={{
    theme, 
    toggleTheme
   }}>{children}</ThemeContext.Provider>
  )
}

export default ThemeContextProvider

export function useThemeContext (){
    const context = useContext(ThemeContext);
    if(context === null ){
        throw new Error ('useThemeContext must be used within a ThemeContextProvider.')
    }
    return context;
}
