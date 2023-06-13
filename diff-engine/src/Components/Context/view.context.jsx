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

    showPlotValues:false,
    setShowPlotValues:() => null,

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
    const [showPlotValues,setShowPlotValues] = useState(false)
    const [range,setRange] = useState({ // Number of plots
        min:-500,
        max:500
    })

    const value = {
        currentView,setCurrentView,
        
        displayKeymap,setDisplayKeymap,

        information,setInformation,

        darkmode,setDarkMode,

        about,setAbout,

        scrollBar,setScrollBar,

        scrollSnap,setScrollSnap,

        isLoading,setIsLoading,

        showPlotValues,setShowPlotValues,

        range,setRange,

    };
    
    return <ViewContext.Provider value={value}>{children}</ViewContext.Provider>

}