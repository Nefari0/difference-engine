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

    about:false,
    setAbout:() => null,

    alert:null,
    setAlert:() => null
})

export const ViewProvider = ({ children }) => {
    
    const [currentView,setCurrentView] = useState(null)
    const [displayKeymap,setDisplayKeymap] = useState(false)
    const [information,setInformation] = useState(null)
    const [darkmode,setDarkMode] = useState(true)
    const [about,setAbout] = useState(false)
    const [alert,setAlert] = useState(null)
    
    const value = {
        currentView,
        setCurrentView,

        displayKeymap,
        setDisplayKeymap,

        information,
        setInformation,

        darkmode,
        setDarkMode,

        about,
        setAbout,

        alert,setAlert
    };
    
    return <ViewContext.Provider value={value}>{children}</ViewContext.Provider>

}