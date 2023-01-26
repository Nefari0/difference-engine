import { createContext, useState } from 'react'

export const ViewContext = createContext({
    currentView:null, // --- Currently selected view
    setCurrentView:() => null,

    displayKeymap:false, // --- Shows details about keys,
    setDisplayKeymap:() => {},

    information:null, // --- Display documentation. Except string to indicate info type.
    setInformation:() => {},

    darkmode:true, // --- Set dark and light mode.
    setDarkMode:() => {},
})

export const ViewProvider = ({ children }) => {
    
    const [currentView,setCurrentView] = useState(null)
    const [displayKeymap,setDisplayKeymap] = useState(false)
    const [information,setInformation] = useState(null)
    const [darkmode,setDarkMode] = useState(false)
    
    const value = {
        currentView,
        setCurrentView,

        displayKeymap,
        setDisplayKeymap,

        information,
        setInformation,

        darkmode,
        setDarkMode
    };
    
    return <ViewContext.Provider value={value}>{children}</ViewContext.Provider>

}