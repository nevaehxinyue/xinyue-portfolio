'use client'
import React, { useEffect, useState } from 'react'
import { BsMoon, BsSun } from 'react-icons/bs'

type Theme = 'light' | 'dark'
const ThemeSwitch = () => {
    const [ theme, setTheme ] = useState<Theme>('light');
    const toggleTheme = () => {
        if(theme === 'light'){
            setTheme('dark');
            //Store the theme the user chose last time
            window.localStorage.setItem('theme', 'dark');
        }else {
            setTheme('light');
            window.localStorage.setItem('theme', 'light');
        }
    }

    //Check if the user selected any theme and then retrieve it 
    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme') as Theme;
        if(localTheme) {
            setTheme(localTheme);
        }else if (window.matchMedia("(prefers-color-scheme: dark").matches) {
            setTheme('dark'); // if no theme stored in the local storage, then use the user computer's theme
        }
    }, [])

  return (
  <button onClick={toggleTheme} className='fixed bottom-5 right-5 w-[3rem] h-[3rem]
   bg-white bg-opacity-80 backdrop-blur-[0.5rem] border border-white
   border-opacity-40 shadow-2xl rounded-full flex items-center justify-center
    hover:scale-[1.15] active:scale-105 transition-all '>
    { theme === 'light' ? <BsSun /> : <BsMoon />}
    
    </button>
  )
}

export default ThemeSwitch
