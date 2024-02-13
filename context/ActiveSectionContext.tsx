'use client'
import React, { createContext, useContext, useState } from 'react'
import { links } from "@/lib/data"
import { SectionName } from '@/lib/types'



// Can be simplified by using zustand

type ActiveSectionContextType = {
    activeSection: SectionName,
    setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>
    timeOfLastClick: number;
    setTimeOfLastClick:React.Dispatch<React.SetStateAction<number>>
}

export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);

const ActiveSectionContextProvider = ({children}: {children: React.ReactNode}) => {
    const [ activeSection, setActiveSection ] = useState<SectionName>("Home");
    const [ timeOfLastClick, setTimeOfLastClick ] = useState<number>(0) //We need to track of  
    //this to disable the observer temporarily when user clicks on a link
  return (
    <ActiveSectionContext.Provider value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick
    }}>
         {children}
    </ActiveSectionContext.Provider>
  )
}

export default ActiveSectionContextProvider

export function useActiveSectionContext (){
    const context = useContext(ActiveSectionContext);
    if(context === null){
        throw new Error(
            'useActiveSectionContext must be used within an ActiveSectionContextProvider.'
        )

    }
    return context;
}
