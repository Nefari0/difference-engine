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

    scrollSnap:true,
    setScrollSnap:() => null,

    scrollingBar:false,
    setScrollBar:() => null,

    isLoading:false,
    setIsLoading:() => null,
})

export const ViewProvider = ({ children }) => {
    
    const [currentView,setCurrentView] = useState(null)
    const [displayKeymap,setDisplayKeymap] = useState(false)
    const [information,setInformation] = useState(null)
    const [darkmode,setDarkMode] = useState(true)
    const [about,setAbout] = useState(false)
    const [scrollBar,setScrollBar] = useState(false)
    const [scrollSnap,setScrollSnap] = useState(true)
    const [isLoading,setIsLoading] = useState(false)
    
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

        scrollBar,setScrollBar,

        scrollSnap,setScrollSnap,

        isLoading,setIsLoading
    };
    
    return <ViewContext.Provider value={value}>{children}</ViewContext.Provider>

}