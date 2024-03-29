'use client'
import { useThemeContext } from '@/context/ThemeContext'
import React from 'react'
import { BsMoon, BsSun } from 'react-icons/bs'


const ThemeSwitch = () => {
    const { theme, toggleTheme } = useThemeContext()

  
  return (
  <button onClick={toggleTheme} className='fixed bottom-5 right-5 w-[3rem] h-[3rem]
   bg-white bg-opacity-80 backdrop-blur-[0.5rem] border border-white
   border-opacity-40 shadow-2xl rounded-full flex items-center justify-center
    hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950 '>
    { theme === 'light' ? <BsSun /> : <BsMoon />}
    
    </button>
  )
}

export default ThemeSwitch
