import { createContext, useState, useEffect } from 'react'

export const ViewContext = createContext({
    currentView:null,
    setCurrentView:() => null,
    displayKeymap:false, // --- Shows details about keys,
    setDisplayKeymap:() => {}
})

export const ViewProvider = ({ children }) => {
    
    const [currentView,setCurrentView] = useState(null)
    const [displayKeymap,setDisplayKeymap] = useState(false)
    
    const value = {
        currentView,
        setCurrentView,
        displayKeymap,
        setDisplayKeymap
    };
    
    return <ViewContext.Provider value={value}>{children}</ViewContext.Provider>

}