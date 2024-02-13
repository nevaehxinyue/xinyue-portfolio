'use client'
import React, { createContext, useState } from 'react'
import { links } from "@/lib/data"

type SectionName = (typeof links)[number]['name'];

// Can be simplified by using zustand

type ActiveSectionContextType = {
    activeSection: SectionName,
    setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>
}

const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);

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
