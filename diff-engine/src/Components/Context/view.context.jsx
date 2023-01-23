import { createContext, useState, useEffect } from 'react'

export const ViewContext = createContext({
    currentView:null, // --- Currently selected view
    setCurrentView:() => null,

    displayKeymap:false, // --- Shows details about keys,
    setDisplayKeymap:() => {},

    information:null, // --- Display documentation. Except string to indicate info type.
    setInformation:() => {}
})

export const ViewProvider = ({ children }) => {
    
    const [currentView,setCurrentView] = useState(null)
    const [displayKeymap,setDisplayKeymap] = useState(false)
    const [information,setInformation] = useState(null)
    
    const value = {
        currentView,
        setCurrentView,

        displayKeymap,
        setDisplayKeymap,

        information,
        setInformation
    };
    
    return <ViewContext.Provider value={value}>{children}</ViewContext.Provider>

}