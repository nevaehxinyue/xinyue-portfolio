'use client'
import React, { createContext, useContext, useState } from 'react'
import { links } from "@/lib/data"

type SectionName = (typeof links)[number]['name'];

// Can be simplified by using zustand

type ActiveSectionContextType = {
    activeSection: SectionName,
    setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>
}

export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);

const ActiveSectionContextProvider = ({children}: {children: React.ReactNode}) => {
    const [ activeSection, setActiveSection ] = useState<SectionName>("Home");
  return (
    <ActiveSectionContext.Provider value={{
        activeSection,
        setActiveSection
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
